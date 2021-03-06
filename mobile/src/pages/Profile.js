import React from 'react'
import {View} from 'react-native'
import {WebView} from 'react-native-webview'
function Profile({navigation}) {
    return <WebView style={{flex:1}} source={{uri:`https://github.com/${navigation.getParam('github_username')}`}}/>
}

export default Profile