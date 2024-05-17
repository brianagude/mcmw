import Image from 'next/image';
import { urlForImage } from "@/sanity/utils/urlFor";
import Marquee from "react-fast-marquee";


export const Hero = ({content}) => {
  const hero = content.hero
  return (
    <section className="hero-section page-section">
      <div className="container">
        {content.scrollMarquee && content.marqueeText && 
          <Marquee
            className="linkbar-marquee"
            autoFill
            play={content.scrollMarquee}
          >
            {content.marqueeText}
          </Marquee>
        }
        <Image
          src={urlForImage(hero.backgroundImage.asset._ref).url()}
          fill
          alt={hero.backgroundImage.alt}
          priority
        />
        <div className="header-content">
          <h1><span>{hero.title}</span><span>{hero.subtitle}</span></h1>
        </div>
      </div>
    </section>
  );
};
