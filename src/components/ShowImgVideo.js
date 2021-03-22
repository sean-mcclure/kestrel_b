import "../css/ShowImgVideo.css";

function ShowImgVideo() {
    return(
        <div>
            <img className="popped_img" src={window.popped_img}></img>
        </div>
    )
}

export default ShowImgVideo;