import LazyOpacity from 'comps/LazyOpacity';
import ActivityCard from 'comps/ActivityCard';

import activities from './activities';

import './styles.css';

const Activities = () => {
  const renderActivity = (actData) => {
    return (
      <LazyOpacity>
        <article key={actData.title}>
          <ActivityCard
            {...actData}
            key={actData.title}
          >
          </ActivityCard>
        </article>
      </LazyOpacity>
    )
  };

  return (
    <>
      <section className="activitiesHolder">
        <section className="activities">
          {activities.map(e => renderActivity(e))}
        </section>
      </section>
    </>
  )
};

export default Activities;