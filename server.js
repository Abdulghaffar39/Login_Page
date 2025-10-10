const express = require('express');
const router = require('./Router/route')
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api', router);



app.listen(PORT, () => {

    console.log(`Server is running on ${PORT}`);
})
