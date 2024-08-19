import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/ServerApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3005;

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const parts = html.split('not rendered');

const app = express();
app.use('/assets', express.static(path.resolve(__dirname, "./dist/client/assets"))
);

app.use((req, res) => {
    res.write(parts[0]);

    const stream = renderApp(req.url, {
        onShellReady() {
            // if it is the crawler, do nothing here
            // otherwise Google SEO scores will be bad
            // because the crawler doesn't get anything at once
            // and will think it's slow
            stream.pipe(res);
        },
        onShellError() {
            // error handling here
        },
        onAllReady() {
            // if it is the crawler, do everything here
            res.write(parts[1]);
            res.end();
        },
        onError(err) {
            console.error(err)
        }
    });
});

console.log(`Listening on http://localhost:${PORT}`);
app.listen(PORT);