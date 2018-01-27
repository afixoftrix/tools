import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res)=>{
    res.send('Da FOOQ is goiNG in ON');
});
app.get('/test.html', (req, res)=>{
    res.sendFile('test.html', { root: './paths/'});
});

app.listen(4000, ()=>{
    console.log('We are now connected to the port 4000!');
})
