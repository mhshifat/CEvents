import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateEventInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  eventDate: Scalars['String'];
};

export type Event = {
   __typename?: 'Event';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  eventDate: Scalars['String'];
  createdAt: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createEvent: Event;
  updateEvent?: Maybe<Event>;
  deleteEvent?: Maybe<Event>;
};


export type MutationCreateEventArgs = {
  input?: Maybe<CreateEventInput>;
};


export type MutationUpdateEventArgs = {
  eventId: Scalars['ID'];
  input?: Maybe<UpdateEventInput>;
};


export type MutationDeleteEventArgs = {
  eventId: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  event?: Maybe<Event>;
  events: Array<Event>;
};


export type QueryEventArgs = {
  eventId?: Maybe<Scalars['ID']>;
};


export type QueryEventsArgs = {
  eventDate?: Maybe<Scalars['String']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  events: Array<Event>;
};


export type SubscriptionEventsArgs = {
  eventDate?: Maybe<Scalars['String']>;
};

export type UpdateEventInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EventFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'id' | 'title' | 'description' | 'eventDate' | 'createdAt'>
);

export type CreateEventMutationVariables = {
  input?: Maybe<CreateEventInput>;
};


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & EventFragment
  ) }
);

export type UpdateEventMutationVariables = {
  eventId: Scalars['ID'];
  input?: Maybe<UpdateEventInput>;
};


