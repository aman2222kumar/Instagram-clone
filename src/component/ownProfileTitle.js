import aman from "../aman.jpg";
import superman from "./supermsan.jpg";
import fairy from "./fairy.png";
import tom from "./tom.png";
import { useContext } from "react";
import { userDataContext } from "../mainContent";
import { Link } from "react-router-dom";
function ProfileTitle(props) {
  const arraySuggestion = [
    {
      suggestion_img: superman,
      suggestion_title: "superman_hero",
      suggestion_follow: "Follow",
    },
    {
      suggestion_img: fairy,
      suggestion_title: "fairy_cute",
      suggestion_follow: "Follow",
    },
    {
      suggestion_img: tom,
      suggestion_title: "tom_cat",
      suggestion_follow: "Follow",
    },
  ];
  const data = useContext(userDataContext);

  return (
    <>
      <div className="profile_title_Container">
        <div className="subProfile_tite_container">
          <Link to={`/${data[0].userName}`} className="refrenceForRoute">
            <div
              className="profile_titleText_img_container"
              onClick={props.handleHome}
            >
              <img src={aman} alt="profile"></img>
              <div className="profiletitleName">
                <h5>{data[0].userName}</h5>
                <h5>{data[0].profileName}</h5>
              </div>
            </div>
          </Link>

          <h5 className="Switchtext_for_profile">Switch</h5>
        </div>

        <div className="subProfile_tite_container">
          <div className="profile_titleText_img_container">
            <p>Suggestions for you</p>
          </div>

          <h5>See All</h5>
        </div>
        <>
          {arraySuggestion.map((item) => {
            return (
              <>
                <div className="subProfile_tite_container">
                  <div className="profile_subText_img_container">
                    <img src={item.suggestion_img} alt="superman"></img>
                    <div className="profiletitleName">
                      <h5>{item.suggestion_title}</h5>
                    </div>
                  </div>

                  <h5 className="Switchtext_for_profile">
                    {item.suggestion_follow}
                  </h5>
                </div>
              </>
            );
          })}
        </>
      </div>
    </>
  );
}
export default ProfileTitle;
