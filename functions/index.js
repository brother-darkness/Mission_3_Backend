
console.log('connected')
const functions = require("firebase-functions"); //firebase function
const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors({ origin: true }));
app.use(express.json())


app.get('/',(req,res) => {
    const message ='Hitting the endpoint'

    res.send(message)
    console.log(message)
})

app.post('app/:query',(req,res) => {
    const query = req.params.query

    console.log(`Your question is "${query}"`)

})


app.post('/searchbar/', (req, res) => {
    let queryQuestion =req.body.searchbar

    console.log(queryQuestion);
    

    const DiscoveryV2 = require('ibm-watson/discovery/v2');
    const { IamAuthenticator } = require('ibm-watson/auth');
    
    const discovery = new DiscoveryV2({
      version: '2020-08-30',
      authenticator: new IamAuthenticator({
        apikey: 'GzeKliJ6_zLKwTkdfnO3VZ412daxyF6rT3Hs1veOitng',
      }),
      serviceUrl: 'https://api.au-syd.discovery.watson.cloud.ibm.com/instances/3e3b4eec-44e6-4267-ac7e-e4649464bfde'

    });
    
    const params = {
      projectId: '392ced84-5c05-4957-bc41-b1218421f536',
      query: `text:${queryQuestion}`,
    };
    
    discovery.query(params)
      .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
        res.send(JSON.stringify(response.result, null, 2));
      })
      .catch(err => {
        console.log('error:', err);
      });
    });


/*  Google function establishes the listener.  
app.listen(4321, () => {
  console.log("listening at port 4321");
});
*/
exports.search = functions.https.onRequest(app); //Google functions export url redirect