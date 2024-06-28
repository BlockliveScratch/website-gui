import './App.css';
import Posting from './components/Home/Postings/Posts/posting';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PostBoard from './components/Home/Postings/PostBoard';
import store from './store';
import HeadBar from './components/Home/HeadBar/Headbar';
import Posts from './pages/Posts/Posts';
import HomeLinks from './components/Home/HomeLinks';
import Home from './components/Home/Home';
import { MyStudiosPage } from './components/MyStudios';
// import GUI from 'scratch-gui';

window.store = store;

function App() {
  return (

    <div className="App">
    <div style={{position:"fixed",top:0,width:"100%"}}><HeadBar></HeadBar></div>
    <div style={{height:"50px"}}></div>
      <br></br>
      <Routes>
        <Route exact path="/posts" Component={Posts}></Route>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/mygroups" Component={MyStudiosPage}></Route>
        {/* <Route exact path="/editor" Component={GUI}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
