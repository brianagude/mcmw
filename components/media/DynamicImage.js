import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export default async function DynamicImage({ src, alt = 'Alt text is missing', className = 'static-image', width, height, priority=false }){
  const buffer = await fetch(src).then(async (res)=>{
    return Buffer.from(await res.arrayBuffer())
  })

  const { base64 } = await getPlaiceholder(buffer)

  return (
    <div className="media-block">
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
        className={className}
        priority={priority}
        {...(width && height ? { width, height } : { fill: true })}
      />
    </div>
  )
}