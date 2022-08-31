import React from 'react';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import '../../App.css';
import './Home.css'


type HomeProps = {};

export const Home = (props: HomeProps) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            <div className="home-container" style={{ marginTop: isMobile ? "44px" : undefined}}> 
            HOME
            </div>
        </div>
    )
} 