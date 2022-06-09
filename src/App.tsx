import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Heading from './components/Heading';
import { GET_POKEMONS } from './graphql/querys/pokemons';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { data, loading } = useQuery(GET_POKEMONS);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Heading>Pokedex with GraphQL</Heading>
      <ul>
        {data?.pokemons.map((pokemon: { id: string; name: string }) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
