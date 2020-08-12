require('dotenv').config();

const fetch = require('node-fetch');

const CLIENT_ID = process.env.CLIENT_ID || '';
const CLIENT_SECRET = process.env.CLIENT_SECRET || '';
const URL_TOKEN = process.env.URI + process.env.TOKEN_PATH;

let urlUserProfile = process.env.URI + process.env.USER_PROFILE_PATH;

let token = 'Bearer ';

/* const body = {
    grant_type: 'client_credentials',
    scope: 'scope1',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
} */
const body = new URLSearchParams();
body.append('grant_type', 'client_credentials');
body.append('scope', 'scope1');
body.append('client_id', CLIENT_ID);
body.append('client_secret', CLIENT_SECRET);

let callOptionsT = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body,
    mode: 'cors',
    cache: 'default'
};


const getToken = async (req, res) => {
    try {
        //console.log(req);
        fetch(URL_TOKEN, callOptionsT)
                .then((res) => {
                    console.log('urlToken: ' + URL_TOKEN);
                    console.log('callOptionsToken: ' + callOptionsT);
                    console.log('paramsToken: ' + req.params.access_token);
                    console.log(res);
                    return res.json();
                })
                .then((data) => {
                    token += data.access_token;
                    res.send(data);
                })
                .catch ((err) => {
                    return res.status(500).send(err.message);
                })
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

const getUserProfile = async (req, res) => {
    try {
        fetch(URL_TOKEN, callOptionsT)
        .then((res) => {
            console.log('urlToken: ' + URL_TOKEN);
            console.log('callOptionsToken: ' + callOptionsT);
            console.log('paramsToken: ' + req.params.access_token);
            //console.log(res);
            return res.json();
        })
        .then((data) => {
            //token += data.access_token;
            //res.send(data);
            console.log('token: ' + data.access_token);
            let callOptionsUP = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token + data.access_token,
                    'x-ibm-client-id': CLIENT_ID,
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default'
            };
            //urlUserProfile = urlUserProfile + req.params.userId;
            fetch(urlUserProfile + req.params.userId, callOptionsUP)
                .then((res) => {
                    console.log('urlUP: ' + urlUserProfile);
                    console.log('callOptions: ' + callOptionsUP);
                    console.log('params: ' + req.params.userId);
                    //console.log(res);
                    return res.json();
                })
                .then((data) => {
                    res.send(data);
                })
                .catch ((err) => {
                    return res.status(500).send(err.message);
                })
        })
        .catch ((err) => {
            return res.status(500).send(err.message);
        })

        
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {getUserProfile, getToken};
