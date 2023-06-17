import StoryLine from "./StoryLine";
import Media from "./Media";
// import icont from "./girlCute.jpg";
import { BiHeart } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdExplore } from "react-icons/md";

import { BiMoviePlay } from "react-icons/bi";
import { TfiHeart } from "react-icons/tfi";
import { BsPlusSquare } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { createContext, useState } from "react";
import SettingMenuBottom from "./settingsMenuBottom";
import UploadingImagesOrVideo from "./component/uploadingModalImageOrVideo";
import { BsFillPlusSquareFill } from "react-icons/bs";
import ProfileTitle from "./component/ownProfileTitle";
import SearchBar from "./component/searchBar";

//images
import aman from "./aman.jpg";
import doremon from "./dor.png";
import ks from "./KS.png";
import bodyBuilder from "./body.png";
import mouse from "./mouse.jpg";
import chulbule from "./chulbule.png";
import student from "./student.png";
import girlCute from "./girlCute.jpg";
import fairyGirl from "./component/fairy.png";
import tomcchar from "./component/tom.png";
import blackandwhitepic from "./images/blackandwhitepic.png";
import cutebear from "./images/cutebear.jpg";
import cutefish from "./images/cutefish.jpg";
import cutegoat from "./images/cutegot.jpg";
import dangerousGirl from "./images/dangrousgirl.jpg";
import crab from "./images/happycrab.jpg";
import happydog from "./images/happydog.jpg";
import innocentlookgirl from "./images/innocentlookinggirl.jpg";
import posegirl from "./images/posegirl.jpg";
import simpson from "./images/thesimpson.png";
import yellowgirl from "./images/yellowAndWhiteGirl.jpg";
import { Link, Route, Routes } from "react-router-dom";
import ExplorBro from "./component/explore";
import ReelsBro from "./component/reels";
import MessageRoute from "./component/messageroute";
import NotificationModal from "./component/notificationModal";
import DynamicUserProfile from "./component/dynamicroute";

export let userDataContext = createContext();

