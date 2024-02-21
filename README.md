# Project #10 - Argent Bank Frontend

This codebase contains the code needed to run the frontend for Argent Bank.

It needs the backend server to be running to work properly. You can find the
backend server codebase and the instructions to run it
[here](https://github.com/hbouttev/Project-10-Bank-API).

## Install dependencies

```bash
npm install
```

## Launch dev server

```bash
npm run dev
```

## Configure backend server base URL

The default backend server base URL is already set to
`http://localhost:3001/api/v1`.

To modify the backend server base URL you need to set the `VITE_API_BASE_URL`
environment variable in the `.env.development` file.


```dotenv
VITE_API_BASE_URL=http://localhost:3001/api/v1
```
