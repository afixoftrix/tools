import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Da FOOQ is goiNG in ON');
});

app.listen(4000, ()=>{
    console.log('We are now connected to the port 4000!');
})
