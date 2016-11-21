/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the Redux action types configuration file
 * In here we will store every action that can find its way to the dispatcher
 *
 * @flow
 */

'use strict';


export type Action = {
    { type: 'LOGGED_IN', source: ?string; data: { id: string; name: string; } }
};

export type Dispatch = (action: Action ) => any;
export type GetState = () => Object;