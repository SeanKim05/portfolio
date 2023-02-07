import React, { useContext, useEffect } from 'react';
import classes from './Main.module.scss';
import NavContext from '../../context/nav-context';
import ImChangeComp from '../../components/MainComp/ImChangeComp';
import WorkCarousel from '../../components/MainComp/WorkCarousel';
import MOCK_DATA from '../../data/mock.json';
import IDream from '../../components/MainComp/IDream';

const hashtags = MOCK_DATA.hashtags;

const Main = () => {
  const navCtx = useContext(NavContext);
  useEffect(() => {
    document.getElementById('main_Y').addEventListener('scroll', e => {
      navCtx.scrollHandler(e.currentTarget.scrollTop);
    });
  });

  return (
    <>
      <div id="main_Y" className={classes.main_container}>
        <section className={classes.main_scroll_section}>
          <ImChangeComp hashtags={hashtags} />
        </section>
        <section className={classes.main_scroll_section}>
          <WorkCarousel />
        </section>
        <section className={classes.main_scroll_section}>
          <IDream />
        </section>
      </div>
    </>
  );
};

export default Main;
