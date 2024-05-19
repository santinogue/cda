import PageLayout from 'comps/Layout';

import './styles.css';

import Section from 'comps/Section';
import Contact from 'sections/Contact';

const Socios = () => {
  return (
    <PageLayout>
      
      <Section>
        <h1 className='header-text'>Socios</h1>
        <div className='text-container'>
         <h2 className='large-text'>Beneficios del Socio</h2>
          <dl>
            <dt>Entradas plantel principal</dt>
            <dd>50% OFF en el precio de la entrada general.</dd>
            <dt><a href='https://www.puntosano.com.uy/' target='blank'>Punto Sano</a></dt>
            <dd>15% OFF en pedidos por la web. Pedir código promocional en secretaría o por whatsapp.</dd>
            <dt><a href='https://www.instagram.com/ecojuice.uy/' target='blank'>Eco juice</a></dt>
            <dd>15% OFF en planes mensuales.</dd>
            <dt><a href='https://www.instagram.com/bracketspradouy/' target='blank'>Consultorio odontológico Karina Rebollo</a></dt>
            <dd>30% OFF en todos los tratamientos.</dd>
            <dt>Clinica deportiva walter ferreira</dt>
            <dd>20% OFF en consultas y sesiones.</dd>
            <dt>Instituto Anglo (prado)</dt>
            <dd>15% OFF en la cuota.</dd>
            <dt><a href='https://ceni.edu.uy/' target='blank'>Colegio y liceo Ceni</a></dt>
            <dd>20% OFF en la cuota.</dd>
          </dl>
        </div>
      </Section>

      <Section theme='dark'>
        <div className='text-container'>
          <h2 className='large-text'>Planes de Socio</h2>
          <article>
            <h3>Basquetbol</h3>
            <dl>
              <dt>Socio Basquet: $1200</dt>
              <dd></dd>
              <dt>Socio Escuelita: $1000</dt>
              <dd></dd>
              <dt>Socio Colaborador: $300</dt>
              <dd></dd>
            </dl>
          </article>
          <article>
            <h3>Club Social</h3>
            <dl>
              <dt>Pase libre: $1950</dt>
              <dd>Acceso a sala de musculación, todas las clases y los deportes.</dd>
              <dt>Plan familiar 3 o +: $1790</dt>
              <dd>Acceso a sala de musculación, todas las clases y los deportes.</dd>
              <dt>Familiar Albatros: $1690</dt>
              <dd>Acceso a sala de musculación, todas las clases y los deportes.</dd>
              <dt>Sólo gimnasio: $1790</dt>
              <dd>Acceso a sala de musculación.</dd>
              <dt>Sólo clases: $1790</dt>
              <dd>Acceso a todas las clases sin incluir los deportes.</dd>
              <dt>Cuponera 8 días: $1490</dt>
              <dd>Acceso a sala de musculación, todas las clases y los deportes.</dd>
              <dt>Plan boutique: $3500</dt>
              <dd>Acceso a todas las clases sin incluir los deportes. Seguimiento integral personalizado.</dd>
              <dt>Plan newcom: $1300</dt>
              <dd>Mayores de 60 años. Se puede hacer uso del gimnasio hasta las 18hs. Acceso a las clases de Yoga, Pilates, Gimnasia Regenerativa y Newcome.</dd>
            </dl>
          </article>
        </div>
      </Section>

      <Section title='Ponete en contacto' bgColor='#171742' fontColor='#fff' id='section_6'>
        <Contact hideLastRow />
      </Section>
    </PageLayout>
  );
};

export default Socios;