export type UpdateEventMutation = (
  { __typename?: 'Mutation' }
  & { updateEvent: Maybe<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type DeleteEventMutationVariables = {
  eventId: Scalars['ID'];
};


export type DeleteEventMutation = (
  { __typename?: 'Mutation' }
  & { deleteEvent: Maybe<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type GetEventsQueryVariables = {
  eventDate?: Maybe<Scalars['String']>;
};


export type GetEventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export type GetLiveEventsSubscriptionVariables = {
  eventDate?: Maybe<Scalars['String']>;
};


export type GetLiveEventsSubscription = (
  { __typename?: 'Subscription' }
  & { events: Array<(
    { __typename?: 'Event' }
    & EventFragment
  )> }
);

export const EventFragmentDoc = gql`
    fragment Event on Event {
  id
  title
  description
  eventDate
  createdAt
}
    `;
export const CreateEventDocument = gql`
    mutation CreateEvent($input: CreateEventInput) {
  createEvent(input: $input) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export type CreateEventMutationFn = ApolloReactCommon.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;
export type CreateEventComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateEventMutation, CreateEventMutationVariables>, 'mutation'>;

    export const CreateEventComponent = (props: CreateEventComponentProps) => (
      <ApolloReactComponents.Mutation<CreateEventMutation, CreateEventMutationVariables> mutation={CreateEventDocument} {...props} />
    );
    
export type CreateEventProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateEventMutation, CreateEventMutationVariables> & TChildProps;
export function withCreateEvent<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateEventMutation,
  CreateEventMutationVariables,
  CreateEventProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateEventMutation, CreateEventMutationVariables, CreateEventProps<TChildProps>>(CreateEventDocument, {
      alias: 'createEvent',
      ...operationOptions
    });
};

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, baseOptions);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = ApolloReactCommon.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($eventId: ID!, $input: UpdateEventInput) {
  updateEvent(eventId: $eventId, input: $input) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export type UpdateEventMutationFn = ApolloReactCommon.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;
export type UpdateEventComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateEventMutation, UpdateEventMutationVariables>, 'mutation'>;

    export const UpdateEventComponent = (props: UpdateEventComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateEventMutation, UpdateEventMutationVariables> mutation={UpdateEventDocument} {...props} />
    );
    
export type UpdateEventProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateEventMutation, UpdateEventMutationVariables> & TChildProps;
export function withUpdateEvent<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateEventMutation,
  UpdateEventMutationVariables,
  UpdateEventProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateEventMutation, UpdateEventMutationVariables, UpdateEventProps<TChildProps>>(UpdateEventDocument, {
      alias: 'updateEvent',
      ...operationOptions
    });
};

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, baseOptions);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = ApolloReactCommon.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($eventId: ID!) {
  deleteEvent(eventId: $eventId) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export type DeleteEventMutationFn = ApolloReactCommon.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;
export type DeleteEventComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteEventMutation, DeleteEventMutationVariables>, 'mutation'>;

    export const DeleteEventComponent = (props: DeleteEventComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteEventMutation, DeleteEventMutationVariables> mutation={DeleteEventDocument} {...props} />
    );
    
export type DeleteEventProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteEventMutation, DeleteEventMutationVariables> & TChildProps;
export function withDeleteEvent<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteEventMutation,
  DeleteEventMutationVariables,
  DeleteEventProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteEventMutation, DeleteEventMutationVariables, DeleteEventProps<TChildProps>>(DeleteEventDocument, {
      alias: 'deleteEvent',
      ...operationOptions
    });
};

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, baseOptions);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = ApolloReactCommon.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const GetEventsDocument = gql`
    query GetEvents($eventDate: String) {
  events(eventDate: $eventDate) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export type GetEventsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetEventsQuery, GetEventsQueryVariables>, 'query'>;

    export const GetEventsComponent = (props: GetEventsComponentProps) => (
      <ApolloReactComponents.Query<GetEventsQuery, GetEventsQueryVariables> query={GetEventsDocument} {...props} />
    );
    
export type GetEventsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetEventsQuery, GetEventsQueryVariables> & TChildProps;
export function withGetEvents<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetEventsQuery,
  GetEventsQueryVariables,
  GetEventsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetEventsQuery, GetEventsQueryVariables, GetEventsProps<TChildProps>>(GetEventsDocument, {
      alias: 'getEvents',
      ...operationOptions
    });
};

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      eventDate: // value for 'eventDate'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, baseOptions);
      }
export function useGetEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, baseOptions);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = ApolloReactCommon.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetLiveEventsDocument = gql`
    subscription GetLiveEvents($eventDate: String) {
  events(eventDate: $eventDate) {
    ...Event
  }
}
    ${EventFragmentDoc}`;
export type GetLiveEventsComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<GetLiveEventsSubscription, GetLiveEventsSubscriptionVariables>, 'subscription'>;

    export const GetLiveEventsComponent = (props: GetLiveEventsComponentProps) => (
      <ApolloReactComponents.Subscription<GetLiveEventsSubscription, GetLiveEventsSubscriptionVariables> subscription={GetLiveEventsDocument} {...props} />
    );
    
export type GetLiveEventsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetLiveEventsSubscription, GetLiveEventsSubscriptionVariables> & TChildProps;
export function withGetLiveEvents<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLiveEventsSubscription,
  GetLiveEventsSubscriptionVariables,
  GetLiveEventsProps<TChildProps>>) {
    return ApolloReactHoc.withSubscription<TProps, GetLiveEventsSubscription, GetLiveEventsSubscriptionVariables, GetLiveEventsProps<TChildProps>>(GetLiveEventsDocument, {
      alias: 'getLiveEvents',
      ...operationOptions
    });
};

/**
 * __useGetLiveEventsSubscription__
 *
 * To run a query within a React component, call `useGetLiveEventsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveEventsSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveEventsSubscription({
 *   variables: {
 *      eventDate: // value for 'eventDate'
 *   },
 * });
 */
export function useGetLiveEventsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetLiveEventsSubscription, GetLiveEventsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetLiveEventsSubscription, GetLiveEventsSubscriptionVariables>(GetLiveEventsDocument, baseOptions);
      }
export type GetLiveEventsSubscriptionHookResult = ReturnType<typeof useGetLiveEventsSubscription>;
export type GetLiveEventsSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetLiveEventsSubscription>;