import styled from 'styled-components';

export const ProfileImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  width: 140px;
  height: 200px;
  margin-bottom: 10px;
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;

export const CastsList = styled.ul`
  padding: 15px 35px;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin-bottom: 32px;
  margin-right: 15px;
  border-radius: 5px;
`;

export const Description = styled.p`
  font-weight: bold;
  font-size: 10px;
  max-width: 140px;
  color: #25468e;
`;
