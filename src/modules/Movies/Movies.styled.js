import styled from "styled-components";

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
`;

export const MovieItem = styled.li`
text-decoration:none;
list-style:none;
`

export const PosterTitle = styled.p`
  font-weight: bold;
  color: #25468e;
  margin-bottom: 15px;
  text-align:center;
`;

export const FilmPoster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  width: 280px;
  height: 400px;
  margin-left: 35px;
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;
export const InfoWrap = styled.div`
  margin-left: 35px;
  width: 500px;
`;

export const CardWrap = styled.div`
  display: flex;
  margin-top: 35px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: #25468e;
  margin-bottom: 20px;
  text-align:center;
`;