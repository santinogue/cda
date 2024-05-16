import { Layout, Menu, Grid } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

import Whatsapp from 'comps/Whatsapp';
import PageFooter from 'comps/PageFooter';
import { useEffect } from 'react';

const PageLayout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { Header, Content } = Layout;

  const pathname = window.location.pathname;
  const isHome = pathname !== '/club' && pathname !== '/penca';
  const isPenca = pathname === '/penca';

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const smallScreen = ['xs', 'sm', 'md'].includes(currentBreakpoint);

  useEffect(() => {
    if (location.hash) {
      document.querySelector(`${location.hash}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [location.hash])

  const onGoToSection = sectionId => {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
  };

  const onGoToPage = pathname => history.push(pathname);

  return (
    <Layout>
      <Header
        style={{
          zIndex: 20,
          width: '100%',
          position: 'fixed',
          background: '#171742',
          boxShadow: '1px 1px 9px black',
          padding: '0',
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
            <Menu.Item onClick={() => isHome ? onGoToSection('section_1') : onGoToPage('/')} key="1">Inicio</Menu.Item>
            {smallScreen && <Menu.Item onClick={() => onGoToPage('#section_2')} key="2">Noticias</Menu.Item>}
            <Menu.Item onClick={() => onGoToPage('/club')} key="3">El club</Menu.Item>
            <Menu.Item onClick={() => onGoToPage('/#activities')} key="5">Actividades</Menu.Item>
            <Menu.Item onClick={() => onGoToPage('/#times')} key="6">Horarios</Menu.Item>
            <Menu.Item onClick={() => onGoToPage('/#staff')} key="7">Staff</Menu.Item>
            {!isPenca && <Menu.Item onClick={() => onGoToPage('/#contact')} key="8">Contacto</Menu.Item>}
          </Menu>
        </div>
      </Header>

      <Content className="site-layout" style={{ padding: '0', margin: '64px auto 0 auto'}}>
        {children}
        <PageFooter />
        <Whatsapp />
      </Content>
    </Layout>
  )
};

export default PageLayout;