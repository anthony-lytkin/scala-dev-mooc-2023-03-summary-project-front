import React from "react";
import { LayoutContent, LayoutInner } from "./styles/Layout";
import TopBar from "./TopBar/TopBar";
import { isAuthorized } from "../../core/constants/global";

const Layout: React.FC = () => {
  return (
    <LayoutInner>
      <TopBar />
      <LayoutContent>

      </LayoutContent>
    </LayoutInner>
  )
};

export default React.memo(Layout);
