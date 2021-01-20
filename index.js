/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import {AppRegistry, View} from 'react-native';
import App from './App';
import React from 'react';

stack = {
    stack: {
        children: [
            {
                component: {
                    name: 'com.myApp.WelcomeScreen'
                }
            }
        ],
        options: {bottomTab: {text: 'Tab'}}
    }
}

const Test = () => {
    return (<View style={{height: 50, width: 50, backgroundColor: 'blue'}}/>);
};

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('Test', () => Test);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.myApp.WelcomeScreen'
                        }
                    }
                ],
                options: {bottomTab: {text: 'Tab'}}
            }
        }
   });
});
