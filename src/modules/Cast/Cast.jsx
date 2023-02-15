import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import defaultImg from '../../defaultImg/defaultImg.jpg';

import { ProfileImg, CastsList, Item, Description } from './Cast.styled';

export default function Cast() {
  const { id } = useParams();
//   const id = movieId;

  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchCredits() {
      try {
        const results = await getMovieCredits(id);
        setCasts(results.cast);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchCredits();
  }, [id]);

  return (
    <CastsList>
      {casts &&
        casts.map(({ profile_path, name, id, original_name, character }) => {
          const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
          const profilePath = profile_path
            ? IMG_PATH + profile_path
            : defaultImg;

          return (
            <Item key={id}>
              <ProfileImg src={profilePath} alt={name} />
              <Description> {name || original_name}</Description>
              <Description>Character: {character}</Description>
            </Item>
          );
        })}
    </CastsList>
  );
}
