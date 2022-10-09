import { Row, Col, Grid, Select } from 'antd';

const { Option } = Select;

const Games = ({ forecast, selectedFecha, onSelectResultado }) => {
  // Code used to make the page responsive.
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const breakpointsFlex = {xs: 100, sm: 100, md: 100, lg: 50, xl: 50, xxl: 50};

  const rows = [];
  const games = Object.values(forecast[selectedFecha]);
  games.shift();

  games.forEach((el, index) => {
    const isEven = (index % 2) === 0;
    const rowsIndex = isEven ? index / 2 : (index - 1) / 2;
    rows[rowsIndex] = rows[rowsIndex] || [];
    rows[rowsIndex].push(el);
  });

  const renderGames = games => {
    const [fstGame, sndGame] = games;

    return (
      <>
        <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
          <Row>
            <Col span={6}>{fstGame.equipo_1}</Col>
            <Col span={4}>vs</Col>
            <Col span={6}>{fstGame.equipo_2}</Col>

            <Col span={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Gana"
                value={fstGame.winner}
                onChange={(value) => onSelectResultado(value, fstGame.id)
              }>
                <Option value="equipo_1">{fstGame.equipo_1}</Option>
                <Option value="equipo_2">{fstGame.equipo_2}</Option>
              </Select>
            </Col>
          </Row>
        </Col>

        <Col flex={`0 1 ${breakpointsFlex[currentBreakpoint]}%`}>
          <Row>
            <Col span={6}>{sndGame.equipo_1}</Col>
            <Col span={4}>vs</Col>
            <Col span={6}>{sndGame.equipo_2}</Col>

            <Col span={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Gana"
                value={sndGame.winner}
                onChange={(value) => onSelectResultado(value, sndGame.id)
              }>
                <Option value="equipo_1">{sndGame.equipo_1}</Option>
                <Option value="equipo_2">{sndGame.equipo_2}</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </>
    )
  };

  return (
    <>
      {
        rows.map((row =>
          <Row key={row[0].id} gutter={[16, 16]} style={{marginBottom: '40px'}}>
            {renderGames(row)}
          </Row>
        ))
      }
    </>
  )
}

export default Games;