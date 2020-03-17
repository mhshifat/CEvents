import { withFilter } from "graphql-yoga";
import { IResolvers } from "../../types/graphql";

export const resolvers: IResolvers = {
  Query: {
    event: async (_, { eventId }, { models }) => models.Event.findById(eventId),
    events: async (_, { eventDate }, { models }) =>
      models.Event.find({ eventDate: eventDate || "" })
  },
  Mutation: {
    createEvent: async (_, { input }, { models, pubsub }) => {
      const createdEvent = await models.Event.create(input);
      pubsub.publish("EVENT", {
        eventDate: input?.eventDate,
        events: await models.Event.find({
          eventDate: input?.eventDate || undefined
        })
      });
      return createdEvent;
    },
    updateEvent: async (_, { eventId, input }, { models, pubsub }) => {
      const updatedEvent = await models.Event.findByIdAndUpdate(
        eventId,
        input,
        { new: true }
      );
      pubsub.publish("EVENT", {
        eventDate: updatedEvent?.eventDate,
        events: await models.Event.find({
          eventDate: updatedEvent?.eventDate || undefined
        })
      });
      return updatedEvent;
    },
    deleteEvent: async (_, { eventId }, { models, pubsub }) => {
      const deletedEvent = await models.Event.findByIdAndRemove(eventId);
      pubsub.publish("EVENT", {
        eventDate: deletedEvent?.eventDate,
        events: await models.Event.find({
          eventDate: deletedEvent?.eventDate || undefined
        })
      });
      return deletedEvent;
    }
  },
  Subscription: {
    events: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator("EVENT"),
        (parent, args) => {
          return parent.eventDate === args.eventDate;
        }
      )
    }
  }
};
