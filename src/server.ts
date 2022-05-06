import express from 'express';
import { routes } from './routes';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server is running in: http://localhost:${port}`)
})