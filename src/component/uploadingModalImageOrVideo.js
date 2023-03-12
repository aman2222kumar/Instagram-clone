import { useEffect, useRef, useState } from "react";
import gllleryIcon from "../component/Gallery_icon.png";
import { HiArrowNarrowLeft } from "react-icons/hi";

function UploadingImagesOrVideo(props) {
  const inputFile = useRef(null);
  const [gallerydata, setGallerydata] = useState(null);
  const [isCropAreaOpen, setCropAreaOpen] = useState(false);

  useEffect(() => {
    if (gallerydata != null) {
      setCropAreaOpen(true);
    }
  }, [gallerydata]);

  function handleValueOfGallerydata(e) {
    if (e.target.files.length !== 0) {
      setGallerydata(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleNextImageThing() {}
  return (
    <>
      <div className="parent_of_media_uploading">
        <div
          className="overlay_uploading_file"
          onClick={props.overlayGalleryModal}
        ></div>

        <div className="file_uploading_container">
          {isCropAreaOpen === false ? (
            <>
              <h4>Create new post</h4>
              <div className="imageOrVideo_container">
                <img src={gllleryIcon} alt="Galleryicon"></img>
                <h5>Drag photos and videos here</h5>

                <input
                  ref={inputFile}
                  type={"file"}
                  accept="image/png, image/gif, image/jpeg ,video/mp4"
                  style={{ display: "none" }}
                  value={undefined}
                  onChange={handleValueOfGallerydata}
                ></input>
                <button
                  id="fileUploadingBtn"
                  onClick={() => inputFile.current.click()}
                >
                  Select From Computer
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cropHeader">
                <HiArrowNarrowLeft />
                <p>Crop</p>
                <p onClick={handleNextImageThing}>Next</p>
              </div>
              <div className="cropImage_container">
                <img src={gallerydata} alt="cropableimage"></img>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UploadingImagesOrVideo;
