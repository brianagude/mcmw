"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { urlForImage } from "@/sanity/utils/urlFor";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export const CarouselModule = ({ module }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const sliderOptions = {
    initial: 0,
    loop: true,
    breakpoints: {
      "(min-width: 424px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 10 },
      },
      
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  return (
    <section className="carousel-section page-section card-carousel">
      <div className="container">
        {module.title && <h2 className='title'>{module.title}</h2>}

        <div className="navigation-wrapper carousel-items">
          <div ref={sliderRef} className="keen-slider">
            {module.items.map((item, index) => (
              <div className={`keen-slider__slide number-slide${index} carousel-item card`} key={index}>
                <div className="media-block">
                  <Image
                    src={urlForImage(item.image.asset._ref).url()}
                    fill
                    alt={item.image.alt || 'Talent Headshot'}
                  />
                </div>
                {item.title && <h5 className='card-title'>{item.title}</h5>}
                {item.subtitle && <p className='card-text'>{item.subtitle}</p>}
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="arrow-wrapper">
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`keen-arrow ${props.left ? "arrow-left" : "arrow-right"}${disabled}`}
    >
      {props.left ? (
        <img src='/icons/arrow-left.svg' alt='left arrow' />
      ) : (
        <img src='/icons/arrow-right.svg' alt='right arrow' />
      )}
    </div>
  );
}
