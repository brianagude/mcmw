import Image from 'next/image';
import PortableText from "@/components/portableText/PortableText";

export const EventsModule = ({ module }) => {
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString + 'T00:00:00Z'); // Convert to UTC by appending 'T00:00:00Z'
    const dayOfWeekIndex = date.getUTCDay(); // Use getUTCDay() to get the day of the week in UTC
    return daysOfWeek[dayOfWeekIndex];
  };

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00Z'); // Convert to UTC by appending 'T00:00:00Z'
    const options = { month: 'long', day: 'numeric', timeZone: 'UTC' }; // Specify UTC time zone
    return date.toLocaleDateString('en-US', options);
};

const getClassName = (date) => {
  const dayOfWeek = getDayOfWeek(date);
  switch (dayOfWeek) {
    case 'Wednesday':
      return 'bg-cream';
    case 'Monday':
    case 'Saturday':
      return 'bg-secondary';
    case 'Sunday':
    case 'Friday':
      return 'bg-primary';
    case 'Tuesday':
      return 'bg-green';
    case 'Thursday':
      return 'bg-purple';
    default:
      return '';
  }
};

  return (
    <section className="events-section page-section">
      <div className="container">
        {module.title && <h2 className='title'>{module.title}</h2>}

        <div className="events-wrapper">
          {module.eventItems.map((event, index) => (
            <div className={`event-item ${getClassName(event.date)}`} key={index}>
              <div>
                <h6>{getDayOfWeek(event.date)}</h6> {/* Get day of the week */}
                <h5>{getFormattedDate(event.date)}</h5> {/* Get formatted date */}
                <p>{event.location ? event.location : 'Location: TBA'}</p>
              </div>

              <div>
                <h6>{event.time}</h6>
                <h5>{event.title}</h5>
                {event.body && (
                  <PortableText
                    blocks={event.body}
                  />
                )}
              </div>

              <a href={event.eventLink} className='btn' target="blank">
                {event.buttonText ? event.buttonText : 'RSVP'}
                <Image
                  src='/icons/arrow.svg'
                  alt="chunky right arrow"
                  width={40}
                  height={32}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='media-block icon-wrapper cookie'>
        <Image
          src='/icons/cookie.png'
          alt="cookie icon"
          fill
        />
      </div>
      <div className='media-block icon-wrapper carton'>
        <Image
          src='/icons/carton.png'
          alt="milk carton icon"
          fill
        />
      </div>
      <div className='media-block icon-wrapper milk'>
        <Image
          src='/icons/milk.png'
          alt="milk icon"
          fill
        />
      </div>
    </section>
  );
};
