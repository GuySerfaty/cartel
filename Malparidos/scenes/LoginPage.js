/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the login page using Facebook SDK
 * Should lead to Profile page normally
 * or Permissions Page if permissions are not satisfied
 *
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { Alert, AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import Permissions from 'react-native-permissions';

import graph from 'graph';
import db from 'db';
import BackgroundVideo from 'background-video';


export default class LoginPage extends Component {


    state = {
        initialPosition: 'unknown'
    };

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => {
                console.log(error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        return (

            <View style={styles.container}>

                <BackgroundVideo />

                <Text style={styles.welcome}>
                    Welcome to Malparrrrridos!
                </Text>

                <View>

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

                                            graph.getUserInfo(accessToken, graph.graphResponseToDB).then(
                                                (success, error) => {

                                                    if (error) {
                                                        console.log('error in graph.getUserInfo :: ', error);
                                                    }

                                                    else {
                                                        console.log('Login was successful.', success);
                                                    }
                                                }
                                            );
                                        }
                                    )
                                }
                            }
                            }
                        onLogoutFinished={() => console.log("logout.")}/>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

AppRegistry.registerComponent('LoginPage', () => LoginPage);
