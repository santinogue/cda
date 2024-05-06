import { useEffect, useState } from 'react';
import { Carousel, Grid } from 'antd';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Activities from 'sections/Activities';
import Schedule from 'sections/Schedule';
import Contact from 'sections/Contact';
import Section from 'comps/Section';
import Staff from 'sections/Staff';
import PageLayout from 'comps/Layout';

import times from 'sections/Schedule/times';
import timesBasket from 'sections/Schedule/times_basket';
import timesHandball from 'sections/Schedule/times_handball';
import timesBoxeo from 'sections/Schedule/times_boxeo';

import './styles.css';

const Home = () => {
  const [sliderHeight, setSliderHeight] = useState('100vh');
  const slides = ['slide-1', 'slide-2', 'slide-3', 'slide-4'];

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  let currentBreakpoint = Object.entries(screens).filter(screen => !!screen[1]);
  currentBreakpoint = currentBreakpoint[currentBreakpoint.length - 1];
  currentBreakpoint = !!currentBreakpoint ? currentBreakpoint[0] : currentBreakpoint;
  const smallScreen = ['xs', 'sm', 'md'].includes(currentBreakpoint);

  useEffect(() => {
    const onResize = () => {
      const screenWidth = window.innerWidth;
      const screenSliderHeight = Math.round(screenWidth / 1.78);

      setSliderHeight(screenSliderHeight);
      updateTwitterTimelineHeight();
    }

    const updateTwitterTimelineHeight = () => {
      const carouselHeight = document.getElementsByClassName('ant-carousel')[0].offsetHeight;
      const twitterTimeline = document.getElementsByClassName('twitter-timeline')[0];
      if (twitterTimeline && !smallScreen) twitterTimeline.style.height =  `${carouselHeight - 80}px`;
    }

    window.addEventListener('resize', onResize);

    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [smallScreen]);

  const onLoadTwitter = () => {
    const carouselHeight = document.getElementsByClassName('ant-carousel')[0].offsetHeight;
    document.getElementsByClassName('twitter-timeline')[0].style.height =  `${carouselHeight - 80}px`;
  }

  return (
      <PageLayout>
        <div
          id='section_1'
          className="site-layout-background"
          style={{
            padding: '0',
            margin: '0 auto',
            height: sliderHeight,
            maxHeight: 'calc(100vh - 64px)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Carousel autoplay style={{maxWidth: '100vw'}}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className={`slide-image ${slide}`} style={{ height: `${sliderHeight}px` }}/>
              </div>
            ))}
          </Carousel>

          {!smallScreen && <div className='twitter-container-small'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CDAlbatros1941"
              onLoad={onLoadTwitter}
              options={{height: `${sliderHeight - 30}px`, with: '90vw'}}
            />
          </div>}
        </div>

        {smallScreen && <Section title='Seguinos en Twitter' theme='dark' id='section_2' key='section_2'>
          <div className='twitter-container'>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CDAlbatros1941"
              options={{height: 800, with: '90vw'}}
            />
          </div>
        </Section>}

        <Section title='Actividades' id='section_3' key='section_3'>
          <Activities />
        </Section>

        <Section title='Horarios Basquetbol' id='section_4' key='section_4'>
          <Schedule times={timesBasket} defaultTime='escuelita' />
        </Section>

        <Section title='Horarios' key='section_5'>
          <Schedule times={times} defaultTime='funcional' />
        </Section>

        <Section title='Horarios Boxeo y Kickboxing' key='section_5'>
          <Schedule times={timesBoxeo} defaultTime='boxeo' />
        </Section>

        <Section title='Horarios Handball' key='section_6'>
          <Schedule times={timesHandball} defaultTime='handball' />
        </Section>

        <Section title='Nuestro Staff' theme='dark' id='section_5' key='section_7'>
          <Staff />
        </Section>

        <Section title='Ponete en contacto' bgColor='#171742' fontColor='#fff' id='section_6' key='section_8'>
          <Contact />
        </Section>
      </PageLayout>
  );
};

export default Home;