import { Grid } from 'antd';

import LazyShow from 'comps/LazyShow';

import './styles.css';

const Section = ({ children, id, title, style, bgColor, fontColor, theme = 'light' }) => {
  const backgroundColor = theme === 'light' ? '#fff' : '#eff2f5';

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const fontSizeBreakpoints = {xs: 24, sm: 32, md: 64};

  const titleStyle = { fontSize: `${fontSizeBreakpoints[currentBreakpoint]}px` }

  return (
    <section className='section-container' style={{backgroundColor: bgColor || backgroundColor}} id={id}>
      <div
        className="site-layout-background"
        style={{
          padding: '24px 0',
          maxWidth: 1400,
          margin: '0 auto',
          backgroundColor: bgColor || backgroundColor,
          ...style,
        }}
      >

        {title &&
          <LazyShow>
            <div className='title-container'>
              <h1 style={{color: fontColor, ...titleStyle}}>{title}</h1>
            </div>
          </LazyShow>
        }

        {children}
      </div>
    </section>
  )
};

export default Section;