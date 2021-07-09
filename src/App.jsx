import React from "react";
import { v4 as uuidv4 } from "uuid";
import Newchirp from "./components/Newchirp";
import Timeline from "./components/Timeline";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // newChirp: { username: "", msg: "" },
      username: "",
      msg: "",
      allchirps: [
        { id: uuidv4(), username: "Jeffery", msg: "Hey" },
        { id: uuidv4(), username: "Brett Bingle", msg: "I'm single" },
        {
          id: uuidv4(),
          username: "Timmy Dilberson",
          msg: "don't make fun of my last name",
        },
      ],
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       allchirps: [
  //         {
  //           id: uuidv4(),
  //           newChirp: "Initial loaded newChirp"
  //         },
  //         {
  //           id: uuidv4(),
  //           newChirp: "Initial loaded newChirp two",
  //         }
  //       ]
  //     });
  //   }, 2000);
  // }

  handleSubmit(e) {
    e.preventDefault();
       <Newchirp chirp={this.username} />  
    this.setState({
      allchirps: [
        ...this.state.allchirps,
        {
          id: uuidv4(),
          username: this.state.username,
          msg: this.state.msg,
        },
      ],
    });
    this.setState({username: ""});
    this.setState({msg: ""});
  }

  render() {
    return (
      <main className="container d-flex">
        <section className="row justify-content-center mt-5">
          <div className="col-md-7">
            <form className="form-group">
              <label>username:</label>
              <input
                type="text"
              value =  { this.state.username} 
                onChange={(e) => this.setState({ username: e.target.value })}
                className="form-control"
              />
              <label>msg:</label>
              <input
                type="text"
                value={this.state.msg}
                onChange={(e) => this.setState({ msg: e.target.value })}
                className="form-control"
              />
              <button
                onClick={(e) => this.handleSubmit(e)}
                className="btn btn-primary"
              >
                Click Me
              </button>
            </form>
           
          </div>
        </section>
        <section className="row justify-content-center mt-5">
          <div className="col-md-7">
            <ul className="list-group">
              {this.state.allchirps.map((chirp) => (
                <Timeline key={`${chirp.id}`} chirp={chirp} />
              ))}          
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
