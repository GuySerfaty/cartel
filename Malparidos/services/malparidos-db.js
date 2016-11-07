/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the iOS version start file
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

const db = {
  post : (params) => {
      console.log('POSTED!');
      return 'POSTED!';
  }
};

export default db;