import React from 'react';
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module364 = require('./364'),
  module788 = [require('./771'), require('./772'), require('./773'), require('./774')],
  S = module2.StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 350,
      height: 350,
      alignSelf: 'stretch',
      flex: 0.5,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  }),
  y = module788;

class module788 {
  constructor(t) {
    var l;
    module356.default(this, module775);
    (l = module358.default(this, module361.default(module775).call(this, t))).state = {
      timePassed: false,
      mens: [
        {
          title: 'Consortium Ultraboost',
          image: require('./775'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Yeezy Boost',
          image: require('./776'),
          subDate: null,
        },
        {
          title: 'Yeezy Boost 700',
          image: require('./777'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Air Force 1 Cactus Jack',
          image: require('./778'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Air Force 1',
          image: require('./772'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Air Jordan',
          image: require('./779'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Air Max 90 Betrue',
          image: require('./780'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Asics Gel-korika',
          image: require('./781'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Jack Purcell OX',
          image: require('./782'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'New Balance Red Wing',
          image: require('./783'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'New Balance x-bodega',
          image: require('./784'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Waffle Racer SP',
          image: require('./785'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Salomon S/Lab XT-4',
          image: require('./774'),
          subDate: null,
          orderId: null,
        },
      ],
      womans: [
        {
          title: 'x Yeezy',
          image: require('./786'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Aquazzura',
          image: require('./771'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'DMX  1000',
          image: require('./773'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Jordan 1',
          image: require('./787'),
          subDate: null,
          orderId: null,
        },
        {
          title: 'Air Fear Of God 1',
          image: require('./788'),
          subDate: null,
          orderId: null,
        },
      ],
    };
    module2.AsyncStorage.getItem('womans')
      .then(function (t) {
        if (t) l.state.womans = JSON.parse(t);
      })
      .catch(function (t) {});
    module2.AsyncStorage.getItem('mens')
      .then(function (t) {
        if (t) l.state.mens = JSON.parse(t);
      })
      .catch(function (t) {})
      .then(function () {
        setTimeout(function () {
          l.setState({
            timePassed: true,
          });
        }, 3e3);
      });
    return l;
  }

  updateState() {
    this.setState({
      mens: this.state.mens,
      womans: this.state.womans,
    });
    module2.AsyncStorage.setItem('mens', JSON.stringify(this.state.mens)).catch(function (t) {});
    module2.AsyncStorage.setItem('womans', JSON.stringify(this.state.womans)).catch(function (t) {});
  }

  render() {
    return 0 == this.state.timePassed ? (
      <module2.View style={S.container}>
        <module2.StatusBar barStyle="light-content" hidden={false} />
        <module2.Image style={S.image} source={module788[Math.floor(Math.random() * module788.length)]} />
        <module2.Text style={S.text}> Put on your feet </module2.Text>
      </module2.View>
    ) : (
      <module364.default
        date={this.state.date}
        screenProps={{
          mens: this.state.mens,
          womans: this.state.womans,
          updateState: this.updateState.bind(this),
        }}
      />
    );
  }
}

export default y;
