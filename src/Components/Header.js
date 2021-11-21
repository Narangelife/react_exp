import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
    return (
        <AppBar position={"static"} style={{backgroundColor: "#323232"}}>
            <Toolbar>
                <b>Narange</b>
            </Toolbar>
        </AppBar>
    )
}

export default Header;