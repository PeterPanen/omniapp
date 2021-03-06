import path from 'path';
import express from 'express';
import routes from './routes';

// Instantiate application.
const app = express();
const PORT = 3000;

// Mount middleware.
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes.
app.use(routes);

// Start listening for connections.
app.listen(PORT);
