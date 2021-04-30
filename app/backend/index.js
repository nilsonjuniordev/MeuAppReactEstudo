const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
return response.json({
    evento: 'Vou vencer sempre', app: 'by nilson'
});
});

app.listen(3030);