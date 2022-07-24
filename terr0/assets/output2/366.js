module.exports = {
  get createAppContainer() {
    return require('./367').default;
  },

  get createKeyboardAwareNavigator() {
    return require('./428').default;
  },

  get createNavigationAwareScrollable() {
    return require('./429').default;
  },

  get withOrientation() {
    return require('./431').default;
  },

  get ResourceSavingSceneView() {
    return require('./432').default;
  },

  get SafeAreaView() {
    return require('./433').default;
  },

  get ScrollView() {
    return require('./435').ScrollView;
  },

  get FlatList() {
    return require('./435').FlatList;
  },

  get SectionList() {
    return require('./435').SectionList;
  },
};
