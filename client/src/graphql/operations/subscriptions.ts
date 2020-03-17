import gql from "graphql-tag";
import { EVENT_FRAGMENT } from "./fragments";

export const GET_EVENTS_SUBSCRIPTION = gql`
  subscription GetLiveEvents($eventDate: String) {
    events(eventDate: $eventDate) {
      ...Event
    }
  }

  ${EVENT_FRAGMENT}
`;
