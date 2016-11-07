/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the DB wrapper service containing:
 * API calls
 *
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import API from 'environment';

const db = {
  'createUser' : (params) => {
      return fetch(API.createUserURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              fb_id: params.userID,
              fb_token: params.accessToken,
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