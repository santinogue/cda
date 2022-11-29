import emailjs from 'emailjs-com';
import { Row, Col, Grid } from 'antd';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { MailFilled, PhoneFilled } from '@ant-design/icons';

import Logo from 'images/logo_hd_small.png';
import LazyShow from 'comps/LazyShow';

import './styles.css';
import { useEffect } from 'react';

const Contact = ({ hideLastRow }) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const history = useHistory();

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

  const onGoToPage = pathname => history.push(pathname);

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
              <p style={pStyle}>092 684 814</p>
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
  const [form] = Form.useForm();
  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };

  useEffect(() => {
    emailjs.init("user_6tPAAbfZa88W8lgbqyb8q");
  }, []);



  const onFinish = (values) => {
    console.log(values);

    const templateParams = {
      from_name: values.name,
      subject: values.subject,
      user_message: values.message,
      reply_to: values.email,
    };

    emailjs.send('service_and6xzx', 'template_lzw46yb', templateParams, 'user_6tPAAbfZa88W8lgbqyb8q')
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.body.style.cursor='default';
          alert("Correo enviado. Revisa tu casilla de correo, pronto estaremos en contacto.");
      }, function(error) {
          console.log('FAILED...', error);
          document.body.style.cursor='default';
          alert("No es posible enviar el correo en este momento. Por favor contáctate por otro medio, como whatsapp.");
      });
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
          name="subject"
          label="Asunto"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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