# EcoLicença

Sistema de licenciamento ambiental e registro de denúncias, desenvolvido de forma incremental como projeto de portfólio full-stack.

## Stack

| Camada         | Tecnologia                    |
|----------------|-------------------------------|
| Backend        | Java 21 · Spring Boot         |
| Frontend       | Angular 19 (standalone)       |
| Banco de dados | PostgreSQL                    |
| Infraestrutura | Docker                        |

## Estrutura do repositório

```
ecolicenca/
├── backend/
│   └── licenca-service/    # API Spring Boot
├── frontend/               # Aplicação Angular
└── docs/
    ├── arquitetura/        # Diagramas C4
    └── adr/                # Architecture Decision Records
```

## Arquitetura

- **Modelo C4:** diagramas de contexto, contêineres e componentes em `docs/arquitetura/`.
- **Decisões técnicas:** registradas como ADRs em `docs/adr/`.

## Como executar

### Pré-requisitos

- Java 21
- Node.js 20+ e npm

### Backend

```bash
cd backend/licenca-service
./mvnw spring-boot:run
```

A API sobe em `http://localhost:8080`.

### Frontend

```bash
cd frontend
npm install
npm start
```

Acesse `http://localhost:4200`. O `npm start` usa o `proxy.conf.json` para encaminhar as chamadas `/api` ao backend na porta 8080.

## Comandos úteis do frontend

| Comando                          | Descrição                                     |
|----------------------------------|-----------------------------------------------|
| `npm start`                      | Servidor de desenvolvimento com proxy         |
| `ng build`                       | Build de produção em `dist/`                  |
| `ng test`                        | Testes unitários (Karma)                      |
| `ng generate component <nome>`   | Gera um novo componente                       |

Referência completa: [Angular CLI](https://angular.dev/tools/cli).

## Progresso

- [x] **A01 · Fundação:** monorepo, modelo C4 e Hello Full-Stack (endpoint `/api/v1/status` consumido pelo Angular)