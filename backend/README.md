# Simple React Todo List with Filtering

by **Petar Yankov**

A lightweight Express + TypeScript backend API with in-memory storage for items.

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
cd simami/backend
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
> backend@0.0.0 start
> ts-node server.ts

> Server is running
> Listening on http://localhost:8000
```

---

## API Documentation

### Postman Collection

[View Postman Documentation with working requests](https://www.postman.com/galactic-escape-205994/workspace/new-team-workspace/collection/31467064-4e272c54-bf75-419c-9344-18512f2ddd6e?action=share&creator=31467064&active-environment=31467064-0d78c08b-6f76-424e-b21c-ceba3d682099)

| Method | Endpoint        | Description |
| :----- | :-------------- | :---------- |
| `GET`  | `/routes/items` | get items   |
| `POST` | `/routes/items` | create item |
