import LikeCommentshareData from "./likeCommentshare";
import { BiHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import PostModalForMedia from "../component/postModal";
function ExploreModalBuddy(props) {
  const [isFold, setFoldComment] = useState(false);
  const commentReff = useRef(null);
  const [comment, setComment] = useState([]);
  const [isanotherExplorePopup, setAnotherExplorePopup] = useState(false);

  useEffect(() => {
    if (comment.length > 1 && isFold === false) {
      setFoldComment(true);
    } else {
      setFoldComment(false);
    }
  }, [comment]);

  function handleClickBro(e) {
    let key = e.key;
    if (key === "Enter") {
      setComment([...comment, commentReff.current.value]);
      commentReff.current.value = "";
    }
  }
  function handleCancelPopupforExplore() {
    setAnotherExplorePopup(true);
  }
  function handlePostHideForExplore() {
    setAnotherExplorePopup(false);
  }
  return (
    <>
      <div className="explore_modal_container">
        <div
          className="explore_modal_overlay"
          onClick={props.handleHideModal}
        ></div>

        <div className="explore_modal_data_container">
          <div className="data_img_holder">
            <img src={props.source} alt="hii"></img>
          </div>

          <div className="popup_explore_details">
            <div className="header_of_explore">
              <div className="sub_header_title_explore">
                <img src={props.iconForHeaderImg} alt="hii"></img>
                <span>{props.username}</span>
                <span>
                  <sup>.</sup>
                </span>
                <span>Follow</span>
              </div>

              <h5 onClick={handleCancelPopupforExplore}>...</h5>
            </div>

            <div className="username_subtitile_explore">
              <img src={props.iconForHeaderImg} alt="hii"></img>
              <span>{props.username}</span>
            </div>

            <div className="comment_result_of_explorePopup">
              <div>
                <p
                  onClick={() => {
                    isFold === true
                      ? setFoldComment(false)
                      : setFoldComment(true);
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
            </div>

            <div className="likeCommentsharIcon_explorePopup">
              <div className="commentLike_box">
                <LikeCommentshareData
                  like="like"
                  nameOfClass="dataOFLikeCommentShare"
                  likeCommentShareClassName="likeCommentShare"
                  like_and_icon="icon&Like"
                  like_and_icon_for_reel="hide_icon_for_explore"
                  commentRef={commentReff}
                  ClickBro={handleClickBro}
                  heartIcon={<BiHeart />}
                  fillIcon={<FaHeart className="heartSecondIcon" />}
                  commentIcon={<FiMessageCircle />}
                  MessageIcon={<TfiLocationArrow />}
                  tag={<BsBookmark />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {isanotherExplorePopup ? (
          <PostModalForMedia HidePost={handlePostHideForExplore} />
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default ExploreModalBuddy;
