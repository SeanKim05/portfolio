import React, { useContext, useEffect, useState } from 'react';
import classes from './SecondSlide.module.scss';
import caption_img from '../../assets/images/hiking.jpg';
import NavContext from '../../context/nav-context';

const SecondSlide = props => {
  const { yScrollVal } = useContext(NavContext);
  const [scrollReached, setScrollReached] = useState(false);

  useEffect(() => {
    if (yScrollVal > 500) {
      setScrollReached(true);
    }
  });

  console.log(yScrollVal);

  return (
    <section className={classes.main_container}>
      <figure className={classes.slide_figure}>
        <img className={classes.img_wrapper} src={caption_img} alt="등산" />
        <figcaption className={classes.caption_wrapper}>
          <h2>{props.text[0]}</h2>
          {scrollReached && <h1>{props.title}</h1>}
          <p>{props.text[1]}</p>
        </figcaption>
      </figure>
    </section>
  );
};

export default SecondSlide;
