import { screen } from '@testing-library/react';
import Heading from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Heading />', () => {
  it('should render <Heading /> component', () => {
    renderTheme(<Heading>Teste</Heading>);
  });

  it('should render <Heading /> with correct text', () => {
    renderTheme(<Heading>Teste</Heading>);
    screen.getAllByRole('heading', { name: /Teste/i });
  });
});
