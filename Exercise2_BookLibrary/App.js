import "./App.css";
import React from 'react';

import NavBar from "./components/navbar.jsx";
import Titles from "./components/titles";

class App extends React.Component {
  state = {
    titles: [
      { id: 1, name: "Inroduction to React", value: 9 },
      { id: 2, name: "HTML and CSS", value: 5 },
      { id: 3, name: "Java Programming", value: 8 },
      { id: 4, name: "JavaScript", value: 1 },
      { id: 5, name: "Inroduction to C#", value: 0 },
      { id: 6, name: "Object Oriented Programming", value: 3 },
    ],
  };
  constructor(props){
    super(props);
    console.log("Instance of the Component created");
  }
  componentDidMount = () =>{
    console.log("The component mounted");
  }

  handleDelete = (titleId) => {
    console.log("Delete Happend");
    console.log(titleId);
    const titles = this.state.titles.filter((title) => title.id !== titleId);
    console.log(titles);
    this.setState({ titles: titles });
    // this.setState({titles})
  };
  handleReset = () => {
    console.log("Event handled");
    const titles = this.state.titles.map((title) => {
      title.value = 5;
      return title;
    });
    this.setState({ titles: titles });
  };
  handleUpdate = (title) => {
    const index = this.state.titles.indexOf(title);
    console.log(index);
    const titles = [...this.state.titles];
    console.log(titles, titles[index]);
    titles[index].value -= 1;

    this.setState({ titles });
  };
  render() {
    console.log("App - rendered");
    return (
      <div>
        <div className="App">
          <NavBar 
          titles= {this.state.titles}/>
        </div>
        <main className="container">
          <Titles  
          titles={this.state.titles}
          onUpdate={this.handleUpdate}
          onDelete = {this.handleDelete}
          onReset={this.handleReset}/>
        </main>
      </div>
    );
  }
}

export default App;
