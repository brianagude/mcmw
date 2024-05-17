"use client"
import { useState, useEffect } from 'react';
import { urlForImage } from "@/sanity/utils/urlFor";
import Image from 'next/image';

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const NewsletterPopupModule = ({ module }) => {
  console.log(module)
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidePopup = getCookie('hideNewsletterPopup');
    if (hidePopup) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setCookie('hideNewsletterPopup', 'true', 30);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className="newsletter-section page-section popup">
      <div className="container">
        <div className="media-block">
          <Image
            src={urlForImage(module.image.asset._ref).url()}
            fill
            priority
          />
        </div>

        <div className='form-wrapper'>
          {module.title && <h2 className='title'>{module.title}</h2>}
          {module.body && <p className='lead'>{module.body}</p>}

          <div id="mc_embed_shell">
            <div id="mc_embed_signup">
              <form action="https://milkandcookiesfestival.us21.list-manage.com/subscribe/post?u=dd0a4903ee93a291eb0eb77fc&amp;id=a57c276c6e&amp;f_id=009383e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate="">
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">First Name </label>
                    <input type="text" name="FNAME" className="text" id="mce-FNAME" defaultValue="" placeholder="Your Name Here"/>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" defaultValue="" placeholder="example@example.com"/>
                  </div>
                  <div hidden="">
                    <input type="hidden" name="tags" value="2904741"/>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px'}}>
                    <input type="text" name="b_dd0a4903ee93a291eb0eb77fc_a57c276c6e" tabIndex="-1" defaultValue=""/>
                  </div>
                  <div className="clear">
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="subscribe-btn">
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
    </section>
  );
};
