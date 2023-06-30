import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Missions from '../components/missions/Missions';
import { updateMission } from '../redux/missionSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('axios');

describe('Missions component', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mission = {
    id: 1,
    missionName: 'Mission A',
    description: 'Mission A description',
    reserved: false,
  };

  const mockResponse = {
    data: [
      {
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        id: 1,
        name: 'Rocket 1',
        reserved: true,
      },
      {
        flickr_images: ['https://imgur.com/azYafd8.jpg'],
        id: 2,
        name: 'Rocket 2',
        reserved: false,
      },
    ],
  };

  it('renders mission details correctly', async () => {
    axios.get.mockResolvedValueOnce(mockResponse);

    const { getByText } = render(<Missions mission={mission} />);
    const missionName = getByText('Mission A');
    const description = getByText('Mission A description');
    const notMemberStatus = getByText('NOT A MEMBER');
    const joinButton = getByText('JOIN MISSION');

    expect(missionName).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(notMemberStatus).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });

  it('dispatches updateMission action when join button is clicked', async () => {
    axios.get.mockResolvedValueOnce(mockResponse);

    const { getByText } = render(<Missions mission={mission} />);
    const joinButton = getByText('JOIN MISSION');

    fireEvent.click(joinButton);

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledTimes(1);
      expect(dispatchMock).toHaveBeenCalledWith(updateMission(1));
    });
  });

  it('dispatches updateMission action when leave button is clicked', async () => {
    const reservedMission = {
      id: 2,
      missionName: 'Mission B',
      description: 'Mission B description',
      reserved: true,
    };

    axios.get.mockResolvedValueOnce(mockResponse);

    const { getByText } = render(<Missions mission={reservedMission} />);
    const leaveButton = getByText('LEAVE MISSION');

    fireEvent.click(leaveButton);

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledTimes(1);
      expect(dispatchMock).toHaveBeenCalledWith(updateMission(2));
    });
  });
});
