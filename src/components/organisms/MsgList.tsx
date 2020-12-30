import React from "react";
import axios from "axios";

const server = 'http://localhost:8000/users';

interface State {
  status: boolean;
  result: string;
}

class MsgList extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { status: true ,result: '' };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    axios.get(server)
      .then((res) => {
        this.setState({
          status: true,
          result: res.data
        });
        console.log(this.state.result[0]);
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          status: false,
          result: e,
        });
      });
  }

  render() {
    return <>
     <button onClick={this.handleClick}>メッセージ取得</button>
    </>;
  }
}

export default MsgList;
