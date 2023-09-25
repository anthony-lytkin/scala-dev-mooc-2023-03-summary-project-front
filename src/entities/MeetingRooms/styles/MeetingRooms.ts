import { styled } from "styled-components";
import { colors, sizes } from "../../../assets/styles/theme";

export const MeetingRoomInner = styled.div`
  padding: 20px 100px;
`;

export const RoomBoardInner = styled.div`
  padding: 20px;
  background-color: ${colors.lightGrey};
  border-radius: 10px;
  display: inline-block;
  width: 250px;
  height: 100px;
  cursor: pointer;
  margin-right: 20px;
  text-decoration: none;
  color: ${colors.black};

  &:hover {
    background-color: ${colors.grey};
  }
`;

export const RoomBoardName = styled.div`
  padding: 0 10px 5px 10px;
  font-size: ${sizes.XL}
`

export const RoomBoardOtherInfo = styled.div`
  padding: 2px 10px;
`
