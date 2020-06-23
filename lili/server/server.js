const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { response } = require('express');

//Para poder consultar ruta de cliente
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
const assistantId = "4fe3s6r9-46f3-9896-b766-23542c78b1ff";
const assistant = new AssistantV2({
  version: '2020-02-05',
  authenticator: new IamAuthenticator({
    apikey: 'GVVE96sdd6rSMjgH0MvylR1sldogut3KjFrfEKsUY87r',
  }),
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/985632df2-159e-4520-bb51-ad1d569a9987',
  disableSslVerification: true,
});



app.get('/', function (req, res) {
  res.send('LILI UP')
})
 
app.listen(3000,() => {
    console.log("Escuchando en el puerto:",3000);
});

app.get('/consultas', function (req, res) {
    res.send('get consultas')
  })

app.post('/consultas', function (req, res) {
  let body = req.body;
  res.json({body})    
})

 ///////////Crear sesión
app.post('/abrirsesion', function (req, res) {
  const params = {
    assistantId
  }
  assistant.createSession(params, (err, response) =>{
    if(err){
      console.log(err);
      return res.status(400).json({
        ok:false,
        err
      });
    }else{
      res.json({
        ok:true,
        response
      });      
    }
  }
  );    
});


///////////Cerrar sesión
app.post('/cerrarsesion', function (req, res) {
  const {sessionId} = req.body;
  const params = {
    assistantId,
    sessionId
  };
  
  assistant.deleteSession(params, (err, response) =>{
    if(err){
      console.log(err);
      return res.status(400).json({
        ok:false,
        err
      });
    }else{
      res.json({
        ok:true,
        response
      });      
    }
  }
  );    
});

//Conversacion
app.post('/conversa', function (req, res) {
  let {text, sessionId} = req.body;
  const params = {
    assistantId,
    sessionId,    
    input: {
      message_type: 'text',
      text: text
    }    
  };

  assistant.message(params, (err, response) =>{
      if(err){
        console.log(err);
        return res.status(400).json({
          ok:false,
          err
        });
      }else{
        res.json({
          ok:true,
          response
        });      
      }
    }
  );
})

module.exports = app;