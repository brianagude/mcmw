"use client"
import { urlForImage } from "@/sanity/utils/urlFor";
import Image from 'next/image';
import { useState, useRef } from 'react';

export const NewsletterModule = ({ module }) => {
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

  return (
    <section className="newsletter-section page-section">
      <div className="container">
        <Image
          src={urlForImage(module.backgroundImage.asset._ref).url()}
          fill
          alt={module.backgroundImage.alt}
        />

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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {showError && <p className="error-message">Please enter a valid email address.</p>}
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
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="subscribe-btn">
                      {module.submitText ? module.submitText : 'JOIN NOW'}
                      <Image
                        src='/icons/arrow-white.svg'
                        alt='chunky right arrow'
                        width={40}
                        height={32}
                      />
                    </button>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      {/* Hidden iframe for form submission */}
      <iframe
        name="hidden_iframe"
        style={{ display: 'none' }}
        ref={iframeRef}
        onLoad={handleIframeLoad}
      ></iframe>
    </section>
  );
};
