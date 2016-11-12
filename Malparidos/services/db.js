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
import API from 'environment';

const db = {
  'createUser' : (params, accessToken) => {
      console.log('creating user', params, accessToken);
      return fetch(API.createUser.url, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              fb_id: params.id,
              fb_token: accessToken,
              first_name: params.first_name ,
              last_name: params.last_name,
              email: params.email,
              birthday : params.birthday,
              gender : params.gender
          })
      });
  }
};

export default db;