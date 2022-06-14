import { screen } from '@testing-library/react';
import PokemonTable, { PokemonTableData } from '.';
import { renderTheme } from '../../styles/renderTheme';

const TABLE_MOCK: PokemonTableData = {
  classification: 'seed',
  height: {
    minimum: '1kg',
    maximum: '10kg',
  },
  weight: {
    minimum: '1m',
    maximum: '10m',
  },
};

describe('<PokemonTable />', () => {
  beforeEach(() => {
    renderTheme(<PokemonTable data={TABLE_MOCK} />);
  });

  it('should render PokemonTable component', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
