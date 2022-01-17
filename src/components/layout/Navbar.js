import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "tan"
}

export const Navbar = () => {
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/about"
            >About</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/services"
            >Services</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/commissions"
            >Commissions</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/contact"
            >Contact</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/gallery"
            >Gallery</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "green"
            }}
                exact
                style={style}
                to="/shop"
            >Shop</NavLink>
        </div>
    )
}
