require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const app = require('./app');
const port = process.env.LISTEN
app.listen(port, () => console.log(`Server started on port ${port} with mode: ${process.env.NODE_ENV} FRONTEND_URL :${process.env.FRONTEND_URL}!`))