/* eslint-disable linebreak-style */
console.log("connected");
//const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/searchbar", (req, res) => {
  const queryQuestion = req.body.searchbar;
  console.log(queryQuestion);
  res.send("text");

  const queryParams = "text:" + queryQuestion+'"'
  const params = {
    projectId: "392ced84-5c05-4957-bc41-b1218421f536",
    query: { queryParams }
  };
  
  const DiscoveryV2 = require("ibm-watson/discovery/v2");
  const {IamAuthenticator} = require("ibm-watson/auth");
  const discovery = new DiscoveryV2({
    version: "2020-08-30",
    authenticator: new IamAuthenticator({
      apikey: "0j3eG22iIMlRCXpT2tGpG3q2ztySie3oGw_0-Xu5830D",
    }),
    serviceUrl:
      "https://api.au-syd.discovery.watson.cloud.ibm.com/instances/3e3b4eec-44e6-4267-ac7e-e4649464bfde",
    disableSslVerification: true,
  });
  
  
  console.log('query point hit')
  discovery.query(params)
   .then(queryResponse => {
     console.log(JSON.stringify(queryResponse, null, 2));
     res.send(JSON.stringify(queryResponse, null, 2));
   })
   .catch(err => {
     console.log('error:', err);
   });
});


app.listen(4321, () => {
  console.log("listening at port 4321");
});
//exports.app = functions.https.onRequest(app);
