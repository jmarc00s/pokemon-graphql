import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 8px;

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }
`;
