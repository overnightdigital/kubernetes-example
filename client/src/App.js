import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: {
      data: {
        id: "undefined",
        name: "undefined",
        content: "undefined"
      }
    }
  };

  getData = async () => {
    var data = await axios.get('http://192.168.252.8:31516/api/data');
    this.setState({
      data: data
    })
  }

  componentDidMount() {
    this.getData();
  }
  
  render() {
    return (
      <div className="App">
        <p>Kubernetes</p>
        <p>ID: {this.state.data.data.id}</p>
        <p>Name: {this.state.data.data.name}</p>
        <p>Content: {this.state.data.data.content}</p>
      </div>
    );
  }
}

export default App;
