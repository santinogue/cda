import { Row, Col, Card, Grid } from 'antd';

import staf from './staf';

const Staf = () => {
  const { Meta } = Card;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 100, sm: 100, md: 50, lg: 33, xl: 33, xxl: 33};

  const smallScreen = ['xs', 'sm'].includes(currentBreakpoint);
  const rowStyle = smallScreen ? {} : {margin: 0};

  const fstRow = [...Array(6).keys()];

  const renderActivity = index => {
    const stafData = staf[index];
    const smallestBreakPoint = currentBreakpoint === 'xs';

    return (
      <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`} style={{maxWidth: '100vw'}}>
        <Card
          style={{ width: '100%', margin: '5px 0 5px' }}
          cover={
            <img
              alt="example"
              style={{maxWidth: '100vw'}}
              src={require(`images/${stafData.image}`).default}
            />
          }
        >
          <Meta
            title={`${stafData.name} ${stafData.position}`}
            description={smallestBreakPoint ? '' : stafData.desc}
          />
        </Card>
      </Col>
    )
  };

  return (
    <>
      <Row gutter={[16, 16]} style={rowStyle}>
        {fstRow.map(e => renderActivity(e))}
      </Row>
    </>
  )
};

export default Staf;