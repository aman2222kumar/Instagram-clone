import { useState } from "react";

function LikeCommentshareData(props) {
  const [likesCount, setLikesCount] = useState(null);

  function handleLikesCount() {
    if (likesCount === null) {
      setLikesCount((prev) => prev + 1);
    } else {
      setLikesCount(null);
    }
  }
  return (
    <>
      <div className={props.nameOfClass}>
        <div className={props.likeCommentShareClassName}>
          <p onClick={handleLikesCount}>
            {likesCount === 1 ? props.fillIcon : props.heartIcon}
          </p>
          <div className={props.like_and_icon_for_reel}>
            <span className={props.likeCountClassName}>
              {likesCount ?? "0"}
            </span>{" "}
            <span>{props.like}</span>
            {likesCount > 1 ? "s" : ""}
          </div>

          <p style={{ transform: "rotate(-85deg)" }}>{props.commentIcon}</p>
          <p style={{ transform: "rotate(90deg)" }}>{props.MessageIcon}</p>
        </div>
        <p className="taggoesLeft">{props.tag}</p>
      </div>

      <div className="likeCountCaption">
        <div className={props.like_and_icon}>
          <span className={props.likeCountClassName}>{likesCount}</span>{" "}
          <span>{props.like}</span>
          {likesCount > 1 ? "s" : ""}
        </div>
      </div>

      <div className="commentSection">
        <input
          type={"text"}
          style={{
            width: "100%",
            padding: "1rem",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
          ref={props.commentRef}
          onKeyDown={props.ClickBro}
          placeholder="Add a comment.."
        ></input>
      </div>
    </>
  );
}

export default LikeCommentshareData;
