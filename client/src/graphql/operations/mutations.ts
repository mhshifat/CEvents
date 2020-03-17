import gql from "graphql-tag";
import { EVENT_FRAGMENT } from "./fragments";

export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent($input: CreateEventInput) {
    createEvent(input: $input) {
      ...Event
    }
  }

  ${EVENT_FRAGMENT}
`;

export const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEvent($eventId: ID!, $input: UpdateEventInput) {
    updateEvent(eventId: $eventId, input: $input) {
      ...Event
    }
  }

  ${EVENT_FRAGMENT}
`;

export const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEvent($eventId: ID!) {
    deleteEvent(eventId: $eventId) {
      ...Event
    }
  }

  ${EVENT_FRAGMENT}
`;
