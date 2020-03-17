import gql from "graphql-tag";

export const EVENT_FRAGMENT = gql`
  fragment Event on Event {
    id
    title
    description
    eventDate
    createdAt
  }
`;
