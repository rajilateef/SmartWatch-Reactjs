import React from 'react';
import classes from './Topbar.module.css';
const Topbar = () =>{
    return(
        <header >
            <nav className={classes.Topbar}>
                <img src="https://i.dlpng.com/static/png/197684_preview.png" className="App-logo" alt="Amazon logo" />
            </nav>

        </header>

    );
}
export default Topbar;