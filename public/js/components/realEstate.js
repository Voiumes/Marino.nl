webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

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
        return _this;
    }

    _createClass(Filter, [{
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
                        { name: 'neighbourhood', className: 'filters neighbourhood' },
                        _react2.default.createElement(
                            'option',
                            null,
                            'Neighbourhood'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            'Windermere'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            'Pine Hills'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            'Gotha'
                        )
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'housetype', className: 'filters housetype' },
                        _react2.default.createElement(
                            'option',
                            null,
                            'Housing'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            'Apartment'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            'House'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            'Condo'
                        )
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'bedrooms', className: 'filters bedrooms' },
                        _react2.default.createElement(
                            'option',
                            null,
                            'Rooms'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            '1'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            '2'
                        ),
                        _react2.default.createElement(
                            'option',
                            null,
                            '3'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters price' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Price'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'min-price', className: 'min-price', placeholder: '$0.00' }),
                        _react2.default.createElement('input', { type: 'text', name: 'max-price', className: 'max-price', placeholder: '$1,000,000' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters floor-space' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Floor Space'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'min-price', className: 'min-price', placeholder: '90 ft\xB2' }),
                        _react2.default.createElement('input', { type: 'text', name: 'max-price', className: 'max-price', placeholder: '150 ft\xB2' })
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Facilities'
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class-name': 'filters facilities' },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'Elevators '
                            ),
                            _react2.default.createElement('input', { name: 'facilities', value: 'elevator', type: 'checkbox' })
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'Storage '
                            ),
                            _react2.default.createElement('input', { name: 'facilities', value: 'storage', type: 'checkbox' })
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
                            _react2.default.createElement('input', { name: 'facilities', value: 'bath-tub', type: 'checkbox' })
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
                            _react2.default.createElement('input', { name: 'facilities', value: 'separate-shower', type: 'checkbox' })
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
                            _react2.default.createElement('input', { name: 'facilities', value: 'fireplace', type: 'checkbox' })
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            _react2.default.createElement('input', { name: 'facilities', value: 'swimming-pool', type: 'checkbox' })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(104);

var _reactRangeslider = __webpack_require__(57);

var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings(props, context) {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this, props, context));

        _this.handleChangeStart = function () {
            console.log('Change event started');
        };

        _this.handleChange = function (value) {
            _this.setState({
                value: value
            });
        };

        _this.handleChangeComplete = function () {
            console.log('Change event completed');
        };

        _this.state = {
            value: 10
        };
        return _this;
    }

    _createClass(Listings, [{
        key: 'render',
        value: function render() {
            var _React$createElement;

            var value = this.state.value;

            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(_reactRangeslider2.default, (_React$createElement = {
                    min: 0,
                    max: 1000
                }, _defineProperty(_React$createElement, 'min', 500), _defineProperty(_React$createElement, 'max', 1000), _defineProperty(_React$createElement, 'value', value), _defineProperty(_React$createElement, 'onChangeStart', this.handleChangeStart), _defineProperty(_React$createElement, 'onChange', this.handleChange), _defineProperty(_React$createElement, 'onChangeComplete', this.handleChangeComplete), _React$createElement)),
                _react2.default.createElement(
                    'section',
                    { id: 'search-area' },
                    _react2.default.createElement('input', { type: 'text', name: 'search' })
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'sort-by' },
                    _react2.default.createElement(
                        'div',
                        null,
                        '23 results found'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sort-options' },
                        _react2.default.createElement(
                            'select',
                            null,
                            _react2.default.createElement(
                                'option',
                                { value: 'date-des' },
                                'Date descending'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'date-asc' },
                                'Date ascending'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'price-des' },
                                'Price dscending'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'date-asc' },
                                'Price ascending'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'view' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'list' })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'th' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'listings-results' },
                    _react2.default.createElement(
                        'div',
                        { className: 'listing' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing-img' },
                            _react2.default.createElement('div', { className: 'user-img' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'user-details' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'user-name' },
                                    'Poggers Champh'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'post-date' },
                                    'Posted on'
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
                                        '254m\xB2'
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
                                        'unfurnished'
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
                                        '7 bedrooms'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'view-map' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#' },
                                            'view map'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bottom-info' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '$1350/mo'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'map-marker-alt' }),
                                ' Location: Orlando Fl'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'pagination' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'pagination-nums' },
                        _react2.default.createElement(
                            'li',
                            null,
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '1'
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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(101);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(100);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(102);

var _Listings2 = _interopRequireDefault(_Listings);

var _fontawesomeSvgCore = __webpack_require__(56);

var _freeSolidSvgIcons = __webpack_require__(99);

var _reactRangeslider = __webpack_require__(57);

var _reactRangeslider2 = _interopRequireDefault(_reactRangeslider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTh, _freeSolidSvgIcons.faChartArea, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faCouch, _freeSolidSvgIcons.faBed, _freeSolidSvgIcons.faMapMarkerAlt);

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Filter2.default, null),
                    _react2.default.createElement(_Listings2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[105]);