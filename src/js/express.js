const express = require('express');
const app = express();
const port = 3000;

const ApiHelper = require('./apiHelper')

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile('./dist/index.html', { root: __dirname });
});


app.get('/api/v1/:apiEndpointName', async (req, res) => {

    let apiEndpointName = req.params.apiEndpointName

    let apiReponse = await ApiHelper.getResponseForApiRequest( apiEndpointName )


    res.send( apiReponse )
});

app.listen(port, () => console.log(`listening on port ${port}!`));
