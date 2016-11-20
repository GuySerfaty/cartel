/**
 * Malparidos Project
 * The first geo-based drug dealing app
 *
 * This is the login page background video component
 *
 * @providesModule MPBackgroundVideo
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default class VideoIOS extends Component {
    render () {
        return (
            <Video
                resizeMode='cover'
                source={{uri: 'cartel-background-video'}}
                style={styles.backgroundVideo}
                repeat={true}
                muted={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});