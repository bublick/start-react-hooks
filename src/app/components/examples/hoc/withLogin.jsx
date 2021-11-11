import React from "react";
import Component from "./someComponent";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (comonent) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {" "}
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
