import { Divider } from 'antd';

import './styles.css';

const Section = ({ children, title, style, bgColor, fontColor, theme = 'light' }) => {
  const backgroundColor = theme === 'light' ? '#fff' : '#eff2f5';

  return (
    <div className='section-container' style={{backgroundColor: bgColor || backgroundColor}}>
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
        {/* {title && <Divider style={{color: fontColor}} orientation="left">{title}</Divider>} */}

        {title &&
          <div className='title-container'>
            <h1 style={{color: fontColor}}>{title}</h1>
          </div>
        }

        {children}
      </div>
    </div>
  )
};

export default Section;