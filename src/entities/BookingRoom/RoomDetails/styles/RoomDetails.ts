import { styled } from "styled-components";
import { colors, sizes } from "../../../../assets/styles/theme";

export const RoomDetailsInner = styled.div`
  height: 100%;
  background: ${colors.lightGrey};
  padding: 10px;
  border-radius: 20px;
`;

export const RoomDetailsName = styled.div`
  padding: 10px 20px;
  font-size: ${sizes.XL};
`;

export const RoomDetailsOther = styled.div`
  padding: 5px 20px;
`;
