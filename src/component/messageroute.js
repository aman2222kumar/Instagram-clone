import { useContext } from "react";
import { userDataContext } from "../mainContent";
import { TfiLocationArrow } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

function MessageRoute() {
  const datalist = useContext(userDataContext);
  const newArray = datalist.filter((item) => item.id > 10);

  return (
    <>
      <div className="message_background_field">
        <div className="message_list_parent">
          <div className="message_left">
            <div className="message_left_header">
              <span>{datalist[0].userName}</span>
              <span>
                <FaAngleDown />
              </span>
              <span>
                <HiOutlinePencilAlt />
              </span>
            </div>
            <div className="list_of_messanger">
              {newArray.map((item) => {
                return (
                  <>
                    <div className="messanger_list_of_data" key={item.id}>
                      <img src={item.icon} alt={item.id}></img>
                      <span className="message_username_hide_forRes">
                        {item.userName}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="messageRight">
            <div className="message_data_right_side">
              <span className="arrowMessage_forRoute">
                <TfiLocationArrow className="arrowRotate_for_messageRoute" />
              </span>
              <span>Your messages</span>
              <span>
                Send private photos and messages to a friend or group.
              </span>
              <button>Send message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageRoute;
