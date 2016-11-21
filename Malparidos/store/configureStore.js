/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the Redux store configuration
 * We will create a persistant store using redux-persist
 * This will save our current app state to local storage

 *
 * @flow
 */

'use strict';

// Libraries
import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// Reducers
import reducers from 'MPReducers';

var createMPStore = applyMiddleware(...)(createStore);

const configureStore = (onComplete: ?() => void) => {
    const store = autoRehydrate()(createMPStore)(reducers);
    persistStore(store, {storage: AsyncStorage}, onComplete);
    return store;
}

export default configureStore;