import React, { useState, useEffect } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import "./MyNotes.css";
import axios from "axios";

function MyNotes() {
  const [show, setShow] = useState(false);
  const [modalNote, setmodalNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    const modalNotee = notes.find((note) => note._id === id);
    setmodalNote(modalNotee);
  };
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
    }
  };
  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:4000/api/notes/");
    setNotes(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcome Back Dhruv Deora">
      <div className="addnote_btn_div">
        <Link to="/createnewnote">
          <Button className="addnote_btn" style={{}} size="lg">
            +
          </Button>
        </Link>
      </div>
      <div className="mynotes_div">
        {notes.map((note) => {
          return (
            <>
              <Card
                onClick={() => handleShow(note._id)}
                className="card_body"
                key={note._id}
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                    {note.title.slice(0, 20)}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.94rem", fontWeight: "300" }}>
                    {note.content.slice(0, 120)}
                  </Card.Text>
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
                </Card.Body>
              </Card>

              <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="modal_title">
                    {modalNote.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal_body">
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
                  Last Updated on 12:06 AM AUG 13
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
