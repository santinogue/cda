import { Layout, Menu, Grid } from 'antd';
import { useHistory } from 'react-router-dom';

import Whatsapp from 'comps/Whatsapp';
import PageFooter from 'comps/PageFooter';

const PageLayout = ({ children }) => {
  const history = useHistory();
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
            {isHome && smallScreen && <Menu.Item onClick={() => onGoToSection('section_2')} key="2">Noticias</Menu.Item>}
            {isHome && <Menu.Item onClick={() => onGoToPage('/club')} key="3">El club</Menu.Item>}
            {isHome && <Menu.Item onClick={() => onGoToSection('section_3')} key="5">Actividades</Menu.Item>}
            {isHome && <Menu.Item onClick={() => onGoToSection('section_4')} key="6">Horarios</Menu.Item>}
            {isHome && <Menu.Item onClick={() => onGoToSection('section_5')} key="7">Staf</Menu.Item>}
            {!isPenca && <Menu.Item onClick={() => onGoToSection('section_6')} key="8">Contacto</Menu.Item>}
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