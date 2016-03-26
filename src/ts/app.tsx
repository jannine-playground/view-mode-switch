/// <reference path="../../typings/browser.d.ts"/>

import React from "react"
import ReactDOM from "react-dom";
import $ from "jquery";
import * as Api from "./api";
import update from "react-addons-update";

class Single {
    id: number;
    name: string;
    view: number;
    detail: string;
    image: string;
}

class MyState {
    products: Single[] = [];
}

class Main extends React.Component<any, MyState> {

    constructor() {
        super();
        this.state = { products: [] };
    }

    componentDidMount() {
        console.log("|| componentDidMount");
        console.log(this.state);

        let request = $.get(Api.getServiceUri(), (rs:Api.Track[]) => {
            console.log(rs);
            let products =
                rs.map( t => {
                    var product = new Single();
                    product.id = t.id;
                    product.name = new Date(t.created_at + "").getFullYear().toString();
                    product.view = t.playback_count;
                    product.detail = t.title;
                    product.image = t.artwork_url;
                    return product;
                });
            this.setState({ products: products });
            console.log(this.state);
        });
    }

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

    createItem(product: Single) {
        return (
            <li key={product.id}>
                <a className="cbp-vm-image">
                    <img src={product.image}/> </a>
                <h3 className="cbp-vm-title">{product.name}</h3>
                <div className="cbp-vm-price">{product.view}</div>
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
                        {this.state.products.map(this.createItem)}
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

