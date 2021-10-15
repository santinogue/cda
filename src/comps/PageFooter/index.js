import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { InstagramFilled, FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';

import './styles.css';

const PageFooter = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: 'center', background: '#ac2427', color: '#fff'}}>
      <Row gutter={[16, 16]}>
        <Col flex={`0 1 50%`}>
          Copyright © 2021 Club Deportivo Albatros. Todos los derechos reservados
        </Col>

        <Col flex={`0 1 50%`}>
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

