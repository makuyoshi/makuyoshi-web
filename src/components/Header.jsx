import React from "react";
import {Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {
    return (
        <>
            <header className="">
                <nav className="flex flex-row justify-center pt-2 p-1 xl:p-4 w-full text-lg xl:text-2xl space-x-3 xl:space-x-32 fixed">
                    <div className="flex flex-row space-x-2 xl:space-x-8 outline outline-1 rounded-2xl p-2 bg-bg-eerie shadow-2xl">
                        <Link href="/#hello" activeClass="active" to="hello" spy={true} smooth={true} offset={-300} duration={500}>hello</Link>
                        <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>about</Link>
                        <Link href="/#projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>projects</Link>
                        <Link href="/#contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>contact</Link>
                    </div>
                    <Link href="#" className="outline outline-1 rounded-2xl p-2 bg-bg-eerie shadow-2xl">
                        blog<i className="bi bi-arrow-right-short"></i>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header;