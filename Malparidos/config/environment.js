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

const env = {
    'login' : {
        url: baseUrl + '/users/login',
        method: 'POST'
    },
    'getActiveDeals': {
        url: baseUrl + '/deals',
        method: 'GET'
    },
    'createDeal' : {
        url: baseUrl + '/deals/create',
        method: 'POST'
    },
    'getUserDeal' : {
        url: baseUrl + '/deals/seller',
        method: 'GET'
    }
};

export default env;
