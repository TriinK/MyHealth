import React from 'react';
import { Button } from 'react-native-elements';

export const PrimaryButton = (props) => (
    <Button {...props} 
        buttonStyle={ButtonStyles.primary}
        containerViewStyle={ButtonStyles.container}
        fontFamily='PatrickHandSC-Regular'
        fontSize={30}
        raised={true}
        borderRadius={50}
        borderTopRightRadius={30}
        borderBottomLeftRadius={30}
        />
);

const ButtonStyles = {
    container: {
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        elevation: 4,
    },
    primary: {
        backgroundColor: '#F88968',
        borderColor: '#979797',
        padding: 4,
        borderWidth: 1,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
    }
}