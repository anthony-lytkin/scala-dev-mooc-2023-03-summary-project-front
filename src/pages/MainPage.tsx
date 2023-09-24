import React from "react";
import Layout from "../components/Layout/Layout";
import { isAuthorized } from "../core/constants/global";
import AuthorizationPage from "./AuthorizationPage";

const MainPage: React.FC = () => {
    if ({isAuthorized}) { return <Layout /> } else return <AuthorizationPage />
}

export default MainPage;
