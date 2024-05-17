import 'keen-slider/keen-slider.min.css';
import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { Hero } from "@/components/Hero";
import { CarouselModule } from "@/components/CarouselModule"; // Corrected import
import { EventsModule } from "@/components/EventsModule"; // Corrected import
import { NewsletterModule } from "@/components/NewsletterModule"; // Corrected import
import { NewsletterPopupModule } from "@/components/NewsletterPopupModule"; // Corrected import

const query = groq`
  *[_type == "home"][0]{
    modules,
    scrollMarquee,
    marqueeText,
    hero,
  }
`;

export default async function Home() {
  const home = await client.fetch(query);

  return (
    <main className="page-wrapper">
      <Hero content={home} />
      {home.modules && (
        <div className="module-wrapper">
          {home.modules.map((module: { _type: string; _key: string; }) => {
            switch (module._type) {
              case "module.carousel":
                return <CarouselModule module={module} key={module._key} />;
              case "module.event":
                return <EventsModule module={module} key={module._key} />;
              case "module.newsletter":
                return <NewsletterModule module={module} key={module._key} />;
              case "module.newsletterPopup":
                return <NewsletterPopupModule module={module} key={module._key} />;
              default:
                return null;
            }
          })}
        </div>
      )}
    </main>
  );
}
