const express = require('express');
const bodyParser = require('body-parser');
const jokes = require('./modules/jokes');

const PORT_NUMBER = 8080;

let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../frontend'))

app.get('/api', function(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.send('Documentation de l\'API à venir...');
  })

app.get('/api/v1/jokes/:limit?', function(request, response) {

    console.log('Best jokes', request.params);

    response.json(jokes.getBestJokes());
  })

app.get('/api/v1/jokes/:userEmail/:limit?', function(request, response) {

    console.log('My jokes', request.params);

    if(request.params.userEmail !== undefined) {

      response.json(jokes.getJokesFor(request.params.userEmail, request.params.limit));
    }

    response.status(400).end(); // Bad request
  })

app.post('/api/v1/jokes', function(request, response) {

    console.log('Like joke', request.body);

    if(request.body.userEmail !== undefined && request.body.jokeId !== undefined) {

      let result = jokes.saveJokeFor(request.body.jokeId, request.body.userEmail);

      if(result) {
        response.status(201).end(); // 201: Created
      }
    }

    response.status(400).end(); // 400: Bad request
  })

app.delete('/api/v1/jokes', function(request, response) {

    console.log('Dislike', request.body);

    if(request.body.userEmail !== undefined && request.body.jokeId !== undefined) {

      let result = jokes.deleteJokeFor(request.body.jokeId, request.body.userEmail);

      if(result) {
        response.status(202).end(); // 202: Accepted
      }
    }

    response.status(400).end(); // 400: Bad request
  });

app.get('/api/v1/likes/:userEmail/:jokeId', function(request, response) {

    console.log('Get like', request.params);

    if(request.params.userEmail !== undefined && request.params.jokeId !== undefined) {

      let result = jokes.getJokeFor(request.params.jokeId, request.params.userEmail);

      response.status(200).send(result); // 200: Ok
    }

    response.status(400).end(); // 400: Bad request
  })
  
app.listen(PORT_NUMBER);
console.log('Server started on port: ' + PORT_NUMBER);
