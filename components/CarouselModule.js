"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { urlForImage } from "@/sanity/utils/urlFor";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export const CarouselModule = ({ module }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const cardCarousel = module.items.some(item => item.title || item.text);

  const sliderOptions = {
    initial: 0,
    loop: cardCarousel ? true : false,
    breakpoints: cardCarousel ? {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
      
    } : {
      "(min-width: 640px)": {
        slides: { perView: 3 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 5 },
      },
    },
    slides: { perView: cardCarousel ? 1 : 2 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  return (
    <section className={`carousel-section page-section ${cardCarousel ? 'card-carousel' : 'press-logo-section'}`}>
      <div className="container">
        {module.title && <h2 className='title'>{module.title}</h2>}

        <div className="navigation-wrapper carousel-items">
          <div ref={sliderRef} className="keen-slider">
            {module.items.map((item, index) => (
              <div className={`keen-slider__slide number-slide${index} carousel-item ${cardCarousel ? 'card' : 'press-logo'}`} key={index}>
                <div className="media-block">
                  <Image
                    src={urlForImage(item.image.asset._ref).url()}
                    fill
                    alt={item.image.alt || (cardCarousel ? 'Talent Headshot' : 'Brand Logo')}
                  />
                </div>
                {item.title && <h5 className='card-title'>{item.title}</h5>}
                {item.subtitle && <p className='card-text'>{item.subtitle}</p>}
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && cardCarousel && (
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

          {loaded && instanceRef.current && !cardCarousel && (
            <div className="keen-dots">
              {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
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
