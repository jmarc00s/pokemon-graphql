import DetailsPage from '../../pages/Details';
import HomePage from '../../pages/Home';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/details/:pokemonId',
    element: <DetailsPage />,
  },
];
