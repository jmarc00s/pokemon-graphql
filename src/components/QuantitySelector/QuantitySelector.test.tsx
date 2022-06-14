import { fireEvent, screen } from '@testing-library/react';
import QuantitySelector from '.';
import { renderTheme } from '../../styles/renderTheme';
import { vi } from 'vitest';

const QUANTITIES_MOCK = [1, 10, 100, 1000];

describe('<QuantitySelector />', () => {
  const mockedFn = vi.fn();

  beforeEach(() => {
    renderTheme(
      <QuantitySelector
        quantities={QUANTITIES_MOCK}
        onQuantityClick={mockedFn}
      />
    );
  });

  it('should render quantity selector component', () => {
    const element = screen.getByRole('button', {
      name: QUANTITIES_MOCK[0].toString(),
    });
    expect(element).toBeInTheDocument();
  });

  it('should render exact quantity of buttons', () => {
    const element = screen.getAllByRole('button');
    expect(element.length).toBe(QUANTITIES_MOCK.length);
  });

  it('should trigger onQuantityClick when quantity button is clicked', () => {
    const element = screen.getByRole('button', {
      name: QUANTITIES_MOCK[0].toString(),
    });
    fireEvent.click(element);
    expect(mockedFn).toHaveBeenCalledWith(QUANTITIES_MOCK[0]);
  });
});
