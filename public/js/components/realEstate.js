webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'logo' },
                        'Logo'
                    ),
                    _react2.default.createElement(
                        'nav',
                        { className: 'navbar' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Create Ads'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'About Us'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Log In'
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#', className: 'register-btn' },
                                        'Register'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings(props, context) {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this, props, context));

        _this.state = {};
        _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'listingLength',
        value: function listingLength() {
            var listingData = this.props.listingData;

            return listingData.map(function (listing, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, className: 'inline' },
                    'let listingNumber = ',
                    listingData.length,
                    'listingNumber.length'
                );
            });
        }
    }, {
        key: 'loopListings',
        value: function loopListings() {
            var listingData = this.props.listingData;

            if (listingData == undefined || listingData.length == 0) {
                return 'Sorry your search did not match any results';
            }

            return listingData.map(function (listing, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'listing', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                        _react2.default.createElement(
                            'span',
                            { className: 'address' },
                            listing.name
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'details' },
                            _react2.default.createElement('div', { className: 'user-img' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'user-details' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'user-name' },
                                    listing.user
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'post-date' },
                                    'Posted on ',
                                    listing.postDate
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-details' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'listing-floor-area' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        ' ',
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'chart-area' }),
                                        ' ',
                                        listing.area,
                                        'm\xB2'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'furnished' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        ' ',
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'couch' }),
                                        ' ',
                                        listing.furnished
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'bedroom-count' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        ' ',
                                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'bed' }),
                                        ' ',
                                        listing.bedrooms,
                                        ' bedrooms ',
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'view-map', href: '#' },
                                            'view map'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bottom-info' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing-price' },
                            '$',
                            listing.price,
                            '/month (ex.)'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'listing-location' },
                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'map-marker-alt' }),
                            ' Location: ',
                            listing.location
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;

            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(
                    'section',
                    { id: 'search-area' },
                    _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search' })
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'sort-by' },
                    _react2.default.createElement(
                        'div',
                        { className: 'results' },
                        _react2.default.createElement(
                            'span',
                            null,
                            this.listingLength().length,
                            ' result(s) found'
                        ),
                        _react2.default.createElement(
                            'select',
                            { className: 'result-order', name: 'sortby', onChange: this.props.change },
                            _react2.default.createElement(
                                'option',
                                { value: 'price_asc' },
                                'Lowest price'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'price_dsc' },
                                'Highest price'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'view' },
                            _react2.default.createElement(
                                'span',
                                { className: 'list-icon' },
                                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'list' })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'grid-icon' },
                                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'th' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'listings-results' },
                    _react2.default.createElement(
                        'div',
                        { className: 'listing-grid' },
                        this.loopListings()
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'pagination' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'pages' },
                        _react2.default.createElement(
                            'li',
                            { className: 'previous' },
                            'prev'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'active' },
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '2'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '3'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '4'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '5'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'next' },
                            'next'
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingData = [{
    user: 'Revolver Ocelot',
    postDate: '5/6/2018',
    name: 'Arsenal Gear',
    area: 351,
    furnished: 'furnished',
    bedrooms: 1,
    price: 1001,
    location: 'Minnesota',
    houseType: 'apartment',
    facilities: ['swimming pool', 'elevator'],
    image: 'https://i.ytimg.com/vi/RT8mZ6y5vsg/maxresdefault.jpg'

}, {
    user: 'Meryl Silverburgh',
    postDate: '5/6/2018',
    name: 'Shadow Moses',
    area: 299,
    furnished: 'unfurnished',
    bedrooms: 2,
    price: 2550,
    location: 'Rotterdam',
    houseType: 'condo',
    facilities: ['swimming pool', 'elevator'],
    image: 'https://files.gamebanana.com/img/ss/maps/530-90_57f0d41ad0a88.jpg'

}, {
    user: 'Solid Snake',
    postDate: '5/6/2018',
    name: 'Outer Haven',
    area: 411,
    furnished: 'furnished',
    bedrooms: 4,
    price: 1650,
    location: 'Florida',
    houseType: 'apartment',
    facilities: ['swimming pool', 'elevator'],
    image: 'http://farm5.static.flickr.com/4081/4936699491_54f68e5725.jpg'

}, {
    user: 'Colonel Cambel',
    postDate: '5/6/2018',
    name: 'Groznyj Grad',
    area: 1100,
    furnished: 'furnished',
    bedrooms: 1,
    price: 3000,
    location: 'New York',
    houseType: 'house',
    facilities: ['swimming pool', 'elevator'],
    image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/3639-12/mosaic-at-metro-apartments-swimming-pool.jpg   '

}, {
    user: 'Revolver Ocelot',
    postDate: '5/6/2018',
    name: 'Arsenal Gear',
    area: 351,
    furnished: 'furnished',
    bedrooms: 3,
    price: 1450,
    location: 'Minnesota',
    houseType: 'apartment',
    facilities: ['swimming pool', 'elevator'],
    image: 'https://i.ytimg.com/vi/RT8mZ6y5vsg/maxresdefault.jpg'

}, {
    user: 'Meryl Silverburgh',
    postDate: '5/6/2018',
    name: 'Shadow Moses',
    area: 299,
    furnished: 'unfurnished',
    bedrooms: 2,
    price: 950,
    location: 'Rotterdam',
    houseType: 'apartment',
    facilities: ['swimming pool', 'elevator'],
    image: 'https://files.gamebanana.com/img/ss/maps/530-90_57f0d41ad0a88.jpg'

}, {
    user: 'Solid Snake',
    postDate: '5/6/2018',
    name: 'Outer Haven',
    area: 411,
    furnished: 'furnished',
    bedrooms: 4,
    price: 1650,
    location: 'Rotterdam',
    houseType: 'apartment',
    facilities: ['swimming pool', 'elevator'],
    image: 'http://farm5.static.flickr.com/4081/4936699491_54f68e5725.jpg'

}, {
    user: 'Colonel Cambel',
    postDate: '5/6/2018',
    name: 'Groznyj Grad',
    area: 704,
    furnished: 'furnished',
    bedrooms: 6,
    price: 2050,
    location: 'Florida',
    houseType: 'apartment',
    facilities: ['swimming pool', 'elevator'],
    image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/3639-12/mosaic-at-metro-apartments-swimming-pool.jpg'

}];

