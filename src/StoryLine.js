import aman from "./aman.jpg";
import doremon from "./dor.png";
import ks from "./KS.png";
import bodyBuilder from "./body.png";
import mouse from "./mouse.jpg";
import chulbule from "./chulbule.png";
import student from "./student.png";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { useRef, useState } from "react";
function StoryLine() {
  const [storyData, setStoryData] = useState([
    {
      id: 1,
      imageUrl: doremon,
      title: "doremon",
    },
    {
      id: 2,
      imageUrl: ks,
      title: "KS",
    },
    {
      id: 3,
      imageUrl: bodyBuilder,
      title: "Builder",
    },
    {
      id: 4,
      imageUrl: mouse,
      title: "Mouse",
    },
    {
      id: 5,
      imageUrl: chulbule,
      title: "Cute girl",
    },
    {
      id: 6,
      imageUrl: student,
      title: "Student",
    },
  ]);
  const reff = useRef(null);

  function handleScroll() {
    reff.current.scrollLeft -= 150;
  }
  function handleScrollright() {
    reff.current.scrollLeft += 150;
  }

  return (
    <>
      <div id="StoryLine">
        <div className="scrollObject">
          <AiFillLeftCircle onClick={handleScroll} id="leftCircle" />

          <AiFillRightCircle onClick={handleScrollright} id="rightCircle" />
        </div>
        <div id="subStory" ref={reff}>
          <div className="imgStory">
            <img src={aman} alt="aman" className="amanImg doremon"></img>
            <p id="aiOut">+</p>
            <span>Your Story</span>
          </div>

          {storyData.map((item) => {
            return (
              <>
                <div className="SideStory" key={item.id}>
                  <img
                    src={item.imageUrl}
                    alt="aman"
                    className="amanImg doremon"
                  ></img>

                  <span>{item.title}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StoryLine;
