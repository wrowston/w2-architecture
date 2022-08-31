import React from 'react';
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./NavBar.css";


type NavBarProps = {
    onHamburgerClick: () => void;
};

const navLinks = [
    { name: "W2 Architecture", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Services", to: "/services" },
    { name: "Workshops", to: "/workshops" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
];

export const NavBar = (props: NavBarProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const hamburgerMenuStyle: React.CSSProperties = {
        padding: "5px",
        display: "flex",
    };

    return (
        <div className="header" style={{ height: isMobile ? "44px" : undefined }}>
            {isMobile ? (
                <div className="hamburger-menu-image-container">
                    Hamburger Menu coming soon...
                    {/* <Button
                        style={hamburgerMenuStyle}
                        onClick={props.onHamburgerClick}
                        imgSrc={HamburgerSrc}
                        imgStyle={{ width: "100%" }}
                    /> */}
                </div>
            ) : (
                <div className="navLinks" style={{ width: isMobile ? "100%" : undefined }}>
                    {navLinks.map((link, i) => (
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => isActive ? "selected" : "not-selected"}
                            key={i}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};