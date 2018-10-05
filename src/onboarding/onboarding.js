import React from 'react';
import Image from 'react-native-remote-svg';
import { View, Text } from 'react-native';
import { PrimaryButton ,SecondaryButton } from 'src/core/components/form/Button';
import {Home} from '../core/Navigation';

class OnboardingScreen extends React.Component {
    texts = ['Communicate with you healthcare professionals', 'Collect your health data', 'Track your pregnancy', 'Get reliable information on pregnancy, motherhood and sexual health'];
    imagePaths = [];
    counter = ['1/4','2/4','3/4','4/4'];

    constructor() {
        super();
        this.state = {
            myText: 'Hi! I\'m Lucy, your personal health assistant. I\'m here to help you with the app.',
            heading:'HAVE A SAFER PREGNANCY',
            pageCounter:''
        }
    }

    updateText = () => {
        this.setState({
            myText: this.texts[0],
            heading: 'WITH THIS APP YOU CAN',
            pageCounter: this.counter[0]
        });
        this.texts.shift();
        this.counter.shift();

    };

    render()
        {
        return(
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{fontFamily: 'PatrickHandSC-Regular',justifyContent: 'center', alignItems: 'center', fontSize: 24}}>{this.state.heading}</Text>
                <Text>{this.state.pageCounter}</Text>
                <View style={TalkBubblestyle.talkBubble}>
                    <View style={TalkBubblestyle.talkBubbleSquare}>
                    <Text style={{marginLeft:10}}>{this.state.myText}</Text>
                    </View>
                    <View style={TalkBubblestyle.talkBubbleTriangle} />
                </View>
                <Image source={require('./../../assets/images/lucy-happy.svg')} style = {{width: 120, height: 120, paddingBottom:10}}/>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 25}}>
                    <SecondaryButton title="Skip"  />
                    <PrimaryButton title="Next" onPress={this.updateText} />
                </View>
            </View>
        );
    }
}
const TalkBubblestyle = {

    talkBubble: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    talkBubbleSquare: {
        width: 190,
        height: 115,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    talkBubbleTriangle: {
        position: 'relative',
        width: 10,
        height: 10,
        borderTopColor: 'transparent',
        borderTopWidth: 13,
        borderRightWidth: 26,
        borderRightColor: 'white',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent',
        transform: [{ rotate: '270deg'}],
        marginBottom: 40,
    }
};

export default OnboardingScreen;