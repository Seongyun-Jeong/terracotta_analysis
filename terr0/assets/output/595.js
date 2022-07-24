var module2 = require('./2');

module.exports = {
  get createStackNavigator() {
    return require('./596').default;
  },

  get Assets() {
    return module2.Platform.select({
      ios: [require('./607'), require('./612')],
      default: [require('./607')],
    });
  },

  get Header() {
    return require('./602').default;
  },

  get HeaderBackButton() {
    return require('./604').default;
  },

  get HeaderTitle() {
    return require('./603').default;
  },

  get HeaderStyleInterpolator() {
    return require('./610').default;
  },

  get StackView() {
    return require('./597').default;
  },

  get StackViewCard() {
    return require('./599').default;
  },

  get StackViewLayout() {
    return require('./598').default;
  },

  get StackViewStyleInterpolator() {
    return require('./614').default;
  },

  get StackViewTransitionConfigs() {
    return require('./613').default;
  },

  get createPointerEventsContainer() {
    return require('./600').default;
  },

  get Transitioner() {
    return require('./618').default;
  },

  get ScenesReducer() {
    return require('./619').default;
  },

  get StackGestureContext() {
    return require('./616').default;
  },
};
