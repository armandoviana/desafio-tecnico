provider "docker" {
  host = "docker.io"
}

provider "postgres" {
  host = "localhost"
  username = "postgres"
  password = "password"
}

resource "docker_image" "backend" {
  name = "my-backend-app"
  source = "path/to/your/backend/image" 
}

resource "docker_image" "frontend" {
  name = "my-frontend-app"
  source = "path/to/your/frontend/image"
}

resource "docker_container" "backend_container" {
  name = "my-backend-container"
  image = docker_image.backend.name
  port = 3000
}

resource "docker_container" "frontend_container" {
  name = "my-frontend-container"
  image = docker_image.frontend.name  
  port = 8080
}

# Define PostgreSQL database
resource "postgres_db" "database" {
  name = "my-database"
  username = "admin"
  password = "secure_p4$$w0rd"
}