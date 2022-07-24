import module2 from './2';
module.exports = {
  get createStackNavigator() {
    return require('./461').default;
  },

  get Assets() {
    return module2.Platform.select({
      ios: [require('./473'), require('./477')],
      default: [require('./473')],
    });
  },

  get Header() {
    return require('./468').default;
  },

  get HeaderBackButton() {
    return require('./470').default;
  },

  get HeaderTitle() {
    return require('./469').default;
  },

  get HeaderStyleInterpolator() {
    return require('./475').default;
  },

  get StackView() {
    return require('./462').default;
  },

  get StackViewCard() {
    return require('./465').default;
  },

  get StackViewLayout() {
    return require('./463').default;
  },

  get StackViewStyleInterpolator() {
    return require('./479').default;
  },

  get StackViewTransitionConfigs() {
    return require('./478').default;
  },

  get createPointerEventsContainer() {
    return require('./466').default;
  },

  get Transitioner() {
    return require('./483').default;
  },

  get ScenesReducer() {
    return require('./484').default;
  },

  get StackGestureContext() {
    return require('./481').default;
  },
};
