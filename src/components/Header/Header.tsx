import './Header.css';
import React from "react";
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {
    ReactComponent as Pokeball
} from '../../assets/icons/pokeball-pokemon-svgrepo-com.svg';

export const Header: React.FC= () => {
    return (
        <>
        <div className="header">
            <Logo className="logo"/>
            <Pokeball className="logo"/>
        </div>
        </>
    );
};

