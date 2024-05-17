import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

export default async function StaticImage({ src, alt = 'Alt text is missing', className = 'static-image', width, height, priority=false, border }) {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className={`media-block ${border && 'border'} ${className}`}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
        priority={priority}
        {...(width && height ? { width, height } : { fill: true })}
      />
    </div>
  );
}
