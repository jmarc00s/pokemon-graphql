import styled from 'styled-components';

export const Title = styled.p`
  @media screen and (max-width: 600px) {
    padding: 1rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const QuantityBadge = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? 'aquamarine' : 'azure')};
  border: none;
  outline: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 0 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover,
  &:active {
    background-color: aquamarine;
  }
`;
