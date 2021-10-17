import Banner from 'comps/Banner';
import PageLayout from 'comps/Layout';

import './styles.css';

import Section from 'comps/Section';
import Contact from 'sections/Contact';

const About = () => {
  return (
    <PageLayout>
      <Banner text={'Misión'} imageSrc={'banner2.png'} />
      <Section>
        <div className='text-container'>
         <h2 class='large-text'>Hacer del club un lugar agradable, donde la gente de sus alrededores concurra a desarrollar distintas actividades deportivas y sociales sintiendo de esta forma un sentimiento de pertenencia a la Institución y al barrio. Contando con colaboradores alineados con nuestros cometidos y con nuestros colores.</h2>
        </div>
      </Section>

      <Banner text={'Visión'} imageSrc={'banner3.png'} />
      <Section>
        <div className='text-container'>
        <h2 class='large-text'>Hacer del club una institución reconocida en el medio por su continuo mejoramiento y rendimiento deportivo en las distintas disciplinas. Contando con un gimnasio y una gestión moderna, que considere a sus colaboradores y proveedores.</h2>
        </div>
      </Section>

      <Banner text={'Historia'} imageSrc={'historia1.png'} />
      <Section>
        <div className='text-container'>
        <h1>Cómo comenzó?</h1>
        <h2 class='large-text'>
          El Club Deportivo Albatros es una Institución creada el 27 de Febrero de 1941, ubicada en el Barrio Atahualpa en la ciudad de Montevideo, Uruguay.
          Desde sus origenes fue una Institución muy arraigada a su zona de influencia, tal cual se desprende de sus antecedentes que relata un diario local:
        </h2>

        <h1>Antecedentes</h1>
        <br />
        <h2 class='large-text'>
          En el año 1938 alumnos del Colegio Sagrada Familia crean el “Club Atlético Albatros de Fútbol”. No tenían sede, ni cancha, y le pusieron el nombre de Albatros por una empresa de ómnibus que recorría la zona.
          Otro grupo, amigos de éstos, que no jugaban al fútbol y se reunían en la esquina de Burgues y Larrañaga, decidieron fundar el “Club Deportivo Albatros”. Deportivo para distinguirlo del Club de Fútbol que tuvo corta participación.
        </h2>
        </div>
      </Section>

      <Banner imageSrc={'historia2.png'} />
      <Section>
        <div className='text-container'>
        <h1>Fundación</h1>
        <br />
        <h2 class='large-text'>
          Según consta en su primer libro de acta el Club Deportivo Albatros fue fundado el 27 de febrero de 1941, para practicar todos los deportes en general y el basketball en particular.
          Los jóvenes fundadores fueron: José Pedro Payrá Compte (quien actuó provisoriamente en la presidencia), como vicepresidente Gonzalo Beramendi Rojí; Secretario Ruben Antón Lussich; pro-secretario Pedro Payrá Compte; tesorero Juan Bautista Gorriti; pro-tesorero Pedro Carnelli Compte; y vocales Walter Bascuas Bonomi y Guillermo Cassou.
          También integraba el grupo fundacional Juan Carlos Cassou.
        </h2>
        <br />
        <h2 class='large-text'>
          Se decide que los colores del representativo de basketball serán: camiseta blanca con un triángulo rojo en el pecho y otro en la espalda, cuyo vértice sea el cuello de la camiseta y la base sea del borde inferior de la misma. El pantalón será blanco.
        </h2>
        <br />
        <h2 class='large-text'>
          El 25 de agosto de 1945, se instala definitivamente en nuestra sede de hoy en dia y para el año 1946, Albatros ya era campeón federal de 2da de ascenso y participa por primera vez en el círculo de privilegio del basketball nacional al año siguiente, así como también en el  1958, 1961, y 1963 en primera división.
        </h2>
        <br />
        <h2 class='large-text'>
          Acercándonos en el tiempo, para el año 1984 se coloca por primera vez el techo en todo nuestro gimnasio, y unos años mas tarde, 1987-88, se le cambia el sentido de la cancha. Si, la cancha no estaba como la vemos hoy en dia, estaba de manera vertical al entrar.
        </h2>
        <br />
        <h2 class='large-text'>
          Hoy gracias a nuestra rica historia y trabajo constante de socios, dirigentes, padres y deportistas, tenemos la suerte de contar con varias disciplinas deportivas, actividades sociales, y de crecer constantemente en lo edilicio, cumpliendo el sueño que todos anhelábamos para estos 80 años: El piso flotante.
        </h2>
        </div>
      </Section>

      <Section title='Ponete en contacto' bgColor='#171742' fontColor='#fff' id='section_6'>
        <Contact hideLastRow />
      </Section>
    </PageLayout>
  );
};

export default About;