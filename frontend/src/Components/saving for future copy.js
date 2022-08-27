import React, { useState, useEffect } from "react";
import "./ShareNote.css";
import { useParams, useHistory } from "react-router-dom";
import dance from "../images/dance.gif";
import dance2 from "../images/fortnite-dance.gif";
import axios from "axios";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { shareNoteAction } from "../actions/notesAction";

function ShareNote() {
  // const [note, setNote] = useState({});

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const id = useParams();

  const dispatch = useDispatch();
  const noteShare = useSelector((state) => state.shareNote);
  const [notess, setNotess] = useState();
  const { loading, error, data } = noteShare;
  const history = useHistory();
  const fetching = async () => {
    // const { data } = await axios.get(
    //   `http://localhost:4000/api/notes/share/${id.id}`
    // );

    await dispatch(shareNoteAction(id.id));

    setContent(data !== undefined ? data.content : "s");
    setCategory(data !== undefined ? data.category : "");
    setTitle(data !== undefined ? data.title : "");
    setNotess(data !== undefined ? data : "");
    // history.push(`/share${id.id}`);
    console.log("Function Ran");
  };
  useEffect(() => {
    fetching();
    console.log("Function Ran 2");
  }, [id.id]);

  return (
    <>
      {loading ? <Loading /> : ""}
      {/* {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> : ""} */}
      {notess && notess.title ? (
        <div className="share-container">
          <h1>{title}</h1>
          <h3>{category}</h3>
          <p>{content}</p>
        </div>
      ) : (
        <div className="not-auth">
          <div className="dance-div">
            <h1>NOT AUTHORISED LMAO</h1>
            <h4>Make Note Public First</h4>
            <img src={dance} alt="Lol Not Auth" />
            <img src={dance2} alt="Lol Not Auth 2" />
          </div>
        </div>
      )}
    </>
  );
}

export default ShareNote;
