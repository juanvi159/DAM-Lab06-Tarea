import React, {Component, Fragment} from 'react';
import ConexionFetch from './ConexionFetch';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Videos from './Videos';
import Settings from './Herramientas';
import Herramientas from './Herramientas';
import TransferenceFirst from './transferences/TransferenceFirst';
import TransferenceSecond from './transferences/TransferenceSecond';
import TransferenceThird from './transferences/TransferenceThird';
import { createStackNavigator } from '@react-navigation/stack';



function TransferenceStackScreen() {
    const TransferenceStack = createStackNavigator();
    return(
        <TransferenceStack.Navigator>
            <TransferenceStack.Screen name="First" component={TransferenceFirst} />
            <TransferenceStack.Screen name="Second" component={TransferenceSecond} />
            <TransferenceStack.Screen name="Third" component={TransferenceThird} />
        </TransferenceStack.Navigator>
    )
}

export default class Tab extends Component {



    render() {
        
        const Tabs = createBottomTabNavigator();
        return(
            <Fragment>
                <Tabs.Navigator 
                    initialRouteName="ConexionFetch"
                    tabBarOptions={{
                    activeTintColor: 'white',
                    style:{
                        backgroundColor:'#e91e63'
                    }
                    }}>
                <Tabs.Screen 
                    name="Movies" 
                    component={ConexionFetch}
                    options={{
                        tabBarLabel: 'Movies',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                    }}
                />
                <Tabs.Screen 
                    name="Transference"
                    component={TransferenceStackScreen} 
                    options={{
                        tabBarLabel: 'Transference',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name="Herramientas"
                    component={Herramientas} 
                    options={{
                        tabBarLabel: 'Herramientas',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        )
                    }}
                />
            </Tabs.Navigator>
            </Fragment>)
    }
}
              /*<Tabs.Screen 
                    name="Videos"
                    component={Videos} 
                    options={{
                        tabBarLabel: 'Video',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        )
                    }}
                />*/