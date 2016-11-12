/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the iOS version start file
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import Permissions from 'react-native-permissions';

import graph from 'graph';
import db from 'db';
import BackgroundVideo from './components/backgroundVideo';

const _XHR = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

XMLHttpRequest = _XHR;


export default class Malparidos extends Component {

    _requestPermission() {
        Permissions.requestPermission('photo')
            .then(response => {
                //returns once the user has chosen to 'allow' or to 'not allow' access
                //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                this.setState({ photoPermission: response })
            });
    }

    _alertForPhotosPermission() {
        Alert.alert(
            'Can we access your geolocation?',
            'We need this access to make the game awesome!',
            [
                {text: 'Nope', onPress: () => console.log('permission denied'), style: 'cancel'},
                this.state.geolocationPermission == 'undetermined'?
                {text: 'OK', onPress: this._requestPermission.bind(this)}
                    : {text: 'Settings', onPress: Permissions.openSettings}
            ]
        )
    }

    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown'
    };

    wtachID: ?number = null;

    componentDidMount() {
        this._alertForPhotosPermission();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(JSON.stringify(error)),
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

AppRegistry.registerComponent('Malparidos', () => Malparidos);
