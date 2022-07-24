var module404 = require('./404');

var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module623 = module404(require('./623')),
  module633 = require('./633'),
  module657 = require('./657');

function E(t, l) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (l)
      o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(t, l).enumerable;
      });
    n.push.apply(n, o);
  }

  return n;
}

function S(t) {
  for (var l = 1; l < arguments.length; l++) {
    var n = null != arguments[l] ? arguments[l] : {};
    if (l % 2)
      E(Object(n), true).forEach(function (l) {
        module284.default(t, l, n[l]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      E(Object(n)).forEach(function (l) {
        Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(n, l));
      });
  }

  return t;
}

var T = module2.Dimensions.get('window').width,
  module660 = require('./660'),
  w = (function (t) {
    function l(t) {
      var n;
      module356.default(this, l);
      (n = module358.default(this, module361.default(l).call(this, t))).state = {
        isModalVisible: false,
        isErrorModalVisible: false,
        animating: true,
        products: n.props.screenProps,
        secondProducts: n.props.secondProps,
        btnText: '',
        curItemIndex: 0,
        firsItem: 0,
        enabled: true,
        pickerValue: null,
        gender: n.props.gender,
        zip: '',
        phone: '',
        address: '',
        name: '',
        email: '',
        country: '',
      };
      n.state = S({}, n.state, {}, n.calculateButtonState());
      return n;
    }

    module362.default(l, t);
    module357.default(l, [
      {
        key: 'calculateSubDate',
        value: function () {
          return new Date().getTime() + 12096e5;
        },
      },
      {
        key: 'calculateOrderId',
        value: function () {
          for (var t = this.state.products, l = this.state.secondProducts, n = null, o = null, s = 0; s < t.length; s++)
            t[s].subDate && t[s].orderId && n < t[s].subDate && ((n = t[s].subDate), (o = t[s]));

          for (var u = 0; u < l.length; u++) l[u].subDate && l[u].orderId && n < l[u].subDate && ((n = l[u].subDate), (o = l[u]));

          if (n && o.orderId) {
            var c = (new Date().getTime() - (o.subDate - 12096e5)) / 1e3 / 60,
              h = parseInt(c / 15) + 1;
            if (h < 1) h = 1;
            return h + parseInt(o.orderId);
          }

          return '1' + Math.random().toString().slice(2, 10);
        },
      },
      {
        key: 'toggleModal',
        value: function () {
          var t = this;

          if (null == this.state.pickerValue) {
            setTimeout(function () {
              return t.setState({
                animating: false,
              });
            }, 500);
            this.setState({
              isErrorModalVisible: true,
              animating: true,
              modalText: 'Select a size',
            });
          } else
            this.setState({
              formShow: true,
            });
        },
      },
      {
        key: 'hideModal',
        value: function () {
          this.props.updateState(this.state.products);
          this.setState(
            S(
              {
                isModalVisible: false,
                firsItem: this.state.curItemIndex,
              },
              this.calculateButtonState()
            )
          );
        },
      },
      {
        key: 'hideErrModal',
        value: function () {
          this.setState({
            isModalVisible: false,
            isErrorModalVisible: false,
          });
        },
      },
      {
        key: 'calculateButtonState',
        value: function () {
          return null == this.state.products[this.state.curItemIndex].subDate
            ? {
                btnText: 'Order it',
                disabled: false,
                enabled: true,
              }
            : {
                btnText:
                  'Delivery date: ' +
                  module660(this.state.products[this.state.curItemIndex].subDate, 'longDate') +
                  '. Order ID: ' +
                  this.state.products[this.state.curItemIndex].orderId,
                disabled: true,
                subDate: this.state.products[this.state.curItemIndex].subDate,
                orderId: this.state.products[this.state.curItemIndex].orderId,
                enabled: false,
              };
        },
      },
      {
        key: 'onSnapToItem',
        value: function (t) {
          this.state.curItemIndex = t;
          this.setState(this.calculateButtonState());
          this.setState({
            pickerValue: null,
          });
        },
      },
      {
        key: 'renderItem',
        value: function (t, l) {
          var o = t.item;
          t.index;
          return React.default.createElement(
            module2.View,
            {
              style: {
                marginBottom: 20,
              },
            },
            React.default.createElement(
              module2.Text,
              {
                style: V.title,
              },
              o.title
            ),
            React.default.createElement(
              module623.ParallaxImage,
              module51.default(
                {
                  source: o.image,
                  containerStyle: V.imageContainer,
                  style: V.image,
                  parallaxFactor: 0.8,
                },
                l
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return this.state.formShow
            ? React.default.createElement(
                module2.View,
                {
                  style: V.container,
                },
                React.default.createElement(
                  module2.View,
                  {
                    style: V.headLine,
                  },
                  React.default.createElement(
                    module2.Text,
                    {
                      style: [V.headLineText],
                    },
                    'Fill up the information to apply'
                  )
                ),
                React.default.createElement(
                  module2.View,
                  {
                    style: V.form,
                  },
                  React.default.createElement(module2.TextInput, {
                    style: [V.formInput, V.formInputFirst],
                    placeholder: 'Name',
                    onChangeText: function (l) {
                      return t.setState({
                        name: l,
                      });
                    },
                    value: this.state.name,
                  }),
                  React.default.createElement(module2.TextInput, {
                    style: [V.formInput],
                    placeholder: 'Email',
                    onChangeText: function (l) {
                      return t.setState({
                        email: l,
                      });
                    },
                    value: this.state.email,
                  }),
                  React.default.createElement(module2.TextInput, {
                    style: [V.formInput],
                    placeholder: 'Phone',
                    onChangeText: function (l) {
                      return t.setState({
                        phone: l,
                      });
                    },
                    value: this.state.phone,
                  }),
                  React.default.createElement(module2.TextInput, {
                    style: [V.formInput],
                    placeholder: 'City',
                    onChangeText: function (l) {
                      return t.setState({
                        city: l,
                      });
                    },
                    value: this.state.city,
                  }),
                  React.default.createElement(module2.TextInput, {
                    style: [V.formInput],
                    placeholder: 'Address',
                    onChangeText: function (l) {
                      return t.setState({
                        address: l,
                      });
                    },
                    value: this.state.address,
                  }),
                  React.default.createElement(module2.TextInput, {
                    style: [V.formInput, V.formInputLast],
                    placeholder: 'Zip',
                    onChangeText: function (l) {
                      return t.setState({
                        zip: l,
                      });
                    },
                    value: this.state.zip,
                  })
                ),
                React.default.createElement(
                  module2.View,
                  {
                    style: V.startButtonWrapper,
                  },
                  React.default.createElement(
                    module2.TouchableOpacity,
                    {
                      style: V.startButton,
                      onPress: function () {
                        if (t.state.address && t.state.name && t.state.email && t.state.gender) {
                          setTimeout(function () {
                            return t.setState({
                              animating: false,
                            });
                          }, 3e3);
                          t.setState({
                            isModalVisible: true,
                            formShow: false,
                            animating: true,
                          });
                          t.onSnapToItem(t.state.curItemIndex);
                          t.state.products[t.state.curItemIndex].subDate = t.calculateSubDate();
                          t.state.products[t.state.curItemIndex].orderId = t.calculateOrderId();
                        } else module2.Alert.alert('Error', 'Please, fill all fields');
                      },
                    },
                    React.default.createElement(
                      module2.Text,
                      {
                        style: V.startButtonText,
                      },
                      ' Get it '
                    )
                  )
                )
              )
            : React.default.createElement(
                module2.View,
                {
                  style: V.slide,
                },
                React.default.createElement(module623.default, {
                  data: this.state.products,
                  renderItem: this.renderItem.bind(this),
                  firstItem: this.state.firsItem,
                  sliderWidth: T,
                  sliderHeight: T,
                  itemWidth: T - 100,
                  hasParallaxImages: true,
                  onBeforeSnapToItem: this.onSnapToItem.bind(this),
                }),
                'Order it' != this.state.btnText || this.state.disabled
                  ? React.default.createElement(
                      module2.Text,
                      {
                        style: V.congratulations,
                      },
                      'Congratulations!'
                    )
                  : 'male' == this.state.gender
                  ? React.default.createElement(module657.default, {
                      style: C,
                      useNativeAndroidPickerStyle: false,
                      onValueChange: function (l, n) {
                        return t.setState({
                          pickerValue: l,
                        });
                      },
                      value: this.state.pickerValue,
                      placeholder: {
                        label: 'Select a size',
                        value: null,
                        color: 'blue',
                      },
                      placeholderTextColor: 'blue',
                      items: [
                        {
                          label: '6 US        39 EU',
                          value: '6',
                        },
                        {
                          label: '6.5 US     39.5 EU',
                          value: '6.5',
                        },
                        {
                          label: '7 US        40 EU',
                          value: '7.5',
                        },
                        {
                          label: '8 US        41 EU',
                          value: '8',
                        },
                        {
                          label: '9 US        42 EU',
                          value: '9',
                        },
                        {
                          label: '10 US      43 EU',
                          value: '9.5',
                        },
                        {
                          label: '11 US      44 EU',
                          value: '11',
                        },
                        {
                          label: '12 US      45 EU',
                          value: '12',
                        },
                      ],
                    })
                  : React.default.createElement(module657.default, {
                      style: C,
                      useNativeAndroidPickerStyle: false,
                      onValueChange: function (l, n) {
                        return t.setState({
                          pickerValue: l,
                        });
                      },
                      value: this.state.pickerValue,
                      placeholder: {
                        label: 'Select a size',
                        value: null,
                        color: 'blue',
                      },
                      placeholderTextColor: 'blue',
                      items: [
                        {
                          label: '4.5 US     34 EU',
                          value: '4.5',
                        },
                        {
                          label: '5 US        35 EU',
                          value: '5',
                        },
                        {
                          label: '6 US        36 EU',
                          value: '6',
                        },
                        {
                          label: '6.5 US     37 EU',
                          value: '6.5',
                        },
                        {
                          label: '7 US        37.5 EU',
                          value: '7.5',
                        },
                        {
                          label: '8 US        38.5 EU',
                          value: '8',
                        },
                        {
                          label: '8.5 US     39 EU',
                          value: '8.5',
                        },
                        {
                          label: '10 US      40 EU',
                          value: '9',
                        },
                      ],
                    }),
                React.default.createElement(
                  module2.View,
                  null,
                  React.default.createElement(
                    module2.TouchableOpacity,
                    null,
                    'Order it' != this.state.btnText || this.state.disabled
                      ? this.state.subDate && this.state.subDate < new Date().getTime()
                        ? React.default.createElement(
                            module2.Text,
                            {
                              style: V.resultAwaitingBtn,
                            },
                            'Awaiting shipment'
                          )
                        : React.default.createElement(
                            module2.View,
                            {
                              style: V.resultBtn,
                            },
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.resultBtnText,
                              },
                              'Order #' + this.state.products[this.state.curItemIndex].orderId
                            ),
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.resultBtnText,
                              },
                              'Delivery date:'
                            ),
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.resultBtnText,
                              },
                              module660(this.state.products[this.state.curItemIndex].subDate, 'longDate')
                            )
                          )
                      : React.default.createElement(
                          module2.Text,
                          {
                            onPress: this.toggleModal.bind(this),
                            style: V.orderBtn,
                          },
                          this.state.btnText
                        )
                  )
                ),
                React.default.createElement(
                  module2.View,
                  {
                    style: V.container,
                  },
                  React.default.createElement(
                    module633.default,
                    {
                      isVisible: this.state.isModalVisible,
                    },
                    React.default.createElement(
                      module2.View,
                      {
                        style: V.modal,
                      },
                      this.state.animating
                        ? React.default.createElement(module2.ActivityIndicator, {
                            size: 'large',
                            color: 'blue',
                            animating: true,
                          })
                        : React.default.createElement(
                            module2.View,
                            {
                              style: {
                                backgroundColor: 'white',
                                alignItems: 'center',
                              },
                            },
                            React.default.createElement(module2.Image, {
                              style: V.modalImg,
                              source: this.state.products[this.state.curItemIndex].image,
                            }),
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.modaltext,
                              },
                              'You have confirmation of your ',
                              React.default.createElement(
                                function (t) {
                                  return React.default.createElement(
                                    module2.Text,
                                    {
                                      style: {
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                      },
                                    },
                                    t.children
                                  );
                                },
                                null,
                                'FREE Pair'
                              ),
                              '.'
                            ),
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.modaltext,
                              },
                              this.state.products[this.state.curItemIndex].title
                            ),
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.modaltext,
                              },
                              'Order #',
                              this.state.products[this.state.curItemIndex].orderId
                            ),
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.modaltext,
                              },
                              'You need to wait for notifications with our instructions approximately ',
                              module660(this.state.products[this.state.curItemIndex].subDate, 'longDate')
                            ),
                            React.default.createElement(
                              module2.View,
                              {
                                style: {
                                  padding: 20,
                                },
                              },
                              React.default.createElement(
                                module2.TouchableOpacity,
                                null,
                                React.default.createElement(
                                  module2.Text,
                                  {
                                    style: V.okBtn,
                                    onPress: this.hideModal.bind(this),
                                  },
                                  'OK'
                                )
                              )
                            )
                          )
                    )
                  ),
                  React.default.createElement(
                    module633.default,
                    {
                      isVisible: this.state.isErrorModalVisible,
                    },
                    React.default.createElement(
                      module2.View,
                      {
                        style: V.modal,
                      },
                      this.state.animating
                        ? React.default.createElement(module2.ActivityIndicator, {
                            size: 'large',
                            color: 'blue',
                            animating: true,
                          })
                        : React.default.createElement(
                            module2.View,
                            {
                              style: {
                                backgroundColor: 'white',
                                alignItems: 'center',
                              },
                            },
                            React.default.createElement(
                              module2.Text,
                              {
                                style: V.modaltext,
                              },
                              this.state.modalText
                            ),
                            React.default.createElement(
                              module2.View,
                              {
                                style: {
                                  padding: 20,
                                },
                              },
                              React.default.createElement(
                                module2.TouchableOpacity,
                                null,
                                React.default.createElement(
                                  module2.Text,
                                  {
                                    style: V.okBtn,
                                    onPress: this.hideErrModal.bind(this),
                                  },
                                  'OK'
                                )
                              )
                            )
                          )
                    )
                  )
                )
              );
        },
      },
    ]);
    return l;
  })(React.Component),
  C = {
    inputIOS: {
      color: 'blue',
    },
    inputAndroid: {
      color: 'blue',
    },
    underline: {
      borderTopWidth: 0,
    },
    iconContainer: {
      placeholderColor: 'blue',
    },
  },
  V = module2.StyleSheet.create({
    topLine: {
      flex: 1,
      textAlign: 'center',
      width: '100%',
      justifyContent: 'flex-start',
    },
    headLine: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'flex-end',
    },
    orderBtn: {
      height: 50,
      width: 120,
      borderRadius: 30,
      paddingTop: 15,
      color: '#fff',
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: '#1565c0',
      borderWidth: 1,
      borderColor: '#1565c0',
      textAlign: 'center',
    },
    congratulations: {
      marginTop: 10,
      color: '#1565c0',
      marginBottom: 5,
    },
    resultAwaitingBtn: {
      height: 50,
      width: 150,
      borderRadius: 40,
      paddingTop: 15,
      color: '#fff',
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: '#757575',
      borderWidth: 1,
      borderColor: '#757575',
      textAlign: 'center',
    },
    resultBtnText: {
      color: '#fff',
      textAlign: 'center',
    },
    resultBtn: {
      height: 77,
      width: 160,
      borderRadius: 40,
      marginTop: 10,
      padding: 7,
      color: '#fff',
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: '#757575',
      borderWidth: 1,
      borderColor: '#757575',
      textAlign: 'center',
    },
    okBtn: {
      height: 35,
      width: 80,
      borderRadius: 30,
      paddingTop: 5,
      color: '#fff',
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: '#1565c0',
      borderWidth: 1,
      borderColor: '#1565c0',
      textAlign: 'center',
    },
    headLineText: {
      color: '#FFFFFF',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: 17,
      lineHeight: 17,
      textAlign: 'center',
    },
    headLineRed: {
      color: '#017777',
      fontWeight: '300',
      fontSize: 20,
      lineHeight: 21,
    },
    form: {
      justifyContent: 'center',
      margin: 30,
    },
    formInput: {
      width: T - 60,
      height: T - 60,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 17,
      lineHeight: 43,
      height: 50,
      borderColor: '#EAF3F8',
      color: 'black',
      borderStyle: 'solid',
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      textAlignVertical: 'center',
      paddingVertical: 0,
    },
    formInputFirst: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderWidth: 2,
    },
    formInputLast: {
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      borderWidth: 2,
      borderTopWidth: 0,
    },
    formInputDropdown: {
      paddingRight: 0,
      borderWidth: 2,
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
    },
    formInputDropdownPicker: {
      marginBottom: 5,
      height: 46,
    },
    startButtonWrapper: {
      flex: 2,
      width: '100%',
      paddingLeft: 30,
      paddingRight: 30,
    },
    startButton: {
      backgroundColor: '#1565c0',
      borderRadius: 25,
    },
    startButtonText: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 17,
      lineHeight: 50,
      textTransform: 'uppercase',
      color: '#FFFFFF',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    slide: {
      width: 250,
      height: 370,
      alignItems: 'center',
      marginBottom: 20,
    },
    item: {
      width: T - 60,
      height: T - 60,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1565c0',
    },
    imageContainer: {
      width: 250,
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginRight: 10,
    },
    image: S({}, module2.StyleSheet.absoluteFillObject, {
      resizeMode: 'contain',
      alignItems: 'center',
      padding: 10,
    }),
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    modalImg: {
      marginTop: 15,
      height: 200,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modaltext: {
      padding: 5,
      marginRight: 5,
      marginLeft: 5,
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: 'white',
    },
    picker: {
      height: 30,
      color: '#1565c0',
      backgroundColor: 'white',
      margin: 5,
    },
    txtview: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 20,
      marginTop: 30,
    },
    txt: {
      padding: 5,
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 18,
      marginRight: 5,
      marginLeft: 5,
    },
  }),
  k = w;

exports.default = k;
