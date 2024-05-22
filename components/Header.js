import Image from 'next/image';
import { urlForImage } from "@/sanity/utils/urlFor";

export const SiteHeader = ({logo}) => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-logo">
          <a href="https://milkandcookiesfestival.com/" target="blank">
            <Image
              src={urlForImage(logo).url()}
              width={140}
              height={48}
              alt="Milk & Cookies logo"
              priority
            />
          </a>
        </div>
      </div>
    </header>
  );
};
