import { IoMdCloseCircle } from "react-icons/io";
import { userDataContext } from "../mainContent";

function SearchBar(props) {
  // const [iskeyPress, setKeyPress] = useState(false);
  // const [searchData, setSearchData] = useState("");

  // function handleDataOfSearch() {
  //   setSearchData("");
  //   setKeyPress(false);
  // }

  // function handleCheckKey(e) {
  //   if (iskeyPress === false) {
  //     setKeyPress(true);
  //   }
  // }

  // function handlecheckWhetherActive() {
  //   setKeyPress(true);
  // }

  // function handleChange(e) {
  //   setSearchData(e.target.value);
  // }

  return (
    <>
      <div className={props.parentContainer_ofSearch}>
        <div
          className="overlay_search"
          onClick={props.searchOff}
          style={{ display: props.overlayDisplay }}
        ></div>
        <div className={props.clsName} id="search_bar_area">
          <h2>Search</h2>
          <div className="search_container">
            <input
              type="text"
              value={props.searchData}
              placeholder="search"
              onChange={props.handleChange}
              onFocus={props.handleCheckKey}
              onKeyUp={props.handlecheckWhetherActive}
            ></input>
            {props.iskeyPress && (
              <IoMdCloseCircle
                className="closecircle"
                onClick={props.handleDataOfSearch}
              />
            )}
            <p></p>
          </div>

          <div className="result_of_search_list">
            <userDataContext.Consumer>
              {(v) => {
                return (
                  <>
                    {v.map((item) => {
                      if (props.searchData === "") {
                        return props.searchData;
                      } else if (
                        item.userName
                          .toLocaleLowerCase()
                          .includes(props.searchData.toLocaleLowerCase())
                      ) {
                        return (
                          <>
                            <div
                              className="search_list_container"
                              key={item.id}
                            >
                              <img src={item.icon} alt="imgBro"></img>
                              <div className="search_title_container">
                                <h4>{item.userName}</h4>
                                <h5>{item.profileName}</h5>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })}
                  </>
                );
              }}
            </userDataContext.Consumer>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
