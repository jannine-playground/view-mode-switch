System.register(["react", "react-dom"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, react_dom_1;
    var Product, Main, Header, Container;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }],
        execute: function() {
            Product = (function () {
                function Product(id, name, prince, detail) {
                    this.id = id;
                    this.name = name;
                    this.prince = prince;
                    this.detail = detail;
                }
                return Product;
            }());
            Main = (function (_super) {
                __extends(Main, _super);
                function Main() {
                    _super.apply(this, arguments);
                }
                Main.prototype.createOptionItem = function (className, text) {
                    return (react_1.default.createElement("a", {className: className}, text));
                };
                Main.prototype.createOptions = function () {
                    return (react_1.default.createElement("div", {className: "cbp-vm-options"}, 
                        this.createOptionItem("cbp-vm-icon cbp-vm-grid cbp-vm-selected", "Gird View"), 
                        this.createOptionItem("cbp-vm-icon cbp-vm-list", "List View")));
                };
                Main.prototype.createItem = function (product) {
                    return (react_1.default.createElement("li", null, 
                        react_1.default.createElement("a", {className: "cbp-vm-image"}, 
                            react_1.default.createElement("img", {src: "images/" + product.id + ".png"}), 
                            " "), 
                        react_1.default.createElement("h3", {className: "cbp-vm-title"}, product.name), 
                        react_1.default.createElement("div", {className: "cbp-vm-price"}, 
                            "$", 
                            product.prince), 
                        react_1.default.createElement("div", {className: "cbp-vm-details"}, product.detail), 
                        react_1.default.createElement("a", {className: "cbp-vm-icon cbp-vm-add", href: "#"}, "Add to card")));
                };
                Main.prototype.render = function () {
                    return (react_1.default.createElement("div", {className: "main"}, 
                        react_1.default.createElement("div", {className: "cbp-vm-switcher cbp-vm-view-grid", id: "cbp-vm"}, 
                            this.createOptions(), 
                            react_1.default.createElement("ul", null, 
                                this.createItem(new Product(1, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(2, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(3, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(4, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(5, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(6, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(7, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(8, "Silver beet", 19.00, "Silver beet shallot wakame")), 
                                this.createItem(new Product(9, "Silver beet", 19.00, "Silver beet shallot wakame"))))
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
