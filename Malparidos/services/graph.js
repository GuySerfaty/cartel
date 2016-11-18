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

// Libraries
import FBSDK, {  AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


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

const graph = {

};

export default graph;
