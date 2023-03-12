import { BsGearWide } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { WiTime7 } from "react-icons/wi";
import { GoReport } from "react-icons/go";

function SettingMenuBottom(props) {
  return (
    <>
      <div className="overlay1">
        <div className="overlay" onClick={props.click}></div>
        <div id="setting_data_container">
          <div className="sub1_data_container">
            <div className="child_sub_data">
              <span>Settings</span>
              <BsGearWide />
            </div>
            <div className="child_sub_data">
              <span>Saved</span>
              <FaRegBookmark />
            </div>
            <div className="child_sub_data" onClick={props.Change}>
              <span>Switch appearence</span>
              <BsMoon />
            </div>
            <div className="child_sub_data">
              <span>Your Activity</span>
              <WiTime7 />
            </div>
            <div className="child_sub_data">
              <span>Report a problem</span>
              <GoReport />
            </div>
          </div>

          <div className="sub2_data_container">
            <h5>Switch accounts</h5>
            <h5>Log out</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingMenuBottom;
