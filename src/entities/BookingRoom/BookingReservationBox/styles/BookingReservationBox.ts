import { styled } from "styled-components";
import { colors, sizes } from "../../../../assets/styles/theme";

export const BookingReservationBoxInner = styled.div`
  padding: 5px 0;
  margin-right: 10px;
`;

export const BookingReservationBoxContent = styled.div<{isBooked: boolean, isSelected: boolean}>`
  cursor: pointer;
  padding: 10px;
  background: ${props => props.isSelected ? colors.green : colors.lightGrey};
  border-radius: 5px;
  display: inline-block;
  font-size: ${sizes.S};
  opasity: ${props => props.isBooked ? '0.2' : '1'};
`;

export const BookingReservationBoxButton = styled.div<{forBook: boolean}>`
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    background: ${props => props.forBook ? colors.green : colors.red};
    display: inline-block;
    font-size: ${sizes.S};
    cursor: pointer;
`
