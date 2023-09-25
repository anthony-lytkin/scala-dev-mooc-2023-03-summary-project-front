import React from "react";
import Layout from "../components/Layout/Layout";
import { isAuthorized } from "../core/constants/global";
import AuthorizationPage from "./AuthorizationPage";
import MeetingRooms from "../entities/MeetingRooms/MeetingRooms";

const MainPage: React.FC = () => {
  const departmentId = "45fdcb4c-b138-43b9-8e73-5d4a36443a69";

  if ({ isAuthorized }) {
    return (
      <Layout
        child={<MeetingRooms departmentId={departmentId}></MeetingRooms>}
      ></Layout>
    );
  }

  return <AuthorizationPage />;
};

export default MainPage;
