import { Row, Col, Card, Grid } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

import actividades from './actividades';

const Actividades = () => {
  const { Meta } = Card;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 50, sm: 50, md: 50, lg: 25, xl: 25, xxl: 25};

  const fstRow = [...Array(4).keys()];
  const sndRow = [...Array(4).keys()].map(e => e + 4);
  const thdtRow = [...Array(4).keys()].map(e => e + 8);
  const lstRow = [...Array(2).keys()].map(e => e + 12);

  const renderActivity = index => {
    const actData = actividades[index];
    const smallestBreakPoint = currentBreakpoint === 'xs';

    const actions = smallestBreakPoint
      ? [<p>{actData.contacto}</p>] : [<PhoneOutlined key="phone" />, <p>{actData.contacto}</p>]

    return (
      <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
        <Card
          style={{ width: '100%', margin: '5px 0 5px' }}
          cover={
            <img
              alt="example"
              src={require(`images/actividades/${actData.image}`).default}
            />
          }
          actions={actions}
        >
          <Meta
            title={actData.title}
            description={smallestBreakPoint ? '' : actData.desc}
          />
        </Card>
      </Col>
    )
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        {fstRow.map(e => renderActivity(e))}
      </Row>

      <Row gutter={[16, 16]}>
        {sndRow.map(e => renderActivity(e))}
      </Row>

      <Row gutter={[16, 16]}>
        {thdtRow.map(e => renderActivity(e))}
      </Row>

      <Row gutter={[16, 16]}>
        {lstRow.map(e => renderActivity(e))}
      </Row>
    </>
  )
};

export default Actividades;