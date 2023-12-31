import * as express from 'express';
import * as path from 'path';
import routes from './routes';
import { configurePassport } from './middlewares/passport-strategies.mw';

const app = express();

configurePassport(app);
app.use(express.static('public'));
app.use(express.json());

app.use(routes);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));






// import * as express from 'express';
// import apiRouter from './routes';

// const app = express();

// app.use(express.static('public'));
// app.use(apiRouter);

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server listening on port: ${port}`));
