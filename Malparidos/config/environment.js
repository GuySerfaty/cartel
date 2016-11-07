/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the environment configuration file
 * @flow
 */

'use strict';

const environment = 'dev';

const environmentSettings = {
    dev : {
        'BASE_URL': 'http://localhost:8080'
    },
    staging : {
        'BASE_URL': 'http://api.cartelapp.com'
    },
    prod : {
        'BASE_URL': 'http://api.malparidos.com'
    }
};

const app = environmentSettings[environment];
