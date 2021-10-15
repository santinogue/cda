import { Layout } from 'antd';
import { Row, Col, Grid } from 'antd';
import { InstagramFilled, FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';

import './styles.css';

const PageFooter = () => {
  const { Footer } = Layout;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 100, sm: 100, md: 50, lg: 50, xl: 25, xxl: 50};

  return (
    <Footer style={{ textAlign: 'center', background: '#ac2427', color: '#fff'}}>
      <Row gutter={[16, 16]}>
        <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
          Copyright © 2021 Club Deportivo Albatros. Todos los derechos reservados
        </Col>

        <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
          <div className='media-container'>
            <InstagramFilled style={{color: '#fff', fontSize: '20px'}}/>
            <FacebookFilled style={{color: '#fff', fontSize: '20px'}}/>
            <TwitterSquareFilled style={{color: '#fff', fontSize: '20px'}}/>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default PageFooter;

