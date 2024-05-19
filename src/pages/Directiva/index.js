import Banner from 'comps/Banner';
import PageLayout from 'comps/Layout';

import './styles.css';

import Section from 'comps/Section';
import Contact from 'sections/Contact';

const Directiva = () => {
  return (
    <PageLayout>
      <Banner imageSrc={'directiva.jpeg'}  />
      <Section>
        <div className='text-container'>
          <h2 className='large-text'>Directiva 2024-2025</h2>
          <dl>
            <dt>Presidente</dt>
            <dd>Matias Ellis</dd>
            <dt>Vicepresidente</dt>
            <dd>Alvin Chimanoski</dd>
            <dt>Secretario Gral</dt>
            <dd>Matías Moizo</dd>
            <dt>Titulares</dt>
            <dd>Agustín Espárrago, Diego Montes de Oca, Gimena Méndez, Gonzalo Acosta, Octavio Garbarino, Román Cerisola</dd>
          </dl>
        </div>
      </Section>
      <Section title='Ponete en contacto' bgColor='#171742' fontColor='#fff' id='section_6'>
        <Contact hideLastRow />
      </Section>
    </PageLayout>
  );
};

export default Directiva;