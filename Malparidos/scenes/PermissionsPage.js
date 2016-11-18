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

// Libraries
import React, { Component } from 'react';
import { Alert, AppRegistry, AppState, Navigator, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Permissions from 'react-native-permissions';
import Button from 'apsl-react-native-button';

// Services
import colors from 'colors';


export default class PermissionsPage extends Component {

    state = {
        locationPermission: 'unknown'
    };

    _requestLocationPermission() {
        Permissions.requestPermission('location', 'always')
            .then((response, error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    //returns once the user has chosen to 'allow' or to 'not allow' access
                    //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                    this.setState({ locationPermission: response });
                    console.log('user current location status: ', response);
                }

            });
    }

    _alertForLocationPermission() {
        Alert.alert(
            'Can we access your location?',
            'We promise to use it wisely!',
            [
                {text: 'Nope', onPress: () => console.log('permission denied'), style: 'cancel'},
                this.state.locationPermission == 'undetermined'?
                {text: 'OK', onPress: this._requestLocationPermission.bind(this)}
                    : {text: 'Settings', onPress: Permissions.openSettings}
            ]
        )
    }

    componentDidMount() {
        Permissions.getPermissionStatus('location')
            .then(response => {
                this.setState({ locationPermission: response });
                console.log('state: ', this.state)
            });
    }

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

                <Image
                    source={require('../assets/ic_permissions.png')}
                />
                <Text style = {styles.title}>
                    Excuse us please
                </Text>

                <Text style = {styles.subtitle}>
                    Malparidos works awesome {"\n"}
                    with location permissions
                </Text>


                <Button
                    style = {styles.button}
                    textStyle = {styles.buttonText}
                    onPress = {() => this._alertForLocationPermission()}>
                    Grant permission
                </Button>


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
    title : {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        color: colors.black
    },
    subtitle : {
        fontSize: 18,
        fontWeight: 'normal',
        color: colors.lightGrey,
        textAlign: 'center',
        lineHeight: 28
    },
    button : {
        backgroundColor: colors.lightBlue,
        marginTop: 20,
        width: 250,
        borderRadius: 0,
        borderWidth: 0,
        alignSelf: 'center'
    },
    buttonText : {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'normal'
    }
});

AppRegistry.registerComponent('PermissionsPage', () => PermissionsPage);
