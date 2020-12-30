import React from "react";
import axios from "axios";

const server = 'http://localhost:8000/users';

class MsgList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleClick = () => {
    axios
      .get(server)
      .then(res => console.log(res))
      .catch(err => alert(err));
  };

  render() {
    return <>
     <button onClick={this.handleClick}>メッセージ取得</button>
    </>;
  }
}

export default MsgList;
