import styled from 'styled-components'

const EventContainer = styled.div`
`;

const Event = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  h2 {
    text-transform: uppercase;
    margin-top: 4px;
  }
`;

export default function Events({ events }) {
  const listEvents = events.map((event) =>
    <Event key={event.name}>
      <p>{ event.date } | { event.game }</p>
      <h2>{ event.name }</h2>
      {event.ctaText && event.ctaLink &&
        <a href={event.ctaLink} target="_blank" rel="noopener noreferrer">{ event.ctaText }</a>
      }
    </Event>
  );

  return (
    <EventContainer>
      { listEvents }
    </EventContainer>
  )
}
