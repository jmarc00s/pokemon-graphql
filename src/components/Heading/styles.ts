import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typo.size.large};
  color: ${({ theme }) => theme.typo.colors.primary};
`;
