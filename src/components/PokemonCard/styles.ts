import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.7rem;
  box-shadow: ${theme.shadow.sm};
  min-width: 10rem;
  width: 35rem;
  color: ${theme.typo.colors.primary};
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.02);
  }
`;

export const PokemonName = styled.p`
  font-size: ${theme.typo.size.large};
  text-align: center;
  padding: 0.5rem;
  text-decoration: none;
`;

export const PokemonImage = styled.img`
  max-width: 80%;
  height: 25rem;
`;
