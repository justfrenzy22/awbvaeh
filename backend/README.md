# API with basic validation and error handling

by **Petar Yankov**

A lightweight Express + TypeScript backend API with in-memory storage for handling items.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. **Navigate to the backend folder:**

```bash
cd awbvaeh/backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
npm start
```

4. **Expected Output:**

```bash
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node server.ts`

> Server is running
> Listening on http://localhost:8000
```

---

## API Documentation

### Postman Collection

[View Postman Documentation with working requests](https://www.postman.com/galactic-escape-205994/workspace/new-team-workspace/collection/31467064-f7704f1c-e037-4084-ad7f-85d5559c6e2e?action=share&creator=31467064&active-environment=31467064-9027d7c7-aa93-4548-b7dd-79bff9196896)

| Method   | Endpoint            | Description         |
| :------- | :------------------ | :------------------ |
| `GET`    | `/routes/items`     | get items           |
| `POST`   | `/routes/items`     | create item         |
| `GET`    | `/routes/items/:id` | get item with ID    |
| `DELETE` | `/routes/items/:id` | delete item with ID |
| `UPDATE` | `/routes/items/:id` | update item with ID |
