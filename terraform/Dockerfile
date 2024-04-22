FROM hashicorp/terraform:latest AS builder

WORKDIR /app

COPY main.tf variables.tf backend.hcl provider.tf ./
RUN terraform init

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/ .

CMD ["terraform", "plan"]