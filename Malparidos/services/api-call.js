/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the DB wrapper service containing:
 * API calls
 *
 * @providesModule api-call
 * @flow
 */

'use strict';

// Libraries
import React, { Component } from 'react';
import { AppRegistry, AsyncStorage} from 'react-native';
import FBSDK, { AccessToken } from 'react-native-fbsdk';

// Services
import env from 'environment';

const attachTokenToHeaders = async (headers) => {

    try {
        let sessionToken = await AsyncStorage.getItem('@MalparidosStore:sessionToken');
        if (sessionToken !== null){
            // We have data!
            console.log(sessionToken);
            headers.sessionToken = sessionToken;
        }
    } catch (error) {
        // Error retrieving data
        console.log('error retrieving data: ', error);
    }

};

const APIServerCall = (url, method, headers, body) => {

    let _saveTokenToLocalDB = async (token) => {
        try {
        await AsyncStorage.setItem('@MalparidosStore:sessionToken', token);
        } catch (error) {
            console.log('error saving new token to local database', error);
        }
    }

    attachTokenToHeaders(headers);
    console.log('headers changed: ', headers);

    return fetch(
        url,
        {
            method: method,
            headers: headers,
            body: body
        }).then(
        (response, error) => {
            if (error) {
                console.log(error);
                let errorMessage = "Could not retrieve data from server";
                return errorMessage;
            }
            else {

                response.json().then(
                    (responseContent, failure) => {
                        console.log('got response:', responseContent);
                        if (responseContent.sessionTokenUpdate) {
                            _saveTokenToLocalDB(responseContent.sessionTokenUpdate);
                        }
                    });

                console.log(response);
                return response;

            }
        }
    );


};

const api = {
    'login' : (params, accessToken) => {
        console.log('creating user start', params, accessToken);
        let url = env.login.url;
        let method = env.login.method;
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let body = JSON.stringify({
            fb_token: accessToken,
            latitude : params.latitude,
            longitude : params.longitude
        });
        return APIServerCall(url, method, headers, body);
    }
};

export default api;