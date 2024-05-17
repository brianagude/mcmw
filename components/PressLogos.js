import Image from 'next/image';
import { urlForImage } from "@/sanity/utils/urlFor";

export const PressLogos = ({ module }) => {
  return (
    <section className="press-logos page-section">
      <div className="container">
        {module.title && <h2 className='title'>{module.title}</h2>}

        <div className="press-logos">
          {module.items.map((item, index) => (
            <div className="press-logo" key={index}>
                <Image
                  src={urlForImage(item.asset._ref).url()}
                  fill
                  alt='Brand Logo'
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
