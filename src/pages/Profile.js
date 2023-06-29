import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMissions } from '../redux/missionSlice';

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const { missions } = useSelector((state) => state.missions);

  if (!missions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="dimension">
        <h2>My Missions</h2>
        {missions.map((mission) => (
          <p key={mission.id} className="profile-rockets">
            {mission.missionName}
          </p>
        ))}
      </div>
    </div>
  );
}
