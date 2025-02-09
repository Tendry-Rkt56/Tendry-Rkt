import { useEffect, useRef, useState } from "react"

export function NavBar () {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="header">
            <a href="#home" className="logo">Tendry <span>Rkt</span></a>

            <a className="github" href="https://github.com/Tendry-Rkt56"><i className='bx bxl-github'></i></a>

            <i onClick={toggleNav} className={`bx bx-menu ${isOpen ? 'bx-x' : ''}`} id="menu-icon"></i>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <a className="links" href="#home">Accueil</a>
                <a className="links" href="#about">About</a>
                <a className="links" href="#services">Services</a>
                <a className="links" href="#competences">Compétences</a>
                <a className="links" href="#projets">Projets</a>
                <a className="links" href="#contact">Contact</a>
                <a className="links" href="mailto:tendryzephyrin@gmail.com">Mail</a>
            </nav>
        </header>
    )
}