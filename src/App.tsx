import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './graphql/pokemons';

function App() {
  const { data, loading } = useQuery(GET_POKEMONS);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data?.pokemons.map((pokemon: { id: string; name: string }) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default App;
