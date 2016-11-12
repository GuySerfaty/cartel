/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the Facebook Graph API service, wrapping GraphRequest from React Native SDK:
 *
 * @providesModule graph
 * @flow
 */

'use strict';

import FBSDK, {  AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import API from 'environment';
import db from 'db';

const _responseInfoCallback = (error, result) => {
    if (error) {
        console.log('Error fetching data: ' , error);
    } else {
        console.log('Success fetching data: ' , result);
    }
};

const profileRequestParams = {
    fields: {
        string: 'id, email, first_name, last_name, gender, birthday'
    }
};

const profileRequestConfig = (accessToken, params) => {
    let config = {
        httpMethod: 'GET',
        version: 'v2.5',
        parameters: params,
        accessToken: accessToken.toString()
    };
    return config;
};

let userAccessToken;

const graph = {
    'getUserInfo': (accessToken, callback) => {
        console.log('Requesting new data from Graph API', profileRequestConfig(accessToken, profileRequestParams));
        userAccessToken = accessToken;
        let infoRequest = new GraphRequest(
            '/me',
            profileRequestConfig(accessToken, profileRequestParams),
            callback || _responseInfoCallback
        );
        new GraphRequestManager().addRequest(infoRequest).start();
    },
    'graphResponseToDB' : (error, result) => {
        if (error) {
            console.log('Error fetching data: ' , error);
        } else {
            //console.log('USER ACCESS TOKEN:', userAccessToken, result);
            db.createUser(result, userAccessToken);
        }
    }
};

export default graph;