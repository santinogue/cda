import { useEffect, useState } from 'react';
import { Layout, Menu, Carousel } from 'antd';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Activities from 'sections/Activities';
import PageFooter from 'comps/PageFooter';
import Schedule from 'sections/Schedule';
import Contact from 'sections/Contact';
import Section from 'comps/Section';
import Staf from 'sections/Staf';

import './styles.css';

const Home = () => {
  const { Header, Content, Footer } = Layout;
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

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
        <div className='header-content'>
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{justifyContent: 'end'}}>
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">El club</Menu.Item>
            <Menu.Item key="3">Actividades</Menu.Item>
            <Menu.Item key="4">Horarios</Menu.Item>
            <Menu.Item key="5">Contacto</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content className="site-layout" style={{ padding: '0', margin: '64px auto 0 auto'}}>
        <div
          className="site-layout-background"
          style={{
            padding: '0',
            margin: '0 auto',
            minHeight: sliderHeight,
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

        <Section title='Seguinos en Twitter' theme='dark'>
          <div className='twitter-container'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CDAlbatros1941"
              options={{height: 800, with: '90vw'}}
            />
          </div>
        </Section>

        <Section title='Actividades'>
          <Activities />
        </Section>

        <Section title='Horarios'>
          <Schedule />
        </Section>

        <Section title='Nuestro Staf' theme='dark'>
          <Staf />
        </Section>

        <Section title='Ponete en Contacto' bgColor='#171742' fontColor='#fff'>
            <Contact />
        </Section>
      </Content>

      <PageFooter />
    </Layout>
  );
};

export default Home;