import express from "express";
import itemRoutes from "./routes/itemRoutes";
import { exception } from "./middleware/exception";
import { env } from "./config/env";
import cors from "cors";

// require dotenv
require(`dotenv`).config();

const app = express();

// JSON
app.use(express.json());

// CORS
app.use(
	cors({
		// exposedHeaders: 'auth_token'
		origin: `*`,
	})
);

// Routes
app.use(`/routes/items`, itemRoutes);

// Middleware
//app.use(authMiddleware);

app.use(exception);

app.listen(env.port, () =>
	console.log(`> Server is running\n> Listening on ${env.url}:${env.port}`)
);
