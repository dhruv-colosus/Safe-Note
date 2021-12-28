import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { createNoteAction } from "../actions/notesAction";
import ReactMarkdown from "react-markdown";

import { useHistory } from "react-router-dom";

import "./CreateNote.css";
import { useDispatch, useSelector } from "react-redux";

const CreateNote = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error } = noteCreate;

  const resetHandler = () => {
    setContent("");
    setCategory("");
    setTitle("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;

    dispatch(createNoteAction(title, content, category));
    resetHandler();
    history.push("/mynotes");
  };
  return (
    <div className="center_create">
      {loading ? <Loading /> : ""}
      {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : ""}
      <Card className=" create_card">
        <Card.Header className="create_card_input_header">
          Enter Your Note Here
        </Card.Header>
        <Form>
          <Form.Group className="mb-3 create_card_input">
            <Form.Label className="create_card_input_heading">Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 create_card_input"
            controlId="formBasicPassword"
          >
            <Form.Label className="create_card_input_heading">
              Category
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg:- Urgent/Basic/ToDo"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 create_card_input"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="create_card_input_heading">
              Content
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              value={content}
              placeholder="Enter Your Note Here"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          {content && (
            <Card className="create_card_input my-3">
              <Card.Header>Note Preview</Card.Header>
              <Card.Body>
                <ReactMarkdown>{content}</ReactMarkdown>
              </Card.Body>
            </Card>
          )}
          <Button
            className="create_card_button"
            variant="primary"
            type="submit"
            onClick={(e) => submitHandler(e)}
          >
            Submit
          </Button>
        </Form>
        <Card.Footer className="text-muted">
          Your Note is safe with You :-)
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreateNote;
