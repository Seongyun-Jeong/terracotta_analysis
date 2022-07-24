module.exports = {
  get createAppContainer() {
    return require('./366').createAppContainer;
  },

  get createNavigationContainer() {
    console.warn(
      '`createNavigationContainer()` has been deprecated, please use `createAppContainer()` instead. You can also import createAppContainer directly from @react-navigation/native'
    );
    return require('./366').createAppContainer;
  },

  get createKeyboardAwareNavigator() {
    return require('./366').createKeyboardAwareNavigator;
  },

  get createNavigationAwareScrollable() {
    return require('./366').createNavigationAwareScrollable;
  },

  get ScrollView() {
    return require('./366').ScrollView;
  },

  get FlatList() {
    return require('./366').FlatList;
  },

  get SectionList() {
    return require('./366').SectionList;
  },

  get ResourceSavingSceneView() {
    return require('./366').ResourceSavingSceneView;
  },

  get SafeAreaView() {
    return require('./366').SafeAreaView;
  },

  get withOrientation() {
    return require('./366').withOrientation;
  },

  get createNavigator() {
    return require('./373').createNavigator;
  },

  get StateUtils() {
    return require('./373').StateUtils;
  },

  get getNavigation() {
    return require('./373').getNavigation;
  },

  get NavigationContext() {
    return require('./373').NavigationContext;
  },

  get NavigationProvider() {
    return require('./373').NavigationProvider;
  },

  get NavigationConsumer() {
    return require('./373').NavigationConsumer;
  },

  get NavigationActions() {
    return require('./373').NavigationActions;
  },

  get StackActions() {
    return require('./373').StackActions;
  },

  get StackRouter() {
    return require('./373').StackRouter;
  },

  get TabRouter() {
    return require('./373').TabRouter;
  },

  get SwitchRouter() {
    return require('./373').SwitchRouter;
  },

  get createConfigGetter() {
    return require('./373').StackAcreateConfigGetterctions;
  },

  get getScreenForRouteName() {
    return require('./373').getScreenForRouteName;
  },

  get validateRouteConfigMap() {
    return require('./373').validateRouteConfigMap;
  },

  get getActiveChildNavigationOptions() {
    return require('./373').getActiveChildNavigationOptions;
  },

  get pathUtils() {
    return require('./373').pathUtils;
  },

  get SceneView() {
    return require('./373').SceneView;
  },

  get SwitchView() {
    return require('./373').SwitchView;
  },

  get NavigationEvents() {
    return require('./373').NavigationEvents;
  },

  get withNavigation() {
    return require('./373').withNavigation;
  },

  get withNavigationFocus() {
    return require('./373').withNavigationFocus;
  },

  get createStackNavigator() {
    return require('./460').createStackNavigator;
  },

  get createSwitchNavigator() {
    return require('./373').createSwitchNavigator;
  },

  get createBottomTabNavigator() {
    return require('./486').createBottomTabNavigator;
  },

  get createMaterialTopTabNavigator() {
    return require('./486').createMaterialTopTabNavigator;
  },

  get createDrawerNavigator() {
    return require('./506').createDrawerNavigator;
  },

  get StackGestureContext() {
    return require('./460').StackGestureContext;
  },

  get DrawerGestureContext() {
    return require('./506').DrawerGestureContext;
  },

  get DrawerRouter() {
    return require('./506').DrawerRouter;
  },

  get DrawerActions() {
    return require('./506').DrawerActions;
  },

  get Transitioner() {
    console.warn('Importing the stack Transitioner directly from react-navigation is now deprecated. Instead, import { Transitioner } from "react-navigation-stack";');
    return require('./460').Transitioner;
  },

  get StackView() {
    return require('./460').StackView;
  },

  get StackViewCard() {
    return require('./460').StackViewCard;
  },

  get StackViewTransitionConfigs() {
    return require('./460').StackViewTransitionConfigs;
  },

  get Header() {
    return require('./460').Header;
  },

  get HeaderTitle() {
    return require('./460').HeaderTitle;
  },

  get HeaderBackButton() {
    return require('./460').HeaderBackButton;
  },

  get HeaderStyleInterpolator() {
    return require('./460').HeaderStyleInterpolator;
  },

  get DrawerView() {
    return require('./506').DrawerView;
  },

  get DrawerItems() {
    return require('./506').DrawerNavigatorItems;
  },

  get DrawerSidebar() {
    return require('./506').DrawerSidebar;
  },

  get BottomTabBar() {
    return require('./486').BottomTabBar;
  },

  get MaterialTopTabBar() {
    return require('./486').MaterialTopTabBar;
  },
};
