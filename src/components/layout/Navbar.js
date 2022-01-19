import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom'

const style = {
    width: "1000%",
    margin: "5% 0 1%",
    padding: "0.5em 3em",
    textDecoration: "none",
    color: "tan",
    backgroundColor: "beige",
    fontWeight: "bold",
    verticalAlign: "center"
}

export const Navbar = () => {
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/about"
            >About</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/services"
            >Services</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/commissions"
            >Commissions</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/contact"
            >Contact</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/gallery"
            >Gallery</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "darkgreen"
            }}
                exact
                style={style}
                to="/shop"
            >Shop</NavLink>
        </div>
    )
}
