import React from 'react';
import { View, Text, Button } from 'react-native';
import Image from 'react-native-remote-svg';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import AppLayout, { backgroundImages } from './AppLayout';
import AppLoading from 'src/core/components/AppLoading';

class OnboardingScreen extends React.Component {

    render() {
        return(
            <View>
                <Text>Onboarding screen</Text>
                <Button title="Signup" onPress={e => this.props.navigation.navigate('CreateAccount')} />
            </View>
        );
    }
}

const CreateAccountScreen = (props) => (
    <View>
        <Text>Create account -screen</Text>
        <Button title="Create account" onPress={e => props.navigation.navigate('App')} />
    </View>
);

const LearningCenter = () => (
    <View><Text>Learning center -screen</Text></View>
)

const MyFamily = () => (
    <View><Text>My family -screen</Text></View>
)

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>This is home -screen</Text>
            </View>
        );
    }
}

const Chat = () => (
    <View><Text>Chat -screen</Text></View>
)

const Tools = () => (
    <View><Text>Tools -screen</Text></View>
)

const headerStyles = {
    header: { backgroundColor: '#E7C9D5', borderColor: '#979797' },
    title:  { fontFamily: 'Roboto-Light', fontWeight: 'normal' },
}

const navigationOptions = {
    headerTitle: 'MyHealth@Hand',
    mode: 'modal',
    headerStyle: headerStyles.header,
    headerTitleStyle: headerStyles.title,
    headerLeft: (<View></View>), 
    headerRight: (<View></View>)
};

const wrapInLayout = (stack, backgroundUrl) => {
    Object.keys(stack).map(key => {
        const data = stack[key];
        const background = data.backgroundImage || backgroundUrl;
        const Component = data.screen ? data.screen : data;
        stack[key] = ({ navigation }) => <AppLayout navigation={navigation} backgroundUrl={background}><Component /></AppLayout> 
    });
    return stack;
}

const loggedInUserScreens = {
    LearningCenter: LearningCenter,
    MyFamily: MyFamily,
    Home: { screen: Home, backgroundImage: backgroundImages.basic} ,
    Chat: Chat,
    Tools: Tools,
}

const signinScreens = {
    Onboarding: OnboardingScreen,
    CreateAccount: CreateAccountScreen,
}

const AppNavigation = createBottomTabNavigator(
    wrapInLayout(loggedInUserScreens, backgroundImages.big),
{
    tabBarOptions: {
        activeBackgroundColor: '#979797',
    },
    navigationOptions: ({ navigation }) => {
        const { routeName, router } = navigation.state;
        return {
            title: '',
            tabBarIcon: ({ focused, tintColor }) => {
                switch(routeName) {
                    case 'LearningCenter':
                        return <Image source={require('./../../assets/images/icon-learning_center.svg')} style={{width: 30, height: 30}}/>;
                    case 'Home':
                        return <Image source={require('./../../assets/images/icon-timeline.svg')} style={{width: 30, height: 30 }}/>;
                    case 'MyFamily':
                        return <Image source={require('./../../assets/images/icon-health_profile.svg')} style={{width: 30, height: 30}}/>;
                    case 'Chat':
                        return <Image source={require('./../../assets/images/icon-chat.svg')} style={{width: 30, height: 30}}/>;
                    case 'Tools':
                        return <Image source={require('./../../assets/images/icon-settings.svg')} style={{width: 30, height: 30}}/>;
                    default: 
                        return null;
                }
            }
        }
    }
});

const SignInStack = createStackNavigator(wrapInLayout(signinScreens), {
    navigationOptions: () => navigationOptions,
});

const AppStack = createStackNavigator({
    Home: AppNavigation,
}, {
    navigationOptions: () => navigationOptions,
    initialRouteName: 'Home',
});

const SwitchNavigator = createSwitchNavigator({
    AppLoading: AppLoading,
    Auth: SignInStack,
    App: AppStack,
});

export default SwitchNavigator;