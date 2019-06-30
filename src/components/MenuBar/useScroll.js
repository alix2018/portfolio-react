import { useEffect, useState } from "react";

function useScroll(pagesIds) {
  const [activePageId, setActivePageId] = useState('home');

  function scrolling() {
    const pagesElements = pagesIds.map(pageId =>
      document.querySelector(`#${pageId}`)
    );

    const activePage = pagesElements.find(page => {
      const elementRect = page.getBoundingClientRect();
      return (elementRect.top <= 0) && (elementRect.top > -window.innerHeight) && (elementRect.bottom > 0) 
      && (elementRect.bottom <= window.innerHeight);
    });

    if (activePage) {
      setActivePageId(activePage.id);
    }
  }

  useEffect(() => {
    window.onscroll = scrolling;
  });

  return activePageId;
}

export default useScroll;
