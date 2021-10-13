import { Row, Col, Grid } from 'antd';
import { Form, Input, Button } from 'antd';

import './styles.css';

const Contact = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 100, sm: 100, md: 50, lg: 50, xl: 50, xxl: 50};

  return (
    <Row gutter={[16, 16]}>
      <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
        <Map />
      </Col>

      <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
        <EmailForm />
      </Col>
    </Row>
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
      offset: 4,
      span: 16,
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