exports.default = listingData;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(100);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(99);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(101);

var _Listings2 = _interopRequireDefault(_Listings);

var _fontawesomeSvgCore = __webpack_require__(56);

var _freeSolidSvgIcons = __webpack_require__(98);

var _listingData = __webpack_require__(102);

var _listingData2 = _interopRequireDefault(_listingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTh, _freeSolidSvgIcons.faChartArea, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faCouch, _freeSolidSvgIcons.faBed, _freeSolidSvgIcons.faMapMarkerAlt);

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            listingData: _listingData2.default,
            location: 'All',
            houseType: 'All',
            bedrooms: 0,
            min_price: 0,
            max_price: 100000,
            min_area: 0,
            max_area: 10000,
            elevator: false,
            storage: false,
            bath_tub: false,
            separate_shower: false,
            fireplace: false,
            swimming_pool: false,
            filteredData: _listingData2.default,
            populateFormsData: '',
            sortby: 'price_dsc'
        }, _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingData.filter(function (item) {
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.area >= _this3.state.min_area && item.area <= _this3.state.max_area && item.bedrooms >= _this3.state.bedrooms;
            });
            if (this.state.location != 'All') {
                newData = newData.filter(function (item) {
                    return item.location == _this3.state.location;
                });
            }
            if (this.state.houseType != 'All') {
                newData = newData.filter(function (item) {
                    return item.houseType == _this3.state.houseType;
                });
            }
            if (this.state.sortby === 'price_asc') {
                newData = newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }
            if (this.state.sortby === 'price_dsc') {
                newData = newData.sort(function (a, b) {
                    return b.price - a.price;
                });
            }
            this.setState({
                filteredData: newData
            });
        }
    }, {
        key: 'populateForms',
        value: function populateForms() {
            //location
            var locations = this.state.listingData.map(function (item) {
                return item.location;
            });
            locations = new Set(locations);
            locations = [].concat(_toConsumableArray(locations));
            locations = locations.sort();
            //houseType
            var houseTypes = this.state.listingData.map(function (item) {
                return item.houseType;
            });
            houseTypes = new Set(houseTypes);
            houseTypes = [].concat(_toConsumableArray(houseTypes));
            houseTypes = houseTypes.sort();
            //bedrooms
            var bedrooms = this.state.listingData.map(function (item) {
                return item.bedrooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms));
            bedrooms = bedrooms.sort();
            this.setState({
                populateFormsData: {
                    locations: locations,
                    houseTypes: houseTypes,
                    bedrooms: bedrooms
                }
            }, function () {
                console.log();
            } //this.state)
            );
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var listingData = this.state.listingData.sort(function (a, b) {
                return a.price - b.price;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                    _react2.default.createElement(_Listings2.default, { listingData: this.state.filteredData, change: this.change })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
        _inherits(Filter, _Component);

        function Filter() {
                _classCallCheck(this, Filter);

                var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

                _this.state = {};
                _this.locations = _this.locations.bind(_this);
                _this.houseTypes = _this.houseTypes.bind(_this);
                _this.bedrooms = _this.bedrooms.bind(_this);
                return _this;
        }

        _createClass(Filter, [{
                key: 'componentWillMount',
                value: function componentWillMount() {
                        this.props.populateAction();
                }
        }, {
                key: 'locations',
                value: function locations() {
                        var locations = this.props.globalState.populateFormsData.locations;
                        if (locations != undefined) {
                                // console.log(locations)
                                return locations.map(function (item) {
                                        return _react2.default.createElement(
                                                'option',
                                                { value: item, key: item },
                                                item
                                        );
                                });
                        }
                }
        }, {
                key: 'houseTypes',
                value: function houseTypes() {
                        var houseTypes = this.props.globalState.populateFormsData.houseTypes;
                        if (houseTypes != undefined) {
                                // console.log(houseTypes)
                                return houseTypes.map(function (item) {
                                        return _react2.default.createElement(
                                                'option',
                                                { value: item, key: item },
                                                item
                                        );
                                });
                        }
                }
        }, {
                key: 'bedrooms',
                value: function bedrooms() {
                        var bedrooms = this.props.globalState.populateFormsData.bedrooms;
                        if (bedrooms != undefined) {
                                // console.log(bedrooms)
                                return bedrooms.map(function (item) {
                                        return _react2.default.createElement(
                                                'option',
                                                { value: item, key: item },
                                                item,
                                                '+'
                                        );
                                });
                        }
                }
        }, {
                key: 'render',
                value: function render() {
                        return _react2.default.createElement(
                                'section',
                                { id: 'filter' },
                                _react2.default.createElement(
                                        'div',
                                        { className: 'filter-container' },
                                        _react2.default.createElement(
                                                'h4',
                                                null,
                                                'FILTER'
                                        ),
                                        _react2.default.createElement(
                                                'select',
                                                { name: 'location', className: 'filters neighbourhood', onChange: this.props.change },
                                                _react2.default.createElement(
                                                        'option',
                                                        { value: 'All' },
                                                        'All Locations'
                                                ),
                                                this.locations()
                                        ),
                                        _react2.default.createElement(
                                                'select',
                                                { name: 'houseType', className: 'filters housetype', onChange: this.props.change },
                                                _react2.default.createElement(
                                                        'option',
                                                        { value: 'All' },
                                                        'Housing Type'
                                                ),
                                                this.houseTypes()
                                        ),
                                        _react2.default.createElement(
                                                'select',
                                                { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
                                                _react2.default.createElement(
                                                        'option',
                                                        { value: '0' },
                                                        'Rooms'
                                                ),
                                                this.bedrooms()
                                        ),
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'filters price' },
                                                _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Price'
                                                ),
                                                _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', placeholder: '0.00', onChange: this.props.change, value: this.props.globalState.min_price }),
                                                _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', placeholder: '1,000,000', onChange: this.props.change, value: this.props.globalState.max_price })
                                        ),
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'filters floor-space' },
                                                _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Floor Space'
                                                ),
                                                _react2.default.createElement('input', { type: 'text', name: 'min_area', className: 'min-price', placeholder: '90 m\xB2', onChange: this.props.change, value: this.props.globalState.min_area }),
                                                _react2.default.createElement('input', { type: 'text', name: 'max_area', className: 'max-price', placeholder: '150 m\xB2', onChange: this.props.change, value: this.props.globalState.max_area })
                                        ),
                                        _react2.default.createElement(
                                                'h3',
                                                null,
                                                'Facilities'
                                        ),
                                        _react2.default.createElement(
                                                'div',
                                                { className: 'filters facilities' },
                                                _react2.default.createElement(
                                                        'label',
                                                        null,
                                                        _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Elevators '
                                                        ),
                                                        _react2.default.createElement('input', { name: 'elevator', type: 'checkbox', onChange: this.props.change })
                                                ),
                                                _react2.default.createElement(
                                                        'label',
                                                        null,
                                                        _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Storage '
                                                        ),
                                                        _react2.default.createElement('input', { name: 'storage', type: 'checkbox', onChange: this.props.change })
                                                ),
                                                _react2.default.createElement(
                                                        'label',
                                                        null,
                                                        _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Bath tub'
                                                        ),
                                                        ' ',
                                                        _react2.default.createElement('input', { name: 'bath_tub', type: 'checkbox', onChange: this.props.change })
                                                ),
                                                _react2.default.createElement(
                                                        'label',
                                                        null,
                                                        _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Separate shower'
                                                        ),
                                                        ' ',
                                                        _react2.default.createElement('input', { name: 'separate_shower', type: 'checkbox', onChange: this.props.change })
                                                ),
                                                _react2.default.createElement(
                                                        'label',
                                                        null,
                                                        _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Fireplace'
                                                        ),
                                                        ' ',
                                                        _react2.default.createElement('input', { name: 'fireplace', type: 'checkbox', onChange: this.props.change })
                                                ),
                                                _react2.default.createElement(
                                                        'label',
                                                        null,
                                                        _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Swimming Pool'
                                                        ),
                                                        _react2.default.createElement('input', { name: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
                                                )
                                        )
                                )
                        );
                }
        }]);

        return Filter;
}(_react.Component);

exports.default = Filter;

/***/ })

},[105]);