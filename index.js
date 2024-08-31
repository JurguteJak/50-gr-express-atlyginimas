import express from 'express';

const app = express();
const port = 5036;

app.get('/', (req, res) => {
    return res.send('STRING');
})

app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});