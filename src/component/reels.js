import video1 from "../videos/ccc.mp4";
import video2 from "../videos/Countdown3.mp4";
import video3 from "../videos/Gluehlampen1_1.mp4";
import LikeCommentshareData from "./likeCommentshare";
import { BiHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import { useRef, useState } from "react";

function ReelsBro() {
  const commentReff = useRef(null);
  const [comment, setComment] = useState([]);
  function handleClickBro(e) {
    let key = e.key;
    if (key === "Enter") {
      setComment([...comment, commentReff.current.value]);
      commentReff.current.value = "";
    }
  }
  const arrayOfVideos = [
    {
      id: 1,
      video: video1,
    },
    {
      id: 2,
      video: video2,
    },
    {
      id: 3,
      video: video3,
    },
  ];
  return (
    <>
      <div className="reels_container">
        <div className="reel_video-container">
          {arrayOfVideos.map((item) => {
            return (
              <>
                <div className="sub_reel_video-container" key={item.id}>
                  <video
                    loop={true}
                    src={item.video}
                    width={400}
                    height={600}
                    controls
                  ></video>
                  <LikeCommentshareData
                    likeCountClassName="like_count_nameOFclass"
                    nameOfClass="data_parent_reel_LikeSection"
                    likeCommentShareClassName="likeCommentShare_reels"
                    like_and_icon="like_and_icon_display"
                    commentRef={commentReff}
                    ClickBro={handleClickBro}
                    heartIcon={<BiHeart className="heartIcon_reel" />}
                    fillIcon={<FaHeart className="heartSecondIcon_reel" />}
                    commentIcon={<FiMessageCircle />}
                    MessageIcon={<TfiLocationArrow />}
                    tag={<BsBookmark />}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ReelsBro;
