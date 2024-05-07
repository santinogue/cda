import staff from './staff';
import StaffCard from 'comps/StaffCard';

import './styles.css';

const Staff = () => {
  const renderActivity = (staffData) => {
    return (
      <article key={staffData.name}>
        <StaffCard
          {...staffData}
          key={staffData.name}
        />
      </article>
    )
  };

  return (
    <>
      <section className="eventsHolder">
        <section className="events">
          {staff.map(s => renderActivity(s))}
        </section>
      </section>
    </>
  )
};

export default Staff;