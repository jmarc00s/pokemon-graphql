import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Heading from './components/Heading';
import PokemonCard from './components/PokemonCard';
import PokemonGrid from './components/PokemonGrid';
import { GET_POKEMONS } from './graphql/querys/pokemons';
import { Pokemon } from './models/pokemon';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
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
      <PokemonGrid pokemons={data.pokemons} />
    </Container>
  );
}

export default App;
