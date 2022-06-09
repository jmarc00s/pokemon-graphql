import { screen } from '@testing-library/react';
import Heading from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Heading />', () => {
  it('should render <Heading /> component', () => {
    renderTheme(<Heading>Teste</Heading>);
  });

  it('should render <Heading /> with correct text', () => {
    renderTheme(<Heading>Teste</Heading>);
    const element = screen.getByRole('heading', { name: /Teste/i });
    expect(element).toBeInTheDocument();
  });
});
