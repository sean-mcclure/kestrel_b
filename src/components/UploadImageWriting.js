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
    };

    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

}
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} className="input_hide"/>
        <img src={this.state.file} alt="" id="uploaded_img_writing" className="uploaded_img_writing"/>
      </div>
    );
  }
}
export default UploadImageWriting;