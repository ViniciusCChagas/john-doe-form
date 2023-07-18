# Instalação

#### 1 - Altere as credenciais de acesso e nome do Banco de Dados no arquivo `.env` localizado na raiz do projeto.

```
PORT=3030 (Porta do banco de dados)

POSTGRESS_USER="postgres" (Nome do usuario do banco de dados)
POSTGRESS_HOST="localhost" (Endereço do banco de dados)
POSTGRESS_DATABASE="johndoeform" (Nome da tabela do banco de dados)
POSTGRESS_PASS="postgres" (Senha do banco de dados)
POSTGRESS_PORT="5432" (Porta do banco de dados)
```

<br>

#### 2 - Execute o arquivo `dbscript.sql` no banco de dados para criar as tabelas necessárias

<br>

#### 3 - instale as dependências do projeto, execute o seguinte comando na raiz do projeto:

```
npm install
```

# Execução

Para executar o projeto, utilize o seguinte comando:

```
npm run dev
```
