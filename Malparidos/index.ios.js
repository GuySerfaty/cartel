/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the iOS version start file
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import graph from './services/graph';
import db from './services/db';

export default class Malparidos extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to Malparrrrridos!
                </Text>

                <View>
                    <LoginButton
                        publishPermissions={["publish_actions"]}
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
                                            graph.getUserInfo(accessToken);
                                            //db.createUser({fb_token: '123'}).then((response) => console.log('response is: ', response));
                                            //alert(data.accessToken.toString())
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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});

AppRegistry.registerComponent('Malparidos', () => Malparidos);
