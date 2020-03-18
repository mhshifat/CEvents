import React, { SyntheticEvent, useEffect, useState } from "react";
import { Accordion, Button, Card, Form, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  Event,
  useCreateEventMutation,
  useDeleteEventMutation,
  useGetEventsQuery,
  useGetLiveEventsSubscription,
  useUpdateEventMutation
} from "../../graphql/graphql";

interface Props {
  day: string;
  currentYear: string | number;
  currentMonth: string | number;
}

const DatePickerDay: React.FC<Props> = ({ day, currentMonth, currentYear }) => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const [events, setEvents] = useState<Event[]>([]);
  const [EditableEventId, setEditableEventId] = useState<
    string | number | null
  >(null);
  const [defaultValues, setDefaultValues] = useState({
    title: "",
    description: ""
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const { handleSubmit, register, errors, reset } = useForm();
  const {
    data: getEventsPayload = {
      events: []
    },
    loading: getEventsLoading,
    refetch
  } = useGetEventsQuery({
    variables: {
      eventDate: `${currentYear}-${currentMonth}-${day}`
    }
  });
  const { data: getLiveEventsPayload } = useGetLiveEventsSubscription({
    variables: {
      eventDate: `${currentYear}-${currentMonth}-${day}`
    }
  });
  const [
    createEvent,
    { loading: createEventLoading }
  ] = useCreateEventMutation();
  const [
    updateEvent,
    { loading: updateEventLoading }
  ] = useUpdateEventMutation();
  const [
    deleteEvent,
    { loading: deleteEventLoading }
  ] = useDeleteEventMutation();

  useEffect(() => {
    if (getLiveEventsPayload && getLiveEventsPayload.events.length) {
      setEvents(getLiveEventsPayload.events);
    } else {
      setEvents(getEventsPayload.events);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEventsPayload.events.length]);

  const onSubmit = (values: any) => {
    if (EditableEventId) {
      updateEvent({
        variables: {
          eventId: String(EditableEventId) || "",
          input: {
            ...values
          }
        }
      })
        .then(() => {
          refetch();
          reset();
          setDefaultValues({
            description: "",
            title: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      createEvent({
        variables: {
          input: {
            ...values,
            eventDate: `${currentYear}-${currentMonth}-${day}`
          }
        }
      })
        .then(() => {
          refetch();
          reset();
          setDefaultValues({
            description: "",
            title: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const loading = getEventsLoading;
  if (loading) return <Spinner animation="grow" />;
  return (
    <>
      <span
        style={{
          background:
            +day === date && currentMonth === month && currentYear === year
              ? "#ccc"
              : "transparent"
        }}
      >
        <span
          onClick={() => {
            setDefaultValues({
              title: "",
              description: ""
            });
            setShowModal(true);
            setEditableEventId(null);
          }}
          style={{
            background:
              getEventsPayload.events.length ||
                getLiveEventsPayload?.events.length
                ? "yellow"
                : "transparent"
          }}
        >
          {Math.sign(+day) === 1 ? day : ""}
        </span>
      </span>
      <Modal
        show={showModal}
        onHide={() => {
          setDefaultValues({
            title: "",
            description: ""
          });
          setShowModal(false);
          setEditableEventId(null);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Events: {`${currentYear}-${currentMonth}-${day}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!!events.length && (
            <Accordion>
              {events.map(
                (e, i) =>
                  e && (
                    <Card key={e.id}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={"div"}
                          variant="link"
                          eventKey={i.toString()}
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <span>{e.title}</span>
                          <span>
                            <Button
                              style={{
                                marginLeft: "10px"
                              }}
                              size="sm"
                              variant="primary"
                              onClick={(event: SyntheticEvent) => {
                                event.stopPropagation();
                                setEditableEventId(e.id);
                                setDefaultValues({
                                  title: e.title,
                                  description: e.description
                                });
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              style={{
                                marginLeft: "10px"
                              }}
                              size="sm"
                              variant="danger"
                              disabled={!!deleteEventLoading}
                              onClick={() => {
                                deleteEvent({
                                  variables: {
                                    eventId: e.id
                                  }
                                })
                                  .then(() => {
                                    refetch();
                                  })
                                  .catch(err => {
                                    console.log(err);
                                  });
                              }}
                            >
                              Delete
                            </Button>
                          </span>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={i.toString()}>
                        <Card.Body>{e.description}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
              )}
            </Accordion>
          )}
          <br />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Event Title: </Form.Label>
              <Form.Control
                type="text"
                name="title"
                as={"input"}
                defaultValue={defaultValues.title}
                // @ts-ignore
                ref={register({
                  required: "Event title is required!"
                })}
              />
            </Form.Group>
            <p style={{ color: "red" }}>
              {errors.title && errors.title.message}
            </p>

            <Form.Group controlId="exampleFormDescription">
              <Form.Label>Event Description: </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="description"
                defaultValue={defaultValues.description}
                // @ts-ignore
                ref={register({
                  required: "Event description is required!"
                })}
              />
            </Form.Group>
            <p style={{ color: "red" }}>
              {errors.description && errors.description.message}
            </p>

            <Button
              disabled={!!createEventLoading || !!updateEventLoading}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DatePickerDay;
