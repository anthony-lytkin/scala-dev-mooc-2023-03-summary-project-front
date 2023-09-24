import React from "react";
import { isAuthorized } from "../../core/constants/global";
import MainPage from "../../pages/MainPage";
import { AuthorizationInner } from "./styles/Authorization";

const Authorization: React.FC = () => {
    if ({isAuthorized}) {
        return <MainPage />
    } else return <AuthorizationInner />

};

export default Authorization;
