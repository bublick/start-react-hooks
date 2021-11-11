import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCB = useRef(0);
    const withCB = useRef(0);

    // without callback
    const validateWithoutCB = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCB.current++;
    }, [validateWithoutCB]);

    // with callback
    const validateWithCB = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCB.current++;
    }, [validateWithCB]);

    useEffect(() => {
        validateWithoutCB(data);
        validateWithCB(data);
    }, [data]);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callback: {withoutCB.current}</p>
            <p>Render with callback: {withCB.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
