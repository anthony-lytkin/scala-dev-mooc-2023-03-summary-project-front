import React from "react";
import { LayoutContent, LayoutInner } from "./styles/Layout";
import TopBar from "./TopBar/TopBar";
import { isAuthorized } from "../../core/constants/global";

interface Props {
  child?: JSX.Element;
}

const Layout: React.FC<Props> = ({ child }) => {
  return (
    <LayoutInner>
      <TopBar />
      <LayoutContent>{child}</LayoutContent>
    </LayoutInner>
  );
};

export default React.memo(Layout);
