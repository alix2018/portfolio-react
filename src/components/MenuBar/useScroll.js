import {useEffect, useState} from 'react';

function useScroll(pagesIds) {
  const [activePageId, setActivePageId] = useState('home');
  const [domReady, setDomReady] = useState(true);
  const [pagesElements, setPagesElements] = useState([]);
  // const [scrollToNext, setScrollToNext] = useState(false);

  function scrolling() {

    // if (!scrollToNext && !domReady) {
      const activePage = pagesElements.find(page => {
        const elementRect = page.getBoundingClientRect();
        return (elementRect.top <= 0) && (elementRect.top > -window.innerHeight) && (elementRect.bottom > 0) &&
        (elementRect.bottom <= window.innerHeight);
      });

      // if (activePage.getBoundingClientRect().top < -window.innerHeight/2) {
      //   console.log("setScrollToNext");
      //   setScrollToNext(true);
      // }

      if (activePage) {
        setActivePageId(activePage.id);
      }
    // }
  }

  useEffect(() => {
    if (domReady) {
      const pagesElementsArray = pagesIds.map(pageId =>
        document.querySelector(`#${pageId}`)
      );
      setPagesElements(pagesElementsArray);
      const currentAnchor = document.querySelector('#home');
      currentAnchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setDomReady(false);
    }

    // console.log("scrollToNext:", scrollToNext);
    // if (scrollToNext) {
    //   console.log("SCROOOOOL TO NEXT");
    //   console.log("id effect:", activePageId);

    //   let index = pagesIds.indexOf(activePageId);
    //   console.log("index", index);
    //   console.log("next page:", '#' + pagesIds[index + 1]);
    //   // console.log("pagesIds", pagesIds);
    //   // console.log(pagesIds[index]);

    //   const nextAnchor = document.querySelector('#' + pagesIds[index + 1]);
    //   console.log("nextAnchor", nextAnchor);
    //   nextAnchor.scrollTo({
    //     behavior: 'smooth',
    //     block: 'start'
    //   });
    //   //setScrollToNext(false);
    // }

    window.addEventListener('scroll', scrolling);

    return () => window.removeEventListener('scroll', scrolling);
  }, [domReady, scrolling, /* scrollToNext */]);

  return activePageId;
}

export default useScroll;
