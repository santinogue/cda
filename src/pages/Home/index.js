import { Layout, Menu, Carousel, Divider } from 'antd';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


import './styles.css';

const Home = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='header-content'>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">El club</Menu.Item>
            <Menu.Item key="3">Actividades</Menu.Item>
            <Menu.Item key="4">Horarios</Menu.Item>
            <Menu.Item key="5">Contacto</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content className="site-layout" style={{ padding: '0', maxWidth: 1400, margin: '64px auto'}}>
        <div className="site-layout-background" style={{ padding: '24px 0', minHeight: '100vh' }}>
          <Carousel autoplay style={{maxWidth: '100vw'}}>
            <div>
              <div className='slide-image slide-1' />
            </div>
            <div>
              <div className='slide-image slide-2' />
            </div>
            <div>
              <div className='slide-image slide-3' />
            </div>
            <div>
              <div className='slide-image slide-4' />
            </div>
            <div>
              <div className='slide-image slide-5' />
            </div>
          </Carousel>

          <Divider orientation="left">Seguinos en Twitter</Divider>

          <div className='twitter-container'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CDAlbatros1941"
              options={{height: 800, with: '90vw'}}
            />
          </div>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Club Deportivo Albatros 2021</Footer>
    </Layout>
  );
};

export default Home;