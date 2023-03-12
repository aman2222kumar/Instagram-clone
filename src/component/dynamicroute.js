import { BsGearWide } from "react-icons/bs";
import { MdOutlineGridOn } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import { RiUser6Line } from "react-icons/ri";
import { useState } from "react";
function DynamicUserProfile(props) {
  const [isClickingTag, setclickingTag] = useState([false, false, false]);

  function handleclickForLayoutChange() {
    setclickingTag([true, false, false]);
  }
  function handleclickForLayoutChangeSecond() {
    setclickingTag([false, true, false]);
  }
  function handleclickForLayoutChangethird() {
    setclickingTag([false, false, true]);
  }
  return (
    <>
      <div className="userprofile_container">
        <div className="userProfile_header_fordynamic">
          <img
            src={props.dynamicImg}
            alt={props.Dynamic_id}
            className="dynamic_img_tag"
          ></img>
          <div className="user_data_header_textside_fordynamic">
            <div className="userProfile_header_data_text_first">
              <span>{props.usernameBro}</span>
              <button>Edit Profile</button>
              <span className="gearBtn_dynamic">
                <BsGearWide />
              </span>
            </div>
            <div className="userProfile_header_data_text_first">
              <span>
                <span>{props.Postscount}</span>
                <span>posts</span>
              </span>
              <span>
                <span>{props.followersCount}</span>
                <span>followers</span>
              </span>
              <span>
                <span>{props.followingCount}</span>
                <span>following</span>
              </span>
            </div>
            <div className="userProfile_header_data_text_third">
              <span>{props.profileName}</span>
              <span>{props.userDescription}</span>
            </div>
          </div>
        </div>

        <div className="userProfile_subHeader_userPostetc_container">
          <div className="layout_forUserProfile_data">
            <h3
              className={
                isClickingTag[0]
                  ? "layout_for_userProfile_click_layout_active"
                  : "layout_for_userProfile"
              }
              onClick={handleclickForLayoutChange}
            >
              <span>
                <MdOutlineGridOn />
              </span>
              <span>POSTS</span>
            </h3>

            <h3
              className={
                isClickingTag[1]
                  ? "layout_for_userProfile_click_layout_active"
                  : "layout_for_userProfile"
              }
              onClick={handleclickForLayoutChangeSecond}
            >
              <span>
                <FiBookmark />
              </span>
              <span>SAVED</span>
            </h3>

            <h3
              className={
                isClickingTag[2]
                  ? "layout_for_userProfile_click_layout_active"
                  : "layout_for_userProfile"
              }
              onClick={handleclickForLayoutChangethird}
            >
              <span>
                <RiUser6Line />
              </span>
              <span>TAGGED</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicUserProfile;
