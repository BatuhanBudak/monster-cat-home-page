import React from 'react'
import useScreenSize from '../hooks/useScreenSize'


export default function Nav({ }) {
    const windowWidth = useScreenSize();


    if (windowWidth < 800) {
        return (
            <nav>
                <ul className='navigation' id='navigation'>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/what-we-do" className='nav-link'>MUSIC
                        </a>

                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/work className='nav-link'">ARTISTS
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/who-we-are" className='nav-link'>ABOUT
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/being-here" className='nav-link'>NEWS
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/careers" className='nav-link'>EVENTS
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>PROGRAMMING
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>GOLD
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>PARTNERS
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>PRESS
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>PLAYER
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>SHOP
                        </a>
                    </li>
                    <li className="nav__item" >
                        <a href="https://www.instrument.com/contact" className='nav-link'>LOST CIVILIZATION
                        </a>
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul className='navigation' id='navigation'>
                    <li className="nav__item" ><a href="https://www.instrument.com/what-we-do" className='nav-link'>WHAT WE DO</a> </li>
                    <li className="nav__item" ><a href="https://www.instrument.com/work className='nav-link'">WORK</a> </li>
                    <li className="nav__item" ><a href="https://www.instrument.com/who-we-are" className='nav-link'>WHO WE ARE</a> </li>
                    <li className="nav__item" ><a href="https://www.instrument.com/being-here" className='nav-link'>BEING HERE</a> </li>
                    <li className="nav__item" ><a href="https://www.instrument.com/careers" className='nav-link'>CAREERS</a> </li>

                </ul>
            </nav>
        )
    }

}
