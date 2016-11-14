/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the iOS version start file
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

    _requestGelocationPermission() {
        Permissions.requestPermission('geolocation')
            .then(response => {
                //returns once the user has chosen to 'allow' or to 'not allow' access
                //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                this.setState({ geolocationPermission: response })
            });
    }

    _alertForGeolocationPermission() {
        Alert.alert(
            'Can we access your geolocation?',
            'We need this access to make the game awesome!',
            [
                {text: 'Nope', onPress: () => console.log('permission denied'), style: 'cancel'},
                this.state.geolocationPermission == 'undetermined'?
                {text: 'OK', onPress: this._requestGelocationPermission.bind(this)}
                    : {text: 'Settings', onPress: Permissions.openSettings}
            ]
        )
    }

    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown'
    };

    watchID: ?number = null;

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => {
                console.log(error);
                this._alertForGeolocationPermission();
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
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
                                    alert("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    alert("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            console.log('login success:', data);
                                            let accessToken = data.accessToken.toString();
                                            graph.getUserInfo(accessToken, graph.graphResponseToDB).then(
                                                (success, error) => {
                                                    if (error) {
                                                        console.log('error :(', error);
                                                    }
                                                    else {
                                                        console.log('success creating new user');
                                                        try {
                                                        } catch (error) {
                                                            console.log('Error storing AccessToken', error);
                                                        }
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
