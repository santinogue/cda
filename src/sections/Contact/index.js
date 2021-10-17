import { Row, Col, Grid } from 'antd';
import { Form, Input, Button } from 'antd';
import { MailFilled, PhoneFilled } from '@ant-design/icons';

import Logo from 'images/logo_hd.png';
import LazyShow from 'comps/LazyShow';

import './styles.css';

const Contact = ({ hideLastRow }) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 100, sm: 100, md: 50, lg: 50, xl: 50, xxl: 50};

  const pStyle = {
    color: 'white',
    fontSize: '16px',
    margin: 0,
  }

  const smallScreen = breakpointsFlex[currentBreakpoint] > 50
  const ftsColumStyle = { minWidth: smallScreen ? '50%' : null};
  const sndColumStyle = { minWidth: smallScreen ? '50%' : null};
  const thrColumStyle = {
    minWidth: smallScreen ? '100%' : null,
    marginTop: smallScreen ? '50px' : null,
    borderLeft: smallScreen ? 'none' : '0.5px solid #e96264'
  };

  const onGoToSection = sectionId => {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
  };

  const onGoToPage = () => {};

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
          <LazyShow>
            <Map />
          </LazyShow>
        </Col>

        <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
          <LazyShow>
            <EmailForm />
          </LazyShow>
        </Col>
      </Row>

      {!hideLastRow && <Row style={{margin: '100px 0'}}>
        <Col
          span={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...ftsColumStyle,
          }}
        >
          <img src={Logo} atl='logo' style={{width: '100px'}} />
        </Col>

        <Col span={8}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderLeftColor: '#e96264',
            borderLeftWidth: '0.5px',
            borderLeftStyle: 'solid',
            padding: '0 5%',
            ...sndColumStyle,
          }}
        >
          <Row>
            <Col span={12} style={{minWidth: '100px'}}>
              <div className='pages-list'>
                <a onClick={() => onGoToSection('section_1')}>Inicio</a>
                <a onClick={() => onGoToSection('section_2')}>Noticias</a>
                <a onClick={() => onGoToSection('section_3')}>Actividades</a>
              </div>
            </Col>

            <Col span={12} style={{minWidth: '100px'}}>
              <div className='pages-list'>
                <a onClick={() => onGoToSection('section_4')}>Horarios</a>
                <a onClick={() => onGoToSection('section_5')}>Staf</a>
                <a onClick={() => onGoToPage('club')}>El Club</a>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={8}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeftColor: '#e96264',
            borderLeftWidth: '0.5px',
            borderLeftStyle: 'solid',
            ...thrColumStyle,
          }}
        >
          <div className='info-list'>
            <div className='info-list-item'>
              <MailFilled style={{color: '#fff'}} />
              <p style={pStyle}>info@cdalbatros.com.uy</p>
            </div>

            <div className='info-list-item'>
              <PhoneFilled style={{color: '#fff'}}/>
              <p style={pStyle}>23056789</p>
            </div>
          </div>
        </Col>
      </Row>}
    </>
  )
};

const Map = () => {
  return (
    <div className='map-container'>
      <iframe src='https://maps.google.com/maps?q=club%20albatros%20montevideo&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder="0" allowfullscreen></iframe>
    </div>
  );
};

const EmailForm = () => {
  const { TextArea } = Input;

  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };


  return (
    <div className='form-container'>
      <Form wrapperCol={{span: 24}} labelCol={{span: 24}} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type='email'/>
        </Form.Item>

        <Form.Item
          name="message"
          label="Mensaje"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default Contact;