import gql from "graphql-tag";
import { EVENT_FRAGMENT } from "./fragments";

export const GET_EVENTS_QUERY = gql`
  query GetEvents($eventDate: String) {
    events(eventDate: $eventDate) {
      ...Event
    }
  }

  ${EVENT_FRAGMENT}
`;
