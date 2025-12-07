import React from "react"
import Header_Style from './style/Header_Style.css';
import logo from './../browser-extensions-manager-ui-main/assets/images/logo_min.png';
import icon_sun from './../browser-extensions-manager-ui-main/assets/images/icon-sun.svg';
import icon_moon from './../browser-extensions-manager-ui-main/assets/images/icon-moon.svg';
import logo_dark from './../browser-extensions-manager-ui-main/assets/images/logo.svg';
import { useTheme } from "../Context/Create_Context/Context";


export const Header = () => {
    const { isTheme, toggleTheme } = useTheme();

    return(
        <div className="header mt-5 mx-5 p-4 d-flex align-items-center justify-content-between rounded-4">
       <img className="float-start " 
       src={isTheme ? logo_dark :logo} 
       alt="logo" />

       <img className="icon_sun float-end" 
        onClick={toggleTheme} 
        src={isTheme ? icon_moon: icon_sun } 
        alt="logo" />
        </div>
);
   
}
