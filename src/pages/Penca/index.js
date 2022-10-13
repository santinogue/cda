import emailjs from 'emailjs-com';
import { useState, useEffect} from 'react';
import { Select, Button, Input } from 'antd';
import { Row, Col, Grid, notification, message, Typography } from 'antd';

import Banner from 'comps/Banner';
import PageLayout from 'comps/Layout';
import Section from 'comps/Section';
import Games from './comps/games';

import fechas from './fechas';

import './styles.css';

const { Option } = Select;

const Penca = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { Paragraph } = Typography;
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [forecast, setForecast] = useState({...fechas});
  const [selectedFecha, setSelectedFecha] = useState('fecha_2');

  // Code used to make the page responsive.
  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsCols = {xs: 24, sm: 24, md: 16, lg: 10, xl: 10, xxl: 10};

  useEffect(() => {
    emailjs.init("user_6tPAAbfZa88W8lgbqyb8q");
  }, []);

  useEffect(() => {
    notification.open({
      message: 'Penca DTA 2022',
      duration: 30,
      description:
        'Completa la penca eligiendo la fecha que deseas pronosticar. Puedes pronosticar todas fechas ahora, o hacerlo fecha a fecha',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }, []);

  const submitForecast = () => {
    const rows = [];
    const forecastValues = Object.values(forecast);
    const header = ['Fecha', 'Equipo 1', 'Equipo 2', 'Ganador'];
    const hideLoading = message.loading('Enviando pronóstico', 0);

    forecastValues.forEach(forecastFecha => {
      const fechaValues = Object.values(forecastFecha);
      const nombreFecha = fechaValues.shift();

      fechaValues.forEach(fecha => {
        rows.push([nombreFecha, fecha.equipo_1, fecha.equipo_2, fecha.winner || ''].join(','));
      })
    })

    const csv = [header.join(','), ...rows].join('\r\n');

    const templateParams = {
      from_name: `Nombre: ${fullName}, Email: ${email}`,
      user_message: btoa(csv),
      reply_to: email,
    };


    emailjs.send('service_and6xzx', 'template_s20dvfq', templateParams, 'user_6tPAAbfZa88W8lgbqyb8q')
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.body.style.cursor='default';
          hideLoading();
          message.success('Ponóstico enviado correctamente.');

      }, function(error) {
          console.log('FAILED...', error);
          document.body.style.cursor='default';
          hideLoading();
          message.error('No es posible enviar el pronóstico en este momento. Por favor contáctate por otro medio, como whatsapp.', 30)
      });
  };

  const onSelectResultado = (forecastedWinner, gameId) => {
    setForecast(current => {
      return {
        ...current,
        [selectedFecha] : {
          ...current[selectedFecha],
          [gameId]: {
            ...current[selectedFecha][gameId],
            winner: forecastedWinner,
          }
        }
      }
    })
  };

  const onChangeEmail = e => {
    const { value: inputValue } = e.target;
    setEmail(inputValue);
  };

  const onChangeFullName = e => {
    const { value: inputValue } = e.target;
    setFullName(inputValue);
  };

  const onSelectFecha = value => setSelectedFecha(value);

  return (
    <PageLayout>
      <Banner text={'Penca DTA 2022'} imageSrc={'banner4.png'} height={250} />

      <Section>
        <Select
          showSearch
          style={{ width: 200, float: 'left', margin: '0 0 20px' }}
          defaultValue={'fecha_2'}
          value={selectedFecha}
          placeholder="Seleccionar fecha"
          optionFilterProp="children"
          onChange={onSelectFecha}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {Object.keys(fechas).map(idFecha => (
            <Option value={idFecha} key={idFecha}>{fechas[idFecha].nombre}</Option>
          ))}
        </Select>
      </Section>

      <Section>
        <h1 style={{padding: 30, textAlign: 'left'}}>Pronósticos</h1>
        <Games
          forecast={forecast}
          selectedFecha={selectedFecha}
          onSelectResultado={onSelectResultado}
        />
      </Section>

      <Section>
        <Paragraph>
          <pre>
            Recuerda que para que tu pronóstico pueda participar de la penca, debes entregar el comprobante de pago. <br></br>
            Puedes enviar el comprobante por email a <b>clubdalbatros@gmail.com</b>, indicando tu nombre y apellido. <br></br>
            También puedes enviar el comprobante al celular de secretaría <b>092 684 814</b>
          </pre>
        </Paragraph>

        <Row style={{marginBottom: 20}}>
          <Paragraph style={{color: 'rgb(172, 36, 39)', fontWeight: 'bold'}}>
            Banco: Scotiabank, Cuenta corriente nro: 3564204800, Sucursal nro: 002, Beneficiario: Club Deportivo Albatros
          </Paragraph>
        </Row>

        <Row style={{marginBottom: 20}}>
          <Col span={breakpointsCols[currentBreakpoint]}>
            <Input placeholder="Nombre y Apellido" type="text" value={fullName} onChange={onChangeFullName} />
          </Col>
        </Row>

        <Row style={{marginBottom: 20}}>
          <Col span={breakpointsCols[currentBreakpoint]}>
            <Input placeholder="Email" type="eemail" value={email} onChange={onChangeEmail} />
          </Col>
        </Row>

        <Row style={{marginBottom: 20}}>
          <Col span={breakpointsCols[currentBreakpoint]}>
            <Button type="primary" block onClick={submitForecast} disabled={!email || !fullName}>
              Enviar Pronóstico
            </Button>
          </Col>
        </Row>
      </Section>
    </PageLayout>
  );
};

export default Penca;