import styled from "styled-components";

export const SecondaryInfo = styled.ul`
 display: grid;
grid-template-rows: repeat(2, 1fr);
/* grid-auto-rows: 5px; */
`;

export const SecondaryInfoTitle = styled.p`
  font-weight: bold;
  color: #25468e;
  margin-bottom: 15px;
`;

export const BackButton = styled.button`
  background-color: #3f51b5;
  text-decoration: none;
  color: fafafa;
  display: inline-block;
  padding: 10px 15px;
  /* border: solid azure 1px; */
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 15px;
  width:100px;


  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #fff;
  }
`;