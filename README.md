# ConectaDoa

Sistema de gestão de doações para uma organização social. Projeto Integrador Extensionista II · ADS.

## Requisitos

- Node.js 20 ou superior
- npm

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Em um terminal, inicie a API:

   ```bash
   npm run api
   ```

3. Em outro terminal, inicie o frontend:

   ```bash
   npm run dev
   ```

4. Abra http://localhost:5173. A página deve mostrar **Status da API: ok** com a data e a hora da resposta.

## Scripts

- `npm run api`: inicia a API Express na porta 3000.
- `npm run dev`: inicia o frontend Vite na porta 5173.
- `npm run build`: gera a versão de produção.

## Endpoint

`GET /api/health` retorna o estado da API e o timestamp da verificação em JSON.