function MainContentSubParent() {
  const arrayOfUserData = [
    {
      id: 1,
      userName: "amanking_tremendous",
      profileName: "amanking",
      icon: aman,
    },
    {
      id: 2,
      userName: "doremon_1121",
      profileName: "doremon",
      icon: doremon,
    },

    {
      id: 3,
      userName: "ks",
      profileName: "ks",
      icon: ks,
    },
    {
      id: 4,
      userName: "bodybuilder_123",
      profileName: "bodybuilder",
      icon: bodyBuilder,
    },
    {
      id: 5,
      userName: "mouse_676",
      profileName: "mouse",
      icon: mouse,
    },
    {
      id: 6,
      userName: "chulbule",
      profileName: "chullbule",
      icon: chulbule,
    },
    {
      id: 7,
      userName: "student",
      profileName: "student",
      icon: student,
    },
    {
      id: 8,
      userName: "girlcute67",
      profileName: "girlCute",
      icon: girlCute,
    },
    {
      id: 9,
      userName: "fairy_cute",
      profileName: "fairygirl",
      icon: fairyGirl,
    },
    {
      id: 10,
      userName: "tom_1212324",
      profileName: "tom_cat",
      icon: tomcchar,
    },
    {
      id: 11,
      userName: "black_and_white_pic",
      profileName: "tremendous_girl",
      icon: blackandwhitepic,
    },
    {
      id: 12,
      userName: "cute_bear",
      profileName: "cuteBear",
      icon: cutebear,
    },
    {
      id: 13,
      userName: "cute_fish_78",
      profileName: "cutefish",
      icon: cutefish,
    },
    {
      id: 14,
      userName: "pyara_goat",
      profileName: "cutegoat",
      icon: cutegoat,
    },
    {
      id: 15,
      userName: "khatarnaak_ladki",
      profileName: "dangerous girl",
      icon: dangerousGirl,
    },
    {
      id: 16,
      userName: "crab_00",
      profileName: "crab_red",
      icon: crab,
    },
    {
      id: 17,
      userName: "happy_dog_889",
      profileName: "happyDog",
      icon: happydog,
    },
    {
      id: 18,
      userName: "innocent_girl",
      profileName: "innocentGirl",
      icon: innocentlookgirl,
    },
    {
      id: 19,
      userName: "pose_girl",
      profileName: "poseGirl",
      icon: posegirl,
    },
    {
      id: 20,
      userName: "simpsom",
      profileName: "simpson",
      icon: simpson,
    },
    {
      id: 21,
      userName: "yellow_girl",
      profileName: "yellowGirl",
      icon: yellowgirl,
    },
  ];

  //states
  const [isSettingDataVisible, setSettingDataVisible] = useState(false);

  const [isChangeTheme, setTheme] = useState(false);
  const [isUploadingModalActive, setUploadingActiveModal] = useState(false);
  const [isSearchModalActive, setSearchModalActive] = useState(false);
  const [isHome, setHome] = useState(true);
  const [isNotification, setnotificaation] = useState(false);

  //search bar
  const [iskeyPress, setKeyPress] = useState(false);
  const [searchData, setSearchData] = useState("");

  function handleDataOfSearch() {
    setSearchData("");
    setKeyPress(false);
  }

  function handleCheckKey(e) {
    if (iskeyPress === false) {
      setKeyPress(true);
    }
  }

  function handlecheckWhetherActive() {
    setKeyPress(true);
  }

  function handleChange(e) {
    setSearchData(e.target.value);
  }

  //functions

  function handleCommentPopupContent(e) {}

  function handleOpenNotficationModal() {
    setnotificaation(true);
  }

  function handleNotficationForhidingbro() {
    setnotificaation(false);
  }

  function handleOverlaySearchModal() {
    setSearchModalActive(false);
    setSearchData("");
  }
  function handleSearchModalOpen() {
    if (isSearchModalActive === false) {
      setSearchModalActive(true);
    } else {
      setSearchModalActive(false);
    }
  }
  function handleSettingMenu() {
    if (isSettingDataVisible === false) {
      setSettingDataVisible(true);
    } else {
      setSettingDataVisible(false);
    }
  }

  function handleModal() {
    setSettingDataVisible(false);
  }
  function handleChangeTheme() {
    if (isChangeTheme === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }

  function handleModalOfUploadingImagesOrVideo() {
    if (isUploadingModalActive === false) {
      setUploadingActiveModal(true);
    } else {
      setUploadingActiveModal(false);
    }
  }

  function handleGalleryModal() {
    setUploadingActiveModal(false);
  }
  function handleHomeBro() {
    setHome(true);
  }
  function handleHomeBuddyForFalsy() {
    setHome(false);
  }
  return (
    <userDataContext.Provider value={arrayOfUserData}>
      <>
        <div
          id="Main_Content_Sub"
          className={
            isChangeTheme ? "Main_Content_black" : "Main_Content_white"
          }
        >
          <section className="sec1">
            <div className="Desktop_left_side_menu ">
              <div className="instaIcon">
                {isSearchModalActive || isNotification ? (
                  <BsInstagram className="icon_Size" />
                ) : (
                  <span>
                    <BsInstagram id="icon_responsive_instagram_text" />
                    <span className="instagram_text">Instagram</span>
                  </span>
                )}
              </div>

              <div className="leftIconList leftIconResponsive">
                <div className="helloBackgroundColorForResponsive"></div>
                {/* home icon */}
                <Link to="/" className="refrenceForRoute">
                  {" "}
                  <div
                    className="List_Data_Child homeBro"
                    onClick={handleHomeBro}
                  >
                    {isHome ? (
                      <AiTwotoneHome className="icon_Size" />
                    ) : (
                      <AiOutlineHome className="icon_Size" />
                    )}
                    {isSearchModalActive || isNotification ? (
                      ""
                    ) : (
                      <span>Home</span>
                    )}
                  </div>
                </Link>
                {/* search*/}
                <div
                  className="List_Data_Child searchBro"
                  onClick={handleSearchModalOpen}
                >
                  <AiOutlineSearch className="icon_Size" />
                  {isSearchModalActive || isNotification ? (
                    ""
                  ) : (
                    <span>Search</span>
                  )}
                </div>

                {/* explore */}
                <Link to="/component/explore" className="refrenceForRoute">
                  <div
                    className="List_Data_Child exploreBro"
                    onClick={handleHomeBuddyForFalsy}
                  >
                    <MdExplore className="icon_Size" />
                    {isSearchModalActive || isNotification ? (
                      ""
                    ) : (
                      <span>Explore</span>
                    )}
                  </div>
                </Link>
                {/* reels */}
                <Link to="/component/reels" className="refrenceForRoute">
                  <div
                    className="List_Data_Child ReelsBro"
                    onClick={handleHomeBuddyForFalsy}
                  >
                    <BiMoviePlay className="icon_Size" />
                    {isSearchModalActive || isNotification ? (
                      ""
                    ) : (
                      <span>Reels</span>
                    )}
                  </div>
                </Link>

                {/* message */}
                <Link to="/component/messageroute" className="refrenceForRoute">
                  <div
                    className="List_Data_Child messageBro"
                    onClick={handleHomeBuddyForFalsy}
                  >
                    <TfiLocationArrow className="arrowRotate" />
                    {isSearchModalActive || isNotification ? (
                      ""
                    ) : (
                      <span>Messages</span>
                    )}
                  </div>
                </Link>
                {/* notification */}
                <div
                  className="List_Data_Child notificationBro"
                  onClick={handleOpenNotficationModal}
                >
                  <TfiHeart className="icon_Size" />
                  {isSearchModalActive || isNotification ? (
                    ""
                  ) : (
                    <span>Notifications</span>
                  )}
                </div>
                {/* create */}
                <div
                  className="List_Data_Child createBro"
                  onClick={handleModalOfUploadingImagesOrVideo}
                >
                  {isUploadingModalActive ? (
                    <BsFillPlusSquareFill />
                  ) : (
                    <BsPlusSquare className="icon_Size" />
                  )}
                  {isSearchModalActive || isNotification ? (
                    ""
                  ) : (
                    <span
                      style={{
                        fontWeight: isUploadingModalActive ? "bolder" : "",
                      }}
                    >
                      Create
                    </span>
                  )}
                </div>

                <div className="profileWithImg"></div>
              </div>
            </div>

            <div className="bottom_left_side_menu">
              {isSettingDataVisible && (
                <SettingMenuBottom
                  Change={handleChangeTheme}
                  click={handleModal}
                />
              )}

              <div className="List_Data_Child">
                <HiMenu onClick={handleSettingMenu} className="HiMenu" />
                {isSearchModalActive || isNotification ? (
                  ""
                ) : (
                  <span style={{ position: "relative", bottom: "-0.3rem" }}>
                    More
                  </span>
                )}
              </div>
            </div>
          </section>

          <>
            {isHome ? (
              <>
                <section className="sec2">
                  <header>
                    <StoryLine />
                  </header>
                  <main>
                    <div id="content">
                      <Media
                        commentPopup={handleCommentPopupContent}
                        icon={arrayOfUserData[7].icon}
                        posterName="Baby Girl"
                        dot="..."
                        imageData={arrayOfUserData[7].icon}
                        heartIcon={<BiHeart />}
                        fillIcon={<FaHeart className="heartSecondIcon" />}
                        commentIcon={<FiMessageCircle />}
                        MessageIcon={<TfiLocationArrow />}
                        tag={<BsBookmark />}
                      />
                      <Media
                        commentPopup={handleCommentPopupContent}
                        icon={arrayOfUserData[3].icon}
                        posterName="KS bro"
                        dot="..."
                        imageData={arrayOfUserData[3].icon}
                        heartIcon={<BiHeart />}
                        fillIcon={<FaHeart className="heartSecondIcon" />}
                        commentIcon={<FiMessageCircle />}
                        MessageIcon={<TfiLocationArrow />}
                        tag={<BsBookmark />}
                      />
                      <Media
                        commentPopup={handleCommentPopupContent}
                        icon={arrayOfUserData[4].icon}
                        posterName="Miki Mouse"
                        dot="..."
                        imageData={arrayOfUserData[4].icon}
                        heartIcon={<BiHeart />}
                        fillIcon={<FaHeart className="heartSecondIcon" />}
                        commentIcon={<FiMessageCircle />}
                        MessageIcon={<TfiLocationArrow />}
                        tag={<BsBookmark />}
                      />
                    </div>
                  </main>
                </section>

                <footer className="footer1">
                  <ProfileTitle handleHome={handleHomeBuddyForFalsy} />
                </footer>
              </>
            ) : (
              <Routes>
                <Route
                  exact
                  path="/component/explore"
                  element={<ExplorBro />}
                ></Route>
                <Route
                  exact
                  path="/component/reels"
                  element={<ReelsBro />}
                ></Route>
                <Route
                  exact
                  path="/component/messageroute"
                  element={<MessageRoute />}
                ></Route>
                <Route
                  exact
                  path="/:userName"
                  element={
                    <DynamicUserProfile
                      userDescription="hii guys i am aman bro😜😜😜😜 "
                      profileName={arrayOfUserData[0].profileName}
                      dynamicImg={arrayOfUserData[0].icon}
                      usernameBro={arrayOfUserData[0].userName}
                    />
                  }
                ></Route>
              </Routes>
            )}
          </>
        </div>
        {isUploadingModalActive ? (
          <UploadingImagesOrVideo overlayGalleryModal={handleGalleryModal} />
        ) : (
          ""
        )}

        <SearchBar
          handleDataOfSearch={handleDataOfSearch}
          iskeyPress={iskeyPress}
          searchData={searchData}
          handleChange={handleChange}
          handleCheckKey={handleCheckKey}
          handlecheckWhetherActive={handlecheckWhetherActive}
          parentContainer_ofSearch="searchParent"
          searchOff={handleOverlaySearchModal}
          overlayDisplay={isSearchModalActive ? "block" : "none"}
          clsName={isSearchModalActive ? "search_Bar_two" : "search_Bar_one"}
        />
      </>
      <>
        <NotificationModal
          isplay={isNotification ? "block" : "none"}
          HideNotification={handleNotficationForhidingbro}
          clsnamee={
            isNotification
              ? "notification_area_front_two"
              : "notification_area_front_one"
          }
        />
      </>
    </userDataContext.Provider>
  );
}

export default MainContentSubParent;
