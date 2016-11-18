/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the profile page, currently presents:
 * Profile picture and name
 * Amount of coca and money
 * Dialog to create new deal
 *
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class ProfilePage extends Component {

    render() {
        return (

            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Profile Page!
                </Text>

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

AppRegistry.registerComponent('ProfilePage', () => ProfilePage);
