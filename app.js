const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require("mongoose")

const graphQLSchema = require('./graphql/schema/index')
const graphQLResolver = require('./graphql/resolver/index')
const isAuth = require('./middleware/is-auth')

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Method','POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }

    next()
});

app.use(isAuth);

app.use('/graphql',graphqlHttp({
    schema:graphQLSchema,
    rootValue:graphQLResolver,
    graphiql:true
}))

const mongodb_string = process.env.NODE_ENV === 'development' ? `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}` : 
                        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ujgvf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose
    .connect(mongodb_string,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        }
    )
    .then(()=>{
        app.listen(9900,()=>console.log("App running on port 9900"))
    })
    .catch(err => {
        console.log(err)
    });
 