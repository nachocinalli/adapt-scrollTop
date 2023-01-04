import Adapt from 'core/js/adapt';
import React, { useEffect, useState } from 'react';
import { classes } from 'core/js/reactHelpers';

export default function NavigationLogo(props) {
  const { _button } = props;
  const [isVisible, setVisible] = useState(false);
  const target = document.querySelector('.page__header') || document.querySelector('.menu__header');

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    if (!target) return;
    observer.observe(target);

  }, [target]);

  const scrollToTop = () => Adapt.scrollTo(target, { duration: 400 });

  return (
    <button
      className={classes(['btn-icon', 'scrolltop__btn', !isVisible && 'u-display-none'])}
      aria-label={_button.ariaLabel}
      onClick={() => scrollToTop()}>
      <span className='icon icon-controls-up' />
    </button>
  );
}
