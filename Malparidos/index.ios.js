/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the iOS version start file
 *
 * @flow
 */

'use strict';

// Libraries
import React, { Component } from 'react';
import { Alert, AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native';

// Scenes
import LoginPage from './scenes/LoginPage';
import SplashPage from './scenes/SplashPage';

// Debug XHR patch
const _XHR = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

XMLHttpRequest = _XHR;

export default class Malparidos extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{id: 'SplashPage', name: 'Index'}}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}   />
        );
    }

    renderScene(route, navigator) {
        let routeId = route.id;

        if (routeId === 'SplashPage') {
            return (
                <SplashPage
                    navigator={navigator} />
            );
        }
        if (routeId === 'LoginPage') {
            return (
                <LoginPage
                    navigator={navigator} />
            );
        }

        return this.noRoute(navigator);

    }

    noRoute(navigator) {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => navigator.pop()}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>NO ROUTE!</Text>
                </TouchableOpacity>
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
    }
});

AppRegistry.registerComponent('Malparidos', () => Malparidos);
