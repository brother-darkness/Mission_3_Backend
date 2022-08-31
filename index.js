console.log('connected')

const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())

const DiscoveryV2 = require('ibm-watson/discovery/v2')
const { IamAuthenticator } = require('ibm-watson/auth')

const discovery = new DiscoveryV2 ({
    version:'2020-08-30',
    authenticator: new IamAuthenticator({
        apikey: '0j3eG22iIMlRCXpT2tGpG3q2ztySie3oGw_0-Xu5830D',
      }),
      serviceUrl: 'https://api.au-syd.discovery.watson.cloud.ibm.com/instances/3e3b4eec-44e6-4267-ac7e-e4649464bfde',

    });

    
    
    
