import { useEffect, useState } from 'react';

const useMetaData = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [metaTags, setMetaTags] = useState([]);
  const [linkTags, setLinkTags] = useState([]);
  const [scriptTags, setScriptTags] = useState([]);
  const [styleTags, setStyleTags] = useState([]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const head = document.head;

    // Set title
    if (currentTitle) {
      document.title = currentTitle;
    }

    // Update meta tags
    metaTags.forEach((tag) => {
      const existingTag = head.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', tag.name);
        newTag.setAttribute('content', tag.content);
        head.appendChild(newTag);
      }
    });

    // Update link tags
    linkTags.forEach((tag) => {
      const existingTag = head.querySelector(`link[rel="${tag.rel}"]`);
      if (existingTag) {
        existingTag.setAttribute('href', tag.href);
      } else {
        const newTag = document.createElement('link');
        newTag.setAttribute('rel', tag.rel);
        newTag.setAttribute('href', tag.href);
        head.appendChild(newTag);
      }
    });

    // Update script tags
    scriptTags.forEach((tag) => {
      const existingTag = head.querySelector(`script[src="${tag.src}"]`);
      if (existingTag) return;
      const newTag = document.createElement('script');
      newTag.setAttribute('src', tag.src);
      head.appendChild(newTag);
    });

    // Update style tags
    styleTags.forEach((tag) => {
      const existingTag = head.querySelector(`style[data-id="${tag.id}"]`);
      if (existingTag) {
        existingTag.innerHTML = tag.content;
      } else {
        const newTag = document.createElement('style');
        newTag.setAttribute('data-id', tag.id);
        newTag.innerHTML = tag.content;
        head.appendChild(newTag);
      }
    });

    // Clean up on unmount
    return () => {
      metaTags.forEach((tag) => {
        const existingTag = head.querySelector(`meta[name="${tag.name}"]`);
        if (existingTag) head.removeChild(existingTag);
      });

      linkTags.forEach((tag) => {
        const existingTag = head.querySelector(`link[rel="${tag.rel}"]`);
        if (existingTag) head.removeChild(existingTag);
      });

      scriptTags.forEach((tag) => {
        const existingTag = head.querySelector(`script[src="${tag.src}"]`);
        if (existingTag) head.removeChild(existingTag);
      });

      styleTags.forEach((tag) => {
        const existingTag = head.querySelector(`style[data-id="${tag.id}"]`);
        if (existingTag) head.removeChild(existingTag);
      });
    };
  }, [currentTitle, metaTags, linkTags, scriptTags, styleTags]);

  // Function to update the title
  const setTitle = (title) => {
    setCurrentTitle(title);
  };

  // Function to update meta tags
  const setMeta = (name, content) => {
    setMetaTags((prevTags) => {
      const index = prevTags.findIndex((tag) => tag.name === name);
      if (index !== -1) {
        const newTags = [...prevTags];
        newTags[index] = { name, content };
        return newTags;
      }
      return [...prevTags, { name, content }];
    });
  };

  // Function to update link tags
  const setLink = (rel, href) => {
    setLinkTags((prevTags) => {
      const index = prevTags.findIndex((tag) => tag.rel === rel);
      if (index !== -1) {
        const newTags = [...prevTags];
        newTags[index] = { rel, href };
        return newTags;
      }
      return [...prevTags, { rel, href }];
    });
  };

  // Function to update script tags
  const setScript = (src) => {
    setScriptTags((prevTags) => {
      if (prevTags.some((tag) => tag.src === src)) return prevTags;
      return [...prevTags, { src }];
    });
  };

  // Function to update style tags
  const setStyle = (id, content) => {
    setStyleTags((prevTags) => {
      const index = prevTags.findIndex((tag) => tag.id === id);
      if (index !== -1) {
        const newTags = [...prevTags];
        newTags[index] = { id, content };
        return newTags;
      }
      return [...prevTags, { id, content }];
    });
  };

  return { setTitle, setMeta, setLink, setScript, setStyle };
};

export default useMetaData;
