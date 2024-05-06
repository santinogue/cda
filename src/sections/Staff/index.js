import { Row, Col, Card, Grid } from 'antd';

import staff from './staff';

const Staff = () => {
  const { Meta } = Card;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 100, sm: 100, md: 50, lg: 33, xl: 33, xxl: 33};

  const smallScreen = ['xs', 'sm'].includes(currentBreakpoint);
  const rowStyle = smallScreen ? {} : {margin: 0};

  // const fstRow = [...Array(6).keys()];

  const renderActivity = (staffData) => {
    const smallestBreakPoint = currentBreakpoint === 'xs';

    return (
      <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`} style={{maxWidth: '100vw'}} key={staffData.name}>
        <Card
          style={{ width: '100%', margin: '5px 0 5px' }}
          cover={
            <img
              alt={staffData.name}
              style={{maxWidth: '100vw'}}
              src={require(`images/${staffData.image}`).default}
            />
          }
          key={staffData.name}
        >
          <Meta
            title={`${staffData.name} ${staffData.position}`}
            description={smallestBreakPoint ? '' : staffData.desc}
          />
        </Card>
      </Col>
    )
  };

  return (
    <>
      <Row gutter={[16, 16]} style={rowStyle}>
        {staff.map(s => renderActivity(s))}
      </Row>
    </>
  )
};

export default Staff;