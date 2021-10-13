import { useEffect, useState } from 'react';
import { Layout, Menu, Carousel, Divider } from 'antd';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Activities from 'sections/Activities';
import Schedule from 'sections/Schedule';
import Contact from 'sections/Contact';
import Banner from 'comps/Banner';
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

        <div
          className="site-layout-background"
          style={{ padding: '24px 0', minHeight: '100vh', maxWidth: 1400, margin: '0 auto' }}
        >
          <Divider orientation="left">Seguinos en Twitter</Divider>

          <div className='twitter-container'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CDAlbatros1941"
              options={{height: 800, with: '90vw'}}
            />
          </div>

          <Divider orientation="left">Actividades</Divider>

          <Activities />

          <Divider orientation="left">Horarios</Divider>

          <Schedule />
        </div>

        <Banner imageSrc='banner2.png' text='Staf' />

        <div
          className="site-layout-background"
          style={{ padding: '24px 0', minHeight: '100vh', maxWidth: 1400, margin: '0 auto' }}
        >
          <Staf />

          <Contact />

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Club Deportivo Albatros 2021</Footer>
    </Layout>
  );
};

export default Home;