import "../css/upload_image_writing.css";


const React = require('react')


class Upload extends React.Component {
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
        document.getElementById("avatar_pic").style.borderRadius = "50%"
        document.getElementById("avatar_pic").style.border = "2px solid #141414"
    };

    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

}
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} className="input_hide"/>
        <img src={this.state.file} alt="" id="avatar_pic" className="avatar_pic"/>
      </div>
    );
  }
}
export default Upload;