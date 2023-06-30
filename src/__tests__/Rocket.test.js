import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Rocket from '../components/Rocket';
import { reserveRocket, cancelReserveRocket } from '../redux/features/Rockets/RocketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Rocket component', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch reserveRocket action when Reserve Rocket button is clicked', () => {
    const rocket = {
      id: 1,
      name: 'Falcon 9',
      img: 'rocket.png',
      desc: 'Rocket description',
      reserved: false,
    };
    const { getByText } = render(
      <Rocket
        id={rocket.id}
        name={rocket.name}
        img={rocket.img}
        desc={rocket.desc}
        reserved={rocket.reserved}
      />,
    );
    const reserveButton = getByText('Reserve Rocket');

    fireEvent.click(reserveButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(reserveRocket({ id: rocket.id }));
  });

  it('should dispatch cancelReserveRocket action when Cancel Reservation button is clicked', () => {
    const rocket = {
      id: 1,
      name: 'Falcon 9',
      img: 'rocket.png',
      desc: 'Rocket description',
      reserved: true,
    };
    const { getByText } = render(
      <Rocket
        id={rocket.id}
        name={rocket.name}
        img={rocket.img}
        desc={rocket.desc}
        reserved={rocket.reserved}
      />,
    );
    const cancelButton = getByText('Cancel Reservation');

    fireEvent.click(cancelButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(cancelReserveRocket({ id: rocket.id }));
  });
});
