import React, { useContext } from 'react'
import {
    Link
  } from "react-router-dom";
import { UserContext } from '../App';

const Navbar = () => {
    const {state, dispatch} = useContext(UserContext)
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/images"> Images </Link></li>
                <li> <Link to="/videos"> Videos </Link></li>
                <li> <Link to="/addImages"> Add Images </Link></li>
                <li> <Link to="/addVideos"> Add Videos </Link></li>
                <li> <Link to="/logout">Logout</Link></li>
                </>
            )
        } else {
            return (
                <>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/images"> Images </Link></li>
                <li> <Link to="/videos"> Videos </Link></li>
                <li> <Link to="/admin"> Admin </Link></li>
                </>
            )
        }
    }
    return (
            <nav>
            <ul>
                <RenderMenu/>
            </ul>
            </nav>
    )
}

export default Navbar
