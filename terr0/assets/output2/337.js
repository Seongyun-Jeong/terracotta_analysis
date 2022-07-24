module184({
  first: PropTypes.number.isRequired,
  after: PropTypes.string,
  groupTypes: PropTypes.oneOf(Object.keys(h)),
  groupName: PropTypes.string,
  assetType: PropTypes.oneOf(Object.keys(p)),
  mimeTypes: PropTypes.arrayOf(PropTypes.string),
});
module184({
  edges: PropTypes.arrayOf(
    module184({
      node: module184({
        type: PropTypes.string.isRequired,
        group_name: PropTypes.string.isRequired,
        image: module184({
          uri: PropTypes.string.isRequired,
          height: PropTypes.number.isRequired,
          width: PropTypes.number.isRequired,
          isStored: PropTypes.bool,
          playableDuration: PropTypes.number.isRequired,
        }).isRequired,
        timestamp: PropTypes.number.isRequired,
        location: module184({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          altitude: PropTypes.number,
          heading: PropTypes.number,
          speed: PropTypes.number,
        }),
      }).isRequired,
    })
  ).isRequired,
  page_info: module184({
    has_next_page: PropTypes.bool.isRequired,
    start_cursor: PropTypes.string,
    end_cursor: PropTypes.string,
  }).isRequired,
});
import PropTypes from 'prop-types';
import module3 from './3';

var module22 = require('./22'),
  module8 = require('./8').CameraRollManager,
  module184 = require('./184'),
  h = {
    Album: 'Album',
    All: 'All',
    Event: 'Event',
    Faces: 'Faces',
    Library: 'Library',
    PhotoStream: 'PhotoStream',
    SavedPhotos: 'SavedPhotos',
  },
  p = {
    All: 'All',
    Videos: 'Videos',
    Photos: 'Photos',
  },
  c = (function () {
    function s() {
      module22(this, s);
    }

    module23(s, null, [
      {
        key: 'saveImageWithTag',
        value: function (o) {
          console.warn('`CameraRoll.saveImageWithTag()` is deprecated. Use `CameraRoll.saveToCameraRoll()` instead.');
          return this.saveToCameraRoll(o, 'photo');
        },
      },
      {
        key: 'deletePhotos',
        value: function (o) {
          return module8.deletePhotos(o);
        },
      },
      {
        key: 'saveToCameraRoll',
        value: function (o, t) {
          module3('string' == typeof o, 'CameraRoll.saveToCameraRoll must be a valid string.');
          module3('photo' === t || 'video' === t || undefined === t, "The second argument to saveToCameraRoll must be 'photo' or 'video'. You passed " + (t || 'unknown'));
          var s = 'photo';
          if (t) s = t;
          else if (['mov', 'mp4'].indexOf(o.split('.').slice(-1)[0]) >= 0) s = 'video';
          return module8.saveToCameraRoll(o, s);
        },
      },
      {
        key: 'getPhotos',
        value: function (o) {
          if (arguments.length > 1) {
            console.warn('CameraRoll.getPhotos(tag, success, error) is deprecated.  Use the returned Promise instead');

            var t = arguments[1],
              s = arguments[2] || function () {};

            module8.getPhotos(o).then(t, s);
          }

          return module8.getPhotos(o);
        },
      },
    ]);
    return s;
  })();

c.GroupTypesOptions = h;
c.AssetTypeOptions = p;
module.exports = c;
