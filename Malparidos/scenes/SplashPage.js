/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the very default Splash Screen page
 * Should appear on each app opening and disappear when data is loaded
 * and the app is ready to perform
 *
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class SplashPage extends Component {

    componentWillMount() {
        let navigator = this.props.navigator;
        console.log('Splash page props:', this.props);
        setTimeout( () => {
            navigator.replace({
                id: 'LoginPage'
            })
        }, 1000)
    }

    render() {
        return (

            <View style={styles.container}>

                <ActivityIndicator
                    size = {0}
                />

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
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    }
});

AppRegistry.registerComponent('SplashPage', () => SplashPage);
