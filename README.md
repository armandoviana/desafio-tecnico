# Desafio técnico - Cubos DevOps

1 - baixar a imagem do Postgres 15.4 no Docker Hub
    docker pull postgres:15.4

2 -  Acessando o banco de dados (Conectar ao banco de dados PostgreSQL a partir do contêiner):

    docker run --hostname my-postgres-db -e POSTGRES_PASSWORD=security postgres:15.4 

    docker ps  # comando para listar contêineres em execução
    docker exec -it <container_id> psql -h localhost -p 5432

    Pode ser necessário definir variáveis ​​de ambiente como POSTGRES_PASSWORDacessar o banco de dados com autenticação.

    Criar volume 

    docker run --hostname my-postgres-db -e POSTGRES_PASSWORD=security postgres:15.4 

2.1 - Executar os scripts de Create Table e User

3 - Instalar o dotenv para tratar com variáveis de ambiente

    npm install dotenv  # executar comando no diretorio raiz

4 - Criar arquivo .env para definir

    PGUSER=admin 
    PGPASSWORD=sql/script.sql
    PGHOST=my-postgres-db
    PGPORT=5432


5 - Buildar imagens das aplicações backend e frontend

    docker build -t my-frontend-app . 
    docker build -t my-backend-app . 

6 - Executar as imagens no Container Docker

    docker run -d -p 80:80 my-frontend-app
    docker run -d -p 3000:3000 my-backend-app

