import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import Image from 'react-native-remote-svg';
import PropTypes from 'prop-types';

export const backgroundImages = {
    basic: require('./../../assets/images/backgrounds/background-basic.svg'),
    big: require('./../../assets/images/backgrounds/background-big.svg'),
}

export default AppLayout = ({ children, navigation, backgroundUrl = backgroundImages.basic }) => {
    const rootChild = React.Children.only(children);
    const cloned = React.cloneElement(rootChild, { navigation } );
    return (
        <View style={{ flex: 1 }}>
            <Image source={ backgroundUrl } style={[StyleSheet.absoluteFill, LayoutStyles.background ]} ></Image>
            <View style={ LayoutStyles.container }>
                { cloned }
            </View>
        </View>
    );
};

AppLayout.propTypes = {
    navigation: PropTypes.object.isRequired,
    backgroundUrl: PropTypes.number,
}

const LayoutStyles = { 
    background: {
        width: '100%', 
        height: '100%',
    },
    container: {
        marginTop: 30, 
        marginBottom: 30, 
        marginLeft: 20, 
        marginRight: 20, 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
}