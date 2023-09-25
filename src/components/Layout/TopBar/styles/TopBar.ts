import { styled } from "styled-components";
import { colors, sizes } from "../../../../assets/styles/theme";

export const TopBarInner = styled.div`
  height: 50px;
  font-size: large;
  background-color: ${colors.lightGrey};
  box-shadow: 2px 2px 2px ${colors.lightGrey};
`;

export const TopBarApplicationName = styled.div`
  padding: 10px 30px 10px 20px;
  font-size: ${sizes.XL};
  display: inline-block;
  font-weight: bold;
`;
