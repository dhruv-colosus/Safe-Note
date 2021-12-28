import React, { useState, useEffect } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";

import MainScreen from "../../Components/MainScreen";
import "./MyNotes.css";
import { useDispatch, useSelector } from "react-redux";
import { listNotes, deleteNoteAction } from "../../actions/notesAction";

function MyNotes({ search }) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [modalNote, setmodalNote] = useState("");
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    const modalNotee = notes.find((note) => note._id === id);
    setmodalNote(modalNotee);
  };
  // eslint-disable-next-line
  const modalShow = (id) => {
    handleShow();
    console.log("Hello");
    const modalNote = notes.find((note) => note._id === id);
    return (
      <>
        <h1>Hello{modalNote.title}</h1>
      </>
    );
  };
  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      dispatch(deleteNoteAction(id));
    }
  };
  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    dispatch(listNotes());
  }, [
    dispatch,
    userInfo,
    history,
    successCreate,
    successUpdate,
    successDelete,
  ]);
  return (
    <MainScreen title={`Welcome Back ${userInfo.name}`}>
      <div className="addnote_btn_div">
        <Link to="/createnote">
          <Button className="addnote_btn" style={{}} size="lg">
            +
          </Button>
        </Link>
      </div>
      <div className="mynotes_div">
        {loading ? <Loading /> : ""}
        {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : ""}
        {loadingDelete ? <Loading /> : ""}
        {errorDelete ? (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        ) : (
          ""
        )}
        {notes
          ?.reverse()
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => {
            return (
              <>
                <Card
                  className="card_body"
                  key={note._id}
                  style={{ width: "18rem" }}
                >
                  <Card.Body onClick={() => handleShow(note._id)}>
                    <Card.Title
                      style={{ fontSize: "1.4rem", fontWeight: "700" }}
                    >
                      {note.title.slice(0, 20)}
                    </Card.Title>
                    <Card.Text
                      style={{ fontSize: "0.94rem", fontWeight: "300" }}
                    >
                      <ReactMarkdown>
                        {note.content.slice(0, 120)}
                      </ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                  <div className="note_btns">
                    <Button
                      className="btn_edit"
                      variant="primary"
                      href={`/note/${note._id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn_delete"
                      onClick={(e) => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>

                <Modal show={show} centered onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="modal_title">
                      {modalNote.title}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal_body">
                    <ReactMarkdown> {modalNote.content}</ReactMarkdown>
                    {modalNote.content}
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      style={{
                        position: "absolute",
                        left: 10,
                        backgroundColor: "yellowgreen",
                        border: "0px solid",
                      }}
                      href={`/note/${modalNote._id}`}
                    >
                      Edit
                    </Button>
                    Last Updated on {note.createdAt.substring(0, 10)}
                  </Modal.Footer>
                </Modal>
              </>
            );
          })}
      </div>
    </MainScreen>
  );
}

export default MyNotes;
