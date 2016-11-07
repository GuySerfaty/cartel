/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the environment configuration file
 *
 * @providesModule environment
 * @flow
 */

'use strict';

let envPlatform = 'dev';

let envSettings = {
    'dev' : {
        'BASE_URL': 'http://localhost:8080'
    },
    'staging' : {
        'BASE_URL': 'http://api.cartelapp.com'
    },
    'prod' : {
        'BASE_URL': 'https://api.malparidos.com'
    }
};

let baseUrl = envSettings[envPlatform].BASE_URL;

const API = {
    'createUserURL' : baseUrl + '/users/create',
    'getActiveDeals': baseUrl + '/deals',
    'createDealURL' : baseUrl + '/deals/create',
    'getUserDeal'   : baseUrl + '/deals/seller'
};

export default API;