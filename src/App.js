import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BackDrop from "./components/BackDrop/BackDrop";
import Cards from "./components/Cards/Cards";
import Profile from "./components/Profile/Profile";


class App extends Component {
  state = {
    sideBarOpen: false,
  }
  drawerClickHandler =() => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    })
  }

  backDropHandler =() => {
    this.setState({sideBarOpen: false});
  }
  render() {
    
    let backDrop;

    if (this.state.sideBarOpen){
     
      backDrop = <BackDrop click={this.backDropHandler} />;
    }
    return (
      <div style={{height: '100%'}}>
        <Navbar clickHandler={this.drawerClickHandler}/>
        <Sidebar show={this.state.sideBarOpen} />
        {backDrop}
        <Cards />
        <Profile />
       {/* <main style={{marginTop:'100px'}}>
          <p> MY PROFILE </p>
        </main> */}
      </div>
    );
  }
 
}

export default App;
