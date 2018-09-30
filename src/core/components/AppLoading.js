import React from 'react';
import { AsyncStorage, ActivityIndicator, View } from 'react-native';
import { Font, Asset } from 'expo';

export default class AppLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrap();
    }

    _loadFonts() {
        return Font.loadAsync({
            'Roboto-Light': require('../../../assets/fonts/Roboto/Roboto-Light.ttf'),
            'PatrickHandSC-Regular': require('../../../assets/fonts//PatrickHandSC-Regular.ttf')
        });
    }

    _loadImages() {
        return Asset.loadAsync([
            require('./../../../assets/images/icon-learning_center.svg'),
            require('./../../../assets/images/icon-timeline.svg'),
            require('./../../../assets/images/icon-health_profile.svg'),
            require('./../../../assets/images/icon-chat.svg'),
            require('./../../../assets/images/icon-settings.svg'),
            require('./../../../assets/images/backgrounds/background-basic.svg'),
            require('./../../../assets/images/backgrounds/background-big.svg')
        ]);
    }

    _loadToken() {
        return AsyncStorage.getItem('auth_token');
    }

    async _bootstrap() {
        const result = await Promise.all([this._loadImages(), this._loadFonts(), this._loadToken()]);
        const token = this.getToken(result); 
        const { navigation } = this.props;
        navigation.navigate(token != null ? 'App' : 'Auth');
    }

    getToken(result) {
        return result[2];
    }

    render() {
        return(
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}