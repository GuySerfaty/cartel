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

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import FBSDK, { AccessToken } from 'react-native-fbsdk';
import env from 'environment';

let newAccessToken;
AccessToken.getCurrentAccessToken().then((accessToken)  => {newAccessToken = accessToken;});

const APIServerCall = (url, method, headers, body) => {
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