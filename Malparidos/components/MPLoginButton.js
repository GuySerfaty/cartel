/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the login button implemented with Facebook SDK
 *
 * @providesModule MPLoginButton
 * @flow
 */

'use strict';

// Libraries
import React, { Component } from 'react';
import { Alert, StyleSheet} from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';

// Services
import api from 'api-call';

export default class MPLoginButton extends Component {
    render () {
        return (
            <LoginButton
                readPermissions={['email', 'public_profile', 'user_birthday']}
                onLoginFinished={
                    (error, result) => {
                        if (error) {

                            Alert.alert(
                                'Sorry!',
                                'Something went wrong, please try again later.',
                                [{text:'OK'}]
                            );
                            console.log("login has error: " + result.error);

                        } else if (result.isCancelled) {

                            Alert.alert(
                                'Facebook login was cancelled!',
                                'Please try logging in again.',
                                [{text:'OK'}]
                            );

                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {

                                    console.log('login success:', data);

                                    let accessToken = data.accessToken.toString();
                                    let loginParams = {
                                        longitude : this.state.initialPosition.longitude,
                                        latitude : this.state.initialPosition.latitude
                                    };

                                    api.login(loginParams, accessToken).then(
                                        (success, error) =>{
                                            if (error) {
                                                console.log(error);
                                            }
                                            else {
                                                console.log('moving to permissions', this.state.initialPosition)
                                                this.goToNext();
                                            }
                                        }
                                    );
                                }
                            )
                        }
                    }
                    }
                onLogoutFinished={() => console.log("logout.")}/>
        )
    }
}

AppRegistry.registerComponent('MPLoginButton', () => MPLoginButton);