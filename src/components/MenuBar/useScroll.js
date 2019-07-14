import {useEffect, useState} from 'react';

function useScroll(pagesIds) {
  const [activePageId, setActivePageId] = useState('home');
  const [scrollToHome, setScrollToHome] = useState(true);

  function scrolling() {
    const pagesElements = pagesIds.map(pageId =>
      document.querySelector(`#${pageId}`)
    );
    const activePage = pagesElements.find(page => {
      const elementRect = page.getBoundingClientRect();
      return (elementRect.top <= 0) && (elementRect.top > -window.innerHeight) && (elementRect.bottom > 0) &&
      (elementRect.bottom <= window.innerHeight);
    });

    if (activePage) {
      setActivePageId(activePage.id);
    }
  }

  useEffect(() => {
    if (scrollToHome) {
      const currentAnchor = document.querySelector('#home');
      currentAnchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setScrollToHome(false);
    }

    window.addEventListener('scroll', scrolling);

    return () => window.removeEventListener('scroll', scrolling);
  }, [scrollToHome, scrolling]);

  return activePageId;
}

export default useScroll;
