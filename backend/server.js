import http from 'http';
import PG from 'pg';
import 'dotenv/config';

// Retrieve environment variables for database connection
const user = process.env.PGUSER;
const pass = process.env.PGPASSWORD;
const host = process.env.PGHOST;
const db_port = process.env.PGPORT;

// Ensure all environment variables are defined
if (!user || !pass || !host || !db_port) {
  throw new Error('Missing required environment variables for database connection!');
}

const client = new PG.Client({
  user,
  password: pass,
  host,
  port: db_port
});

let successfulConnection = false;

http.createServer(async (req, res) => {
  console.log(`Request: ${req.url}`);

  if (req.url === "/api") {
    try {
      await client.connect();
      successfulConnection = true;
      console.log('Database connected successfully');
    } catch (err) {
      console.error('Database connection failed:', err.stack);
    }

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);

    let result;

    try {
      result = (await client.query("SELECT * FROM users")).rows[0];
    } catch (error) {
      console.error(error);
    }

    const data = {
      database: successfulConnection,
      userAdmin: result?.role === "admin"
    };

    res.end(JSON.stringify(data));
  } else {
    res.writeHead(503);
    res.end("Internal Server Error");
  }

}).listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});
