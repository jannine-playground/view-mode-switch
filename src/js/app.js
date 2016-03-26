System.register(["react", "react-dom", "jquery", "./api"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, react_dom_1, jquery_1, Api;
    var Single, MyState, Main, Header, Container;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (Api_1) {
                Api = Api_1;
            }],
        execute: function() {
            Single = (function () {
                function Single() {
                }
                return Single;
            }());
            MyState = (function () {
                function MyState() {
                    this.products = [];
                }
                return MyState;
            }());
            Main = (function (_super) {
                __extends(Main, _super);
                function Main() {
                    _super.call(this);
                    this.state = { products: [] };
                }
                Main.prototype.componentDidMount = function () {
                    var _this = this;
                    console.log("|| componentDidMount");
                    console.log(this.state);
                    var request = jquery_1.default.get(Api.getServiceUri(), function (rs) {
                        console.log(rs);
                        var products = rs.map(function (t) {
                            var product = new Single();
                            product.id = t.id;
                            product.name = new Date(t.created_at + "").getFullYear().toString();
                            product.view = t.playback_count;
                            product.detail = t.title;
                            product.image = t.artwork_url;
                            return product;
                        });
                        _this.setState({ products: products });
                        console.log(_this.state);
                    });
                };
                Main.prototype.createOptionItem = function (className, text) {
                    return (react_1.default.createElement("a", {className: className}, text));
                };
                Main.prototype.createOptions = function () {
                    return (react_1.default.createElement("div", {className: "cbp-vm-options"}, 
                        this.createOptionItem("cbp-vm-icon cbp-vm-grid cbp-vm-selected", "Gird View"), 
                        this.createOptionItem("cbp-vm-icon cbp-vm-list", "List View")));
                };
                Main.prototype.createItem = function (product) {
                    return (react_1.default.createElement("li", {key: product.id}, 
                        react_1.default.createElement("a", {className: "cbp-vm-image"}, 
                            react_1.default.createElement("img", {src: product.image}), 
                            " "), 
                        react_1.default.createElement("h3", {className: "cbp-vm-title"}, product.name), 
                        react_1.default.createElement("div", {className: "cbp-vm-price"}, product.view), 
                        react_1.default.createElement("div", {className: "cbp-vm-details"}, product.detail), 
                        react_1.default.createElement("a", {className: "cbp-vm-icon cbp-vm-add", href: "#"}, "Add to card")));
                };
                Main.prototype.render = function () {
                    return (react_1.default.createElement("div", {className: "main"}, 
                        react_1.default.createElement("div", {className: "cbp-vm-switcher cbp-vm-view-grid", id: "cbp-vm"}, 
                            this.createOptions(), 
                            react_1.default.createElement("ul", null, this.state.products.map(this.createItem)))
                    ));
                };
                return Main;
            }(react_1.default.Component));
            Header = (function (_super) {
                __extends(Header, _super);
                function Header() {
                    _super.apply(this, arguments);
                }
                Header.prototype.createLink = function (className, text) {
                    return (react_1.default.createElement("a", {className: className, href: "#"}, 
                        react_1.default.createElement("span", null, 
                            " ", 
                            text, 
                            " ")
                    ));
                };
                Header.prototype.render = function () {
                    return (react_1.default.createElement("header", {className: "clearfix"}, 
                        react_1.default.createElement("span", null, 
                            "Blueprint", 
                            react_1.default.createElement("span", {className: "bp-icon bp-icon-about"}, " ")), 
                        react_1.default.createElement("h1", null, "View Mode Switch"), 
                        react_1.default.createElement("nav", null, 
                            this.createLink("bp-icon bp-icon-prev", "Previous Blueprint"), 
                            this.createLink("bp-icon bp-icon-next", "Next Blueprint"), 
                            this.createLink("bp-icon bp-icon-drop", "back to the Corops artivle"), 
                            this.createLink("bp-icon bp-icon-archive", "Go to the archive"))));
                };
                return Header;
            }(react_1.default.Component));
            Container = (function (_super) {
                __extends(Container, _super);
                function Container() {
                    _super.apply(this, arguments);
                }
                Container.prototype.render = function () {
                    return (react_1.default.createElement("div", {className: "container"}, 
                        react_1.default.createElement(Header, null), 
                        react_1.default.createElement(Main, null)));
                };
                return Container;
            }(react_1.default.Component));
            react_dom_1.default.render(react_1.default.createElement(Container, null), document.getElementById("react"));
        }
    }
});
