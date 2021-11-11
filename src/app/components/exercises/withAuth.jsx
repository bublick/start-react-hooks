import React, { useState } from "react";
import PropTypes from "prop-types";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const handleAuth = () => {
        localStorage.setItem("user", "true");
        setIsAuth((prevState) => !prevState);
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth((prevState) => !prevState);
    };
    return (
        <Component
            {...props}
            isAuth={isAuth}
            onLogIn={handleAuth}
            onLogOut={handleLogOut}
        />
    );
};

withAuth.propTypes = { Component: PropTypes.Component };
export default withAuth;
