import styled from "styled-components";

export const TalkButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:after {
    content: "";
    background-color: #5d8aa8;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  &:hover:after {
    top: 0px;
    left: 0px;
  }
  @media (max-width: 768px) {
    height: 55px;
  }
`;

export const WppImg = styled.img`
  width: 30px;
  height: 30px;
  padding-left: 10px;
`;

// <!-- HTML !-->
// <button class="button-52" role="button">Button 52</button>

// /* CSS */
// .button-52 {
//   font-size: 16px;
//   font-weight: 200;
//   letter-spacing: 1px;
//   padding: 13px 20px 13px;
//   outline: 0;
//   border: 1px solid black;
//   cursor: pointer;
//   position: relative;
//   background-color: rgba(0, 0, 0, 0);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-52:after {
//   content: "";
//   background-color: #ffe54c;
//   width: 100%;
//   z-index: -1;
//   position: absolute;
//   height: 100%;
//   top: 7px;
//   left: 7px;
//   transition: 0.2s;
// }

// .button-52:hover:after {
//   top: 0px;
//   left: 0px;
// }

// @media (min-width: 768px) {
//   .button-52 {
//     padding: 13px 50px 13px;
//   }
// }