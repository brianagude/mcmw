"use client"
import React, { useState, useEffect, useRef } from 'react';
import { urlForImage } from "@/sanity/utils/urlFor";
import Image from 'next/image';


const setCookie = (name, value) => {
  document.cookie = `${name}=${value}; path=/`;
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const NewsletterPopupModule = ({ module }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setShowError(true);
    } else {
      setShowError(false);
      formRef.current.submit();
    }
  };

  const handleIframeLoad = () => {
    setShowThankYou(true);
  };

  useEffect(() => {
    const hidePopup = getCookie('hideNewsletterPopup');
    if (!hidePopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setCookie('hideNewsletterPopup', 'true');
    setIsVisible(false);
  };

  const addCookie = () => {
    setCookie('hideNewsletterPopup', 'true');
  }

  if (!isVisible) {
    return null;
  }

  return (
    <section className="newsletter-section page-section popup">
      <div className="container">
        <button type="button" className="close-btn top-close-btn" onClick={handleClose}>Close</button>
        <div className="media-block">
          <Image
            src={urlForImage(module.image.asset._ref).url()}
            alt={module.image.alt}
            fill
            priority
          />
        </div>

        <div className='form-wrapper'>
          {module.title && <h2 className='title'>{module.title}</h2>}
          {module.body && <p className='lead'>{module.body}</p>}

          <div id="mc_embed_shell">
            <div id="mc_embed_signup">
              <form
                action="https://milkandcookiesfestival.us21.list-manage.com/subscribe/post?u=dd0a4903ee93a291eb0eb77fc&amp;id=a57c276c6e&amp;f_id=009383e6f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="hidden_iframe"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">First Name </label>
                    <input type="text" name="FNAME" className="text" id="mce-FNAME" placeholder="Your Name Here" />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                      placeholder="example@example.com"
                    />
                  </div>
                  <div hidden="">
                    <input type="hidden" name="tags" value="2904741" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_dd0a4903ee93a291eb0eb77fc_a57c276c6e" tabIndex="-1" />
                  </div>
                  <div className="clear">
                    {showThankYou && <p className="thank-you-message">Thank you for subscribing!</p>}
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="subscribe-btn" onClick={addCookie}>
                      {module.submitText ? module.submitText : 'JOIN NOW'}
                      <Image
                        src='/icons/arrow-white.svg'
                        alt='chunky right arrow'
                        width={40}
                        height={32}
                      />
                    </button>
                    <button type="button" className="close-btn" onClick={handleClose}>I don’t want exclusive content</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        name="hidden_iframe"
        style={{ display: 'none' }}
        ref={iframeRef}
        onLoad={handleIframeLoad}
      ></iframe>
    </section>
  );
};
