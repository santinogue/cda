import { useEffect, useState } from 'react';
import { Layout, Menu, Carousel } from 'antd';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Activities from 'sections/Activities';
import PageFooter from 'comps/PageFooter';
import Schedule from 'sections/Schedule';
import Contact from 'sections/Contact';
import Whatsapp from 'comps/Whatsapp';
import Section from 'comps/Section';
import Staf from 'sections/Staf';

import './styles.css';

const Home = () => {
  const { Header, Content } = Layout;
  const [sliderHeight, setSliderHeight] = useState('100vh');
  const slides = ['slide-1', 'slide-2', 'slide-3', 'slide-4'];

  useEffect(() => {
    const onResize = () => {
      const screenWidth = window.innerWidth;
      const screenSliderHeight = Math.round(screenWidth / 1.78);
      const stringHeight = `${screenSliderHeight}px`

      setSliderHeight(stringHeight);
    }

    window.addEventListener('resize', onResize);

    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  const onGoToSection = sectionId => {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
  };

  const onGoToPage = () => {};

  return (
    <Layout>
      <Header
        style={{
          zIndex: 20,
          width: '100%',
          position: 'fixed',
          background: '#171742',
          boxShadow: '1px 1px 9px black'
        }
      }>
        <div className='header-content'>
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
              color: '#fff',
              justifyContent: 'end',
              background: '#171742',
              borderBottom: 'none'
            }}
          >
            <Menu.Item onClick={() => onGoToSection('section_1')} key="1">Inicio</Menu.Item>
            <Menu.Item onClick={() => onGoToSection('section_2')} key="2">Noticias</Menu.Item>
            <Menu.Item onClick={() => onGoToPage('club')} key="3">El club</Menu.Item>
            <Menu.Item onClick={() => onGoToSection('section_3')} key="4">Actividades</Menu.Item>
            <Menu.Item onClick={() => onGoToSection('section_4')} key="5">Horarios</Menu.Item>
            <Menu.Item onClick={() => onGoToSection('section_5')} key="6">Staf</Menu.Item>
            <Menu.Item onClick={() => onGoToSection('section_6')} key="7">Contacto</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content className="site-layout" style={{ padding: '0', margin: '64px auto 0 auto'}}>
        <div
          id='section_1'
          className="site-layout-background"
          style={{
            padding: '0',
            margin: '0 auto',
            height: sliderHeight,
            maxHeight: 'calc(100vh - 64px)'
          }}
        >
          <Carousel autoplay style={{maxWidth: '100vw'}}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className={`slide-image ${slide}`} style={{ height: sliderHeight }}/>
              </div>
            ))}
          </Carousel>
        </div>

        <Section title='Seguinos en Twitter' theme='dark' id='section_2'>
          <div className='twitter-container'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CDAlbatros1941"
              options={{height: 800, with: '90vw'}}
            />
          </div>
        </Section>

        <Section title='Actividades' id='section_3'>
          <Activities />
        </Section>

        <Section title='Horarios' id='section_4'>
          <Schedule />
        </Section>

        <Section title='Nuestro Staf' theme='dark' id='section_5'>
          <Staf />
        </Section>

        <Section title='Ponete en contacto' bgColor='#171742' fontColor='#fff' id='section_6'>
            <Contact />
        </Section>
      </Content>

      <PageFooter />

      <Whatsapp />
    </Layout>
  );
};

export default Home;