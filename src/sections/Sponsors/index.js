import sponsor from './sponsors';

import './styles.css';

const Sponsors = () => {
  const renderSponsor = (sponsorData) => {
    return (
      <article key={sponsorData.name} className='sponsorItem'>
        <a href={sponsorData.url} target="blank">
          <img
            src={require(`images/sponsors/${sponsorData.image}`).default}
            alt={sponsorData.name}
          />
        </a>
      </article>
    )
  };

  return (
    <>
      <section className="sponsorsHolder">
        <section className="sponsorsFull">
          {sponsor.full.map(s => renderSponsor(s))}
        </section>
        <section className="sponsorsStandard">
          {sponsor.standard.map(s => renderSponsor(s))}
        </section>
        <section className="sponsorsBasic">
          {sponsor.basic.map(s => renderSponsor(s))}
        </section>
      </section>
    </>
  )
};

export default Sponsors;