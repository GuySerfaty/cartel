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
let graphPromise;
let graphPromiseHandler = {};

const graph = {
    'getUserInfo': (accessToken, callback) => {
        console.log('Requesting new data from Graph API', profileRequestConfig(accessToken, profileRequestParams));
        userAccessToken = accessToken;
        let infoRequest = new GraphRequest(
            '/me',
            profileRequestConfig(accessToken, profileRequestParams),
            callback || _responseInfoCallback
        );
        graphPromise =  new Promise ( (resolve, reject) => {
            graphPromiseHandler.resolve = resolve;
            graphPromiseHandler.reject = reject;
            new GraphRequestManager().addRequest(infoRequest).start();
        } );

        return graphPromise;

    },
    'graphResponseToDB' : (error, result) => {
        if (error) {
            console.log('Error fetching data: ' , error);
            graphPromiseHandler.reject(error);
        } else {
            db.createUser(result, userAccessToken).then( (data) => {
                console.log('passing graph response to db service', data);
                graphPromiseHandler.resolve(data);
            });
        }
    }
};

export default graph;
