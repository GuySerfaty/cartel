/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the DB wrapper service containing:
 * API calls
 *
 * @providesModule db
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import FBSDK, { AccessToken } from 'react-native-fbsdk';
import API from 'environment';

//let currentAccessToken = getAccessTokenFromCache();
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

const db = {
    'createUser' : (params, accessToken) => {
        console.log('creating user start', params, accessToken);
        let url = API.createUser.url;
        let method = API.createUser.method;
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let body = JSON.stringify({
            fb_id: params.id,
            fb_token: accessToken,
            first_name: params.first_name ,
            last_name: params.last_name,
            email: params.email,
            birthday : params.birthday,
            gender : params.gender,
            latitude : params.latitude,
            longitude : params.longitude
        });
        return APIServerCall(url, method, headers, body);
    }
};

export default db;