import { Component } from "react"
import React from 'react'

class Header extends Component{
render(){
    return(
        <header id="navbar" class="mb-3">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-center" href="#">trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="#">podcast</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="#">moods and genres</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="#">new releases</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="#">discover</a>
                        </li>
                    </ul>

                </header>

    )
}
}
export default Header