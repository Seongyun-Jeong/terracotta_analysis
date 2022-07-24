import module3 from './3';
import module4 from './4';
module.exports = {
  get AccessibilityInfo() {
    return require('./7');
  },

  get ActivityIndicator() {
    return require('./45');
  },

  get ART() {
    return require('./169');
  },

  get Button() {
    return require('./179');
  },

  get CheckBox() {
    return require('./264');
  },

  get DatePickerIOS() {
    return require('./267');
  },

  get DrawerLayoutAndroid() {
    return require('./268');
  },

  get FlatList() {
    return require('./233');
  },

  get Image() {
    return require('./252');
  },

  get ImageBackground() {
    return require('./271');
  },

  get ImageEditor() {
    return require('./273');
  },

  get ImageStore() {
    module4(
      'imagestore-deprecation',
      "ImageStore is deprecated and will be removed in a future release. To get a base64-encoded string from a local image use either of the following third-party libraries:* expo-file-system: `readAsStringAsync(filepath, 'base64')`* react-native-fs: `readFile(filepath, 'base64')`"
    );
    return require('./274');
  },

  get InputAccessoryView() {
    return require('./275');
  },

  get KeyboardAvoidingView() {
    return require('./277');
  },

  get ListView() {
    module4('listview-deprecation', 'ListView is deprecated and will be removed in a future release. See https://fb.me/nolistview for more information');
    return require('./278');
  },

  get MaskedViewIOS() {
    module4(
      'maskedviewios-moved',
      "MaskedViewIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/masked-view' instead of 'react-native'. See https://github.com/react-native-community/react-native-masked-view"
    );
    return require('./286');
  },

  get Modal() {
    return require('./287');
  },

  get Picker() {
    return require('./291');
  },

  get PickerIOS() {
    return require('./286');
  },

  get ProgressBarAndroid() {
    return require('./167');
  },

  get ProgressViewIOS() {
    return require('./296');
  },

  get SafeAreaView() {
    return require('./297');
  },

  get ScrollView() {
    return require('./240');
  },

  get SectionList() {
    return require('./259');
  },

  get SegmentedControlIOS() {
    return require('./298');
  },

  get Slider() {
    module4(
      'slider-moved',
      "Slider has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'. See https://github.com/react-native-community/react-native-slider"
    );
    return require('./299');
  },

  get SnapshotViewIOS() {
    return require('./286');
  },

  get Switch() {
    return require('./302');
  },

  get RefreshControl() {
    return require('./237');
  },

  get StatusBar() {
    return require('./269');
  },

  get SwipeableFlatList() {
    return require('./304');
  },

  get SwipeableListView() {
    module4(
      'swipablelistview-deprecation',
      'ListView and SwipeableListView are deprecated and will be removed in a future release. See https://fb.me/nolistview for more information'
    );
    return require('./308');
  },

  get Text() {
    return require('./180');
  },

  get TextInput() {
    return require('./310');
  },

  get ToolbarAndroid() {
    return require('./316');
  },

  get Touchable() {
    return require('./185');
  },

  get TouchableHighlight() {
    return require('./318');
  },

  get TouchableNativeFeedback() {
    return require('./193');
  },

  get TouchableOpacity() {
    return require('./201');
  },

  get TouchableWithoutFeedback() {
    return require('./194');
  },

  get View() {
    return require('./75');
  },

  get ViewPagerAndroid() {
    module4(
      'viewpager-moved',
      "ViewPagerAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/viewpager' instead of 'react-native'. See https://github.com/react-native-community/react-native-viewpager"
    );
    return require('./319');
  },

  get VirtualizedList() {
    return require('./234');
  },

  get WebView() {
    module4(
      'webview-moved',
      "WebView has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from 'react-native-webview' instead of 'react-native'. See https://github.com/react-native-community/react-native-webview"
    );
    return require('./321');
  },

  get ActionSheetIOS() {
    return require('./324');
  },

  get Alert() {
    return require('./134');
  },

  get AlertIOS() {
    module4('alert-ios', 'AlertIOS is deprecated. Use the `Alert` module directly instead.');
    return require('./134');
  },

  get Animated() {
    return require('./202');
  },

  get AppRegistry() {
    return require('./325');
  },

  get AppState() {
    return require('./335');
  },

  get AsyncStorage() {
    module4(
      'async-storage-moved',
      "Async Storage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/async-storage' instead of 'react-native'. See https://github.com/react-native-community/react-native-async-storage"
    );
    return require('./336');
  },

  get BackHandler() {
    return require('./331');
  },

  get CameraRoll() {
    return require('./337');
  },

  get Clipboard() {
    return require('./338');
  },

  get DatePickerAndroid() {
    return require('./339');
  },

  get DeviceInfo() {
    return require('./55');
  },

  get Dimensions() {
    return require('./54');
  },

  get Easing() {
    return require('./229');
  },

  get findNodeHandle() {
    return require('./78').findNodeHandle;
  },

  get I18nManager() {
    return require('./289');
  },

  get ImagePickerIOS() {
    return require('./340');
  },

  get InteractionManager() {
    return require('./210');
  },

  get Keyboard() {
    return require('./243');
  },

  get LayoutAnimation() {
    return require('./244');
  },

  get Linking() {
    return require('./341');
  },

  get NativeEventEmitter() {
    return require('./117');
  },

  get NetInfo() {
    module4(
      'netinfo-moved',
      "NetInfo has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/netinfo' instead of 'react-native'. See https://github.com/react-native-community/react-native-netinfo"
    );
    return require('./342');
  },

  get PanResponder() {
    return require('./306');
  },

  get PermissionsAndroid() {
    return require('./140');
  },

  get PixelRatio() {
    return require('./53');
  },

  get PushNotificationIOS() {
    return require('./343');
  },

  get Settings() {
    return require('./344');
  },

  get Share() {
    return require('./345');
  },

  get StatusBarIOS() {
    return require('./346');
  },

  get StyleSheet() {
    return require('./52');
  },

  get Systrace() {
    return require('./25');
  },

  get TimePickerAndroid() {
    return require('./347');
  },

  get ToastAndroid() {
    return require('./348');
  },

  get TVEventHandler() {
    return require('./189');
  },

  get UIManager() {
    return require('./42');
  },

  get unstable_batchedUpdates() {
    return require('./78').unstable_batchedUpdates;
  },

  get UTFSequence() {
    return require('./349');
  },

  get Vibration() {
    return require('./350');
  },

  get VibrationIOS() {
    return require('./351');
  },

  get YellowBox() {
    return require('./352');
  },

  get DeviceEventEmitter() {
    return require('./29');
  },

  get NativeAppEventEmitter() {
    return require('./145');
  },

  get NativeModules() {
    return require('./8');
  },

  get Platform() {
    return require('./43');
  },

  get processColor() {
    return require('./69');
  },

  get requireNativeComponent() {
    return require('./156');
  },

  get takeSnapshot() {
    return require('./353');
  },

  get ColorPropType() {
    return require('./58');
  },

  get EdgeInsetsPropType() {
    return require('./182');
  },

  get PointPropType() {
    return require('./354');
  },

  get ViewPropTypes() {
    return require('./253');
  },

  get BackAndroid() {
    module3(false, 'BackAndroid is deprecated and has been removed from this package. Use BackHandler instead');
  },

  get Navigator() {
    module3(
      false,
      'Navigator is deprecated and has been removed from this package. It can now be installed and imported from `react-native-deprecated-custom-components` instead of `react-native`. Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html'
    );
  },

  get NavigatorIOS() {
    module3(
      false,
      'NavigatorIOS is deprecated and has been removed from this package. Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html'
    );
  },
};
