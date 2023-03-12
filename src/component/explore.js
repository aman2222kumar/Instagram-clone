import { useContext, useState } from "react";

import { userDataContext } from "../mainContent.js";
import ExploreModalBuddy from "./exploreModal.js";

function ExplorBro(props) {
  let r = {};
  const [username, setUsername] = useState("");
  const [isIcon, setIcon] = useState("");

  const dataForExplore = useContext(userDataContext);

  const [isPopupPic, setPopupPic] = useState("");
  const [isShowingImageDataPopup, setShowingImageDataPopup] = useState(false);

  function handleClickImages(e) {
    setPopupPic(e.target.src);
    setShowingImageDataPopup(true);
    r = dataForExplore.find((v) => parseInt(e.target.alt) === v.id);
    setUsername(r.userName);
    setIcon(r.icon);
  }

  function hideImageDataPopup() {
    setShowingImageDataPopup(false);
  }

  return (
    <>
      <div className="explore_container">
        {dataForExplore.map((item) => {
          return (
            <>
              <div className="itemContainer_explore">
                <div className="explore_container" key={item.id}>
                  <img
                    src={item.icon}
                    alt={item.id}
                    onClick={handleClickImages}
                  ></img>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <>
        {isShowingImageDataPopup ? (
          <>
            <ExploreModalBuddy
              handleHideModal={hideImageDataPopup}
              source={isPopupPic}
              iconForHeaderImg={isIcon}
              username={username}
            />
          </>
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default ExplorBro;
