require('react');

require('./770');

var module365 = require('./365'),
  module517 = require('./517'),
  module595 = require('./595'),
  module621 = require('./621'),
  module661 = require('./661'),
  b = module517.createMaterialTopTabNavigator(
    {
      Female: {
        screen: module661.default,
      },
      Male: {
        screen: module621.default,
      },
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#1565c0',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2,
        },
      },
    }
  ),
  s = module595.createStackNavigator(
    {
      TabScreen: {
        screen: b,
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#1565c0',
            fontFamily: 'Roboto',
            textAlign: 'center',
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Roboto',
            textAlign: 'center',
            alignSelf: 'center',
          },
          headerTintColor: '#FFFFFF',
          title: 'Choose your gender',
        },
      },
    },
    {
      headerLayoutPreset: 'center',
    }
  ),
  u = module365.createAppContainer(s);

exports.default = u;
