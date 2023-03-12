import { useEffect, useRef, useState } from "react";
import PostModalForMedia from "./component/postModal";

function Media(props) {
  const [likesCount, setLikesCount] = useState(null);
  const [isPostModalActive, setPostModalActive] = useState(false);
  const [comment, setComment] = useState([]);
  const [isFold, setFoldComment] = useState(false);
  const commentRef = useRef(null);

  useEffect(() => {
    if (comment.length > 1 && isFold === false) {
      setFoldComment(true);
    } else {
      setFoldComment(false);
    }
  }, [comment]);

  function handleSubmitBro(e) {
    let key = e.key;
    if (key === "Enter") {
      setComment([...comment, commentRef.current.value]);
      commentRef.current.value = "";
    }
  }

  function handleLikesCount() {
    if (likesCount === null) {
      setLikesCount((prev) => prev + 1);
    } else {
      setLikesCount(null);
    }
  }

  function handleModalForPostDetails() {
    if (isPostModalActive === false) {
      setPostModalActive(true);
    }
  }
  function handlePostHideForProfile() {
    setPostModalActive(false);
  }
  return (
    <>
      <div className="Media">
        <div className="Media_icons">
          <div className="subMediaData">
            <img src={props.icon} alt="img"></img>
            <p>{props.posterName}</p>
          </div>

          <span
            style={{ fontSize: "2rem" }}
            onClick={handleModalForPostDetails}
          >
            {props.dot}
          </span>
        </div>

        <div className="Media_img_data">
          <img src={props.imageData} alt="img"></img>
          <div className="dataOFLikeCommentShare">
            <div className="likeCommentShare">
              <p onClick={handleLikesCount}>
                {likesCount === 1 ? props.fillIcon : props.heartIcon}
              </p>
              <p
                style={{ transform: "rotate(-85deg)" }}
                onClick={props.commentPopup}
              >
                {props.commentIcon}
              </p>
              <p style={{ transform: "rotate(90deg)" }}>{props.MessageIcon}</p>
            </div>
            <p>{props.tag}</p>
          </div>
        </div>

        <div className="likeCountCaption">
          <div className="icon&Like">
            {likesCount} like{likesCount > 1 ? "s" : ""}
          </div>
          <p>Baby Girl</p>
        </div>
        <div>
          <p
            onClick={() => {
              isFold === true ? setFoldComment(false) : setFoldComment(true);
            }}
          >
            View All Comments
          </p>
          {isFold ? (
            <>
              <p>{comment.length}</p>
            </>
          ) : (
            comment.map((item, index) => {
              return (
                <>
                  <p key={index}>{item}</p>
                </>
              );
            })
          )}
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
            onKeyDown={handleSubmitBro}
            ref={commentRef}
            placeholder="Add a comment.."
          ></input>
        </div>
      </div>
      <>
        {isPostModalActive ? (
          <PostModalForMedia HidePost={handlePostHideForProfile} />
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default Media;
