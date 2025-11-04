const express = require('express');
const path = require('path');
const cors = require('cors');


const router = require('./Router/route')
const blogRouter = require('./Router/blogRouter')

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api', router);
app.use('/api', blogRouter);



app.listen(PORT, () => {

    console.log(`Server is running on ${PORT}`);
})
