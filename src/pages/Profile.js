import { useSelector } from 'react-redux';
import './Profile.css';

export default function Profile() {
  const { missions } = useSelector((state) => state.missions);

  if (!missions) {
    return <div>Loading...</div>;
  }
  const filter = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profile">
      <div className="dimension">
        <h2>My Missions</h2>
        {filter.map((filtered) => (
          <li className="mission-display" key={filtered.id}>
            {filtered.missionName}
          </li>
        ))}

      </div>
    </div>
  );
}
