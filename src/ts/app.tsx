/// <reference path="../../typings/browser.d.ts"/>

import React from "react"
import ReactDOM from "react-dom";

class Product {
    constructor(public id, public name, public prince, public detail) {
    }
}

class Main extends React.Component<any, any> {
    createOptionItem(className, text) {
        return (
                <a className={className}>{text}</a>
        );
    }
    createOptions() {
        return (
            <div className="cbp-vm-options">
                {this.createOptionItem("cbp-vm-icon cbp-vm-grid cbp-vm-selected", "Gird View")}
                {this.createOptionItem("cbp-vm-icon cbp-vm-list", "List View")}
            </div>
        );
    }

    createItem(product: Product) {
        return (
            <li>
                <a className="cbp-vm-image">
                    <img src={`images/${product.id}.png`}/> </a>
                <h3 className="cbp-vm-title">{product.name}</h3>
                <div className="cbp-vm-price">${product.prince}</div>
                <div className="cbp-vm-details">{product.detail}</div>
                <a className="cbp-vm-icon cbp-vm-add" href="#">Add to card</a>
            </li>
        );
    }

    render() {
        return (
            <div className="main">
                <div className="cbp-vm-switcher cbp-vm-view-grid" id="cbp-vm">
                    {this.createOptions()}
                    <ul>
                        {this.createItem( new Product(1, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(2, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(3, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(4, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(5, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(6, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(7, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(8, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                        {this.createItem( new Product(9, "Silver beet", 19.00, "Silver beet shallot wakame"))}
                    </ul>
                </div>
            </div>
            );
        }
    }

    class Header extends React.Component<any, any> {
        createLink(className, text) {
            return(
                <a className={className} href="#">
                    <span> {text} </span>
                 </a>
            );
        }
        render() {
                return (
                    <header className="clearfix">
                        <span>Blueprint
                            <span className="bp-icon bp-icon-about"> </span>
                        </span>
                        <h1>View Mode Switch</h1>
                    <nav>
                        {this.createLink("bp-icon bp-icon-prev", "Previous Blueprint")}
                        {this.createLink("bp-icon bp-icon-next", "Next Blueprint")}
                        {this.createLink("bp-icon bp-icon-drop", "back to the Corops artivle")}
                        {this.createLink("bp-icon bp-icon-archive", "Go to the archive")}
                    </nav>
                </header>
            );
    }
}

class Container extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <Header/>
                <Main/>
            </div>
        );
    }
}

ReactDOM.render(<Container/>, document.getElementById("react"));

