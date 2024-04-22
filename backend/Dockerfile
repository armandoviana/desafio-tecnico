FROM node:18-alpine AS builder  
WORKDIR /app  

COPY package*.json ./  
RUN npm install  
RUN npm install dotenv

# Create a separate runtime image for efficiency
FROM node:18-alpine  
WORKDIR /app  

COPY . .  
EXPOSE 3000  

# Entrypoint script with environment variable handling
ENTRYPOINT [ "node", "-r", "dotenv/config", "server.js" ]

# Optional: Add environment variables for database connection
ENV PGUSER=${PGUSER}  
ENV PGPASSWORD=${PGPASSWORD}
ENV PGHOST=${PGHOST}
ENV PGPORT=${PGPORT}
ENV PGDATABASE=${PGDATABASE}