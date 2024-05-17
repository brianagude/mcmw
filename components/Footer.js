import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from "@/sanity/utils/urlFor";
import PortableText from "@/components/portableText/PortableText";

export const SiteFooter = ({settings}) => {
  const currentYear = new Date().getFullYear();
  const renderLinks = settings.footer?.links?.map((link) => {
    if (link._type === "linkExternal") {
      return (
        <div className="mb-6" key={link._key}>
          <a
            className="linkTextNavigation"
            href={link.url}
            rel="noreferrer"
            target={link.newWindow ? "_blank" : "_self"}
          >
            {link.icon ? (
              <Image
                src={urlForImage(link.icon.asset._ref).url()}
                width={24}
                height={24}
                alt="Footer Link Icon"
              />
            ) : (
              link.title
            )}
          </a>
        </div>
      );
    }
    if (link._type === "linkInternal") {
      if (!link.slug) {
        return null;
      }

      return (
        <div className="mb-6" key={link._key}>
          <Link className="linkTextNavigation" url={link.slug}>
            {link.title}
          </Link>
        </div>
      );
    }
    return null;
  });
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">
          <div className="footer-logo">
            <a href="https://milkandcookiesfestival.com/">
              <Image
                src={urlForImage(settings.footerLogo).url()}
                width={272}
                height={80}
                alt="Milk & Cookies logo"
                priority
              />
            </a>
          </div>
          {settings.footer?.text && (
            <PortableText
              blocks={settings.footer.text}
            />
          )}
          {renderLinks}
        </div>
        <div className="footer-fine-print">
          <p>&copy;{currentYear} {settings.finePrint}</p>
        </div>
      </div>
    </footer>
  );
};
