import App from './App';
import { GQLMockProvider } from './config/graphql/mock-provider';
import { renderTheme } from './styles/renderTheme';

describe('<App/>', () => {
  it('should render App component', () => {
    renderTheme(
      <GQLMockProvider>
        <App />
      </GQLMockProvider>
    );
  });
});
