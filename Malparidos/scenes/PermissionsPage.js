/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the permissions fallback page to gain access to the following permissions:
 * Location permission
 *
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { Alert, AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';
import Permissions from 'react-native-permissions';


export default class PermissionsPage extends Component {

    //_requestGelocationPermission() {
    //    Permissions.requestPermission('geolocation')
    //        .then(response => {
    //            //returns once the user has chosen to 'allow' or to 'not allow' access
    //            //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
    //            this.setState({ geolocationPermission: response })
    //        });
    //}
    //
    //_alertForGeolocationPermission() {
    //    Alert.alert(
    //        'Can we access your geolocation?',
    //        'We need this access to make the game awesome!',
    //        [
    //            {text: 'Nope', onPress: () => console.log('permission denied'), style: 'cancel'},
    //            this.state.geolocationPermission == 'undetermined'?
    //            {text: 'OK', onPress: this._requestGelocationPermission.bind(this)}
    //                : {text: 'Settings', onPress: Permissions.openSettings}
    //        ]
    //    )
    //}
    //
    //watchID: ?number = null;
    //
    //componentDidMount() {
    //
    //    navigator.geolocation.getCurrentPosition(
    //        (position) => {
    //            var initialPosition = JSON.stringify(position);
    //            this.setState({initialPosition});
    //        },
    //        (error) => {
    //            console.log(error);
    //            this._alertForGeolocationPermission();
    //        },
    //        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    //    );
    //    this.watchID = navigator.geolocation.watchPosition((position) => {
    //        var lastPosition = JSON.stringify(position);
    //        this.setState({lastPosition});
    //    });
    //}
    //
    //componentWillUnmount() {
    //    navigator.geolocation.clearWatch(this.watchID);
    //}

    render() {
        return (
            <Navigator
                renderScene = {this.renderScene.bind(this)}
            />
        )
    }

    renderScene() {
        return (

            <View style={styles.container}>

                <Text style={styles.welcome}>
                    PERMISSONS
                </Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
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

AppRegistry.registerComponent('PermissionsPage', () => PermissionsPage);
