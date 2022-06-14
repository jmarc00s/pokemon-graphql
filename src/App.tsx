import { Outlet } from '@tanstack/react-location';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
