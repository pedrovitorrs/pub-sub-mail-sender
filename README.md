# Aqui - NodeJS API

## Instalação

Para instalar as dependencias do boilerplate, clone o projeto e execute o seguinte comando dentro da pasta.

```shell
yarn
```
logo após execute o sistema:

```
yarn start:dev
```

### Pré-requisitos


Para executar este container deverá ter o Docker instalado.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

O projeto faz uso de banco de dados Postgres, caso o banco estiver local deverá estar instalado.

* [Postgres](https://www.postgresql.org/download/)

### Usage

#### Documentation
Generate API documentation for development environment

Gerar a documentação da API
```shell
// or npm run start:docs
yarn start:docs
```

Access documentation for browser
```
http://localhost:<API_PORT>/api/docs
```

#### Antes de executar o projeto
Execute `ssh-keygen` e renomei as chaves para public.key e private.key, geramos o JWT através de um par de chaves RSA.

#### Start API
Rodar o projeto
```shell
// npm run start:dev
yarn start:dev
```

### Containers
```shell

# Creating network
$ docker network create -d bridge postgres-network


# Running Postgres
$ docker run --name=postgres-aqui -d -p 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_USER=postgres --network=postgres-network -v <YOUR_FOLDER>:/var/lib/postgresql/data   postgres

# Runninng  PgAdmin
$ docker run --name pgadmin-aqui --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=<YOUR_EMAIL>" -e "PGADMIN_DEFAULT_PASSWORD=password" -d dpage/pgadmin4

```

#### Compose Project

List the different parameters available to your container

O projeto já possui um docker-compose configurado, conseguirá executar o projeto somente executando o código:


```shell
docker-compose up
```

Para construir a Imagem do Docker:

```shell
docker build -t local/aqui-nodejs .
```

Para executar o Docker na porta 5000:

```shell
docker run -p 5000:5000 -it -d local/aqui-nodejs
```

#### Environment Variables

* `NODE_ENV` - Ambiente de desenvolvimento.
* `DATABASE_NAME` - Nome da base de dados.
* `DATABASE_USERNAME` - Usuario de acesso ao banco de dados.
* `DATABASE_PASSWORD` - Senha de acesso ao banco de dados.
* `DATABASE_HOST` - Endereço da máquina vinculada ao banco de dados.
* `DATABASE_DIALECT` - Protocolo de comunicação com o banco de dados. ex: "postgres", "mysql"
* `APP_PORT` - Porta da aplicação.
* `JWT_SECRET` - Chave para criptografia.
* `TOKENTIME` - Tempo de expiração do token de acesso.
* `DATABASE_CONNECTION_STRING` - URI de conexão direta com o banco de dados
* `MONGO_URI` - URI de conexão direta ao MongoDB
* `REDIS_HOST` - Endereço da máquina vinculada ao banco de dados.
* `REDIS_PORT` - Porta habilitada da máquina vinculada ao banco de dados.

## Authors

* **Marcio Braga** - *Initial work* - [Toborneiro](https://gitlab.com/Toborn)
* **Iago Ferreira** - *Complements* - [iagxferreira](https://github.com/iagxferreira)
* **Obede Doreto** - *Complements* - [ifoxxiedev](https://github.com/ifoxxiedev)
* **Pedro Rodrigues** - *Complements* - [pedrovitorrs](https://github.com/pedrovitorrs)

## Como contribuir:

Esteja sempre atento à criação de novas branches, padronização de commits e comentários em código
para que possamos melhorar sua mantenabilidade.
