import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../reduxToolkit/Comment/commentThunks";


const CommentInput = ({ user_id, product_id }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    if (comment.trim() === "") {
      alert("Por favor, introduce un comentario antes de enviar.");
      return;
    }

    dispatch(postComment({ user_id, product_id, comment }));
    setComment("");
  };

  return (
    <div className="">
      <textarea
        className=" border-chiliRed border p-4 mt-4 rounded-lg w-3/4 h-1/2 rounded-md p-2 text-black font-arial text-base"
        rows="3"
        placeholder="Deja tu comentario..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <br />
      <button
        className="bg-chiliRed text-whiteSmoke rounded-md w-1/5 p-2 mt-2 hover:shadow-lg"
        onClick={handlePostComment}
      >
        Enviar
      </button>
    </div>
  );
};

export default CommentInput;

