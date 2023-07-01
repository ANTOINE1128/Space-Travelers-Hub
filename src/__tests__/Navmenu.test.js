import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navmenu from '../components/Navmenu';

test('renders the navbar component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navmenu />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
