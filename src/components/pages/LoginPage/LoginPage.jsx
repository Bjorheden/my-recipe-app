import React from "react";
import "./LoginPage.css";
import InputField from "../../atoms/InputField/InputField";
import ButtonHome from "../../atoms/ButtonHome/ButtonHome";

const LoginPage = () => {

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Welcome!</h2>
                <InputField margin="20px" label="Username:"></InputField>
                <InputField label="Password:"></InputField>
                <ButtonHome></ButtonHome>
            </div>
        </div>
    );
};

export default LoginPage;
