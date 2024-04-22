# Desafio técnico - Cubos DevOps

1 - Baixar a cli do terraform

    https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

2 - Buildar a imagem docker 

    docker build -t my-terraform-project .

3 - Execute a imagem

    docker run -it --rm my-terraform-project 
    #Isso executará o contêiner no modo interativo ( -it), removê-lo após sair ( --rm) e executará o terraform plancomando especificado no CMDseu Dockerfile. O plano Terraform será exibido em seu terminal.

4 - Aplicar as aterações

    docker run -it --rm my-terraform-project terraform apply



