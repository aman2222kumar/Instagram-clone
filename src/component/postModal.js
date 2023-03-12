function PostModalForMedia(props) {
  return (
    <>
      <div className="post_modal_container">
        <div className="overlay_for_postmodal" onClick={props.HidePost}></div>
        <div className="data_for_post_modal">
          <span>Report</span>
          <span>Unfollow</span>
          <span>Add to favourites</span>
          <span>Go to post</span>
          <span>Share to...</span>
          <span>Copy link</span>
          <span>Embed</span>
          <span>Cancel</span>
        </div>
      </div>
    </>
  );
}

export default PostModalForMedia;
