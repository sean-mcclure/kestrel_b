import "../css/upload_image_writing.css";

const React = require('react');

class UploadImageWriting extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {

    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = function () {
        console.log(reader.result); //base64encoded string
        window.recent_img_upload_url = reader.result;
        document.getElementsByClassName("upload_img_wrapper")[window.clicked_write_instance].style.display = "block";
    document.getElementsByClassName("uploaded_img_writing")[window.clicked_write_instance].src = window.recent_img_upload_url;
    };

    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

}
  render() {
    return (
      <div className="upload_img_wrapper">
        <input type="file" className="input_hide_writing"/>
        <img alt="" className="uploaded_img_writing"/>
      </div>
    );
  }
}
export default UploadImageWriting;