import { CgProfile } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
function NotificationModal(props) {
  return (
    <>
      <div className="notfication_modal_container">
        <div
          className="overlay_notification"
          onClick={props.HideNotification}
          style={{ display: props.isplay }}
        ></div>

        <div className={props.clsnamee} id="notification_area_front">
          <div className="notfication_header_ofmodal">
            <h3>Notifications</h3>
            <div className="follow_request_notification">
              <div className="request_of_notification_profile">
                <CgProfile className="icon_notifi_profile" />
                <div className="userNameOF_profile_nt">
                  <span>Follow request</span>
                  <span>helloBaby</span>
                </div>
              </div>

              <div className="notification_profile_requesat_dot">
                <span>
                  <BsDot />
                </span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>
          </div>

          <div className="notification_for_month">
            <h4>This Month</h4>
            <div className="all_follow_data_thisMonth">
              <CgProfile className="icon_notifi_profile" />
              <div className="thiMonth_noti_userData">
                <span>hello this guy is on your contac tlist</span>
                <span>Hosiyaar chand</span>
              </div>
              <button>follow</button>
            </div>
          </div>

          <div className="notification_for_earlier"></div>
        </div>
      </div>
    </>
  );
}
export default NotificationModal;
