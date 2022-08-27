import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getSingleNote, updateNoteAction } from "../actions/notesAction";
import ReactMarkdown from "react-markdown";

import { useHistory, useParams } from "react-router-dom";

import "./CreateNote.css";
import { useDispatch, useSelector } from "react-redux";

function SingleNote() {
  const history = useHistory();
  const id = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;
  const noteGet = useSelector((state) => state.noteGet);
  const { data, error: error2 } = noteGet;

  const resetHandler = () => {
    setContent("");
    setCategory("");
    setTitle("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;

    dispatch(updateNoteAction(id.id, title, content, category));
    resetHandler();
    history.push("/mynotes");
  };
  useEffect(() => {
    const fetching = async () => {
      // const { data } = await axios.get(
      //   `http://localhost:4000/api/notes/${id.id}`
      // );
      await dispatch(getSingleNote(id.id));
      console.log(data);
      setContent(data != undefined ? data.content : "");
      setCategory(data != undefined ? data.category : "");
      setTitle(data != undefined ? data.title : "");
      setDate(data != undefined ? data.updatedAt : "");
    };

    fetching();
  }, [id.id, date]);
  return (
    <div className="center_create">
      {loading ? <Loading /> : ""}
      {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : ""}
      <Card className=" create_ca =rd">
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
            Update
          </Button>
        </Form>
        <Card.Footer className="text-muted">
          Your Note is safe with You :-)
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SingleNote;
