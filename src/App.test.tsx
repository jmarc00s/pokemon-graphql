import { ReactLocation, Router } from '@tanstack/react-location';
import App from './App';
import { GQLMockProvider } from './config/graphql/mock-provider';
import { LocationProvider } from './config/routes/mock-location-provider';
import { renderTheme } from './styles/renderTheme';

describe('<App/>', () => {
  it('should render App component', () => {
    renderTheme(
      <LocationProvider>
        <App />
      </LocationProvider>
    );
  });
});
