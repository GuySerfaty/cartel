/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the reducers index, using Redux combineReducers function
 * This will provide all app reducers with one import
 *
 * @providesModule MPReducers
 * @flow
 */

'use strict';

// Libraries
import { combineReducers } from 'redux';

// Reducers
import user from './user';

const MPReducers = combineReducers({
    user: user
});

export default MPReducers;