import { ParallaxBanner } from 'react-scroll-parallax';

import './styles.css';

const Banner = ({imageSrc, text, height = 500}) => {
  return (
    // <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
    //    <img src={require(`images/banners/${imageSrc}`).default} alt='banner' style={{width: '100%'}} />
    // </Parallax>

    // <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}>
    //   Content goes here. Parallax height grows with content height.
    // </Parallax>

    <ParallaxBanner
      className="your-class"
      layers={[
          {
              image: require(`images/banners/${imageSrc}`).default,
              amount: 0.5,
          },
      ]}
      style={{
          width: '100vw',
          height: `${height}px`,
      }}
    >
      <h1 className='banner-overlay'>{text}</h1>
    </ParallaxBanner>
  );
};

export default Banner;