import logo from './logo.svg';
import gptLogo from './assets/chatgptLogo.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/send.svg';
import rocket from './assets/rocket.svg';
import './App.css';


function App() {
    return (
         <div className="App">
              
              <div className="sideBar">
                  <div className="upperside">
                       <div className="upperSideTop">
                           <img src = {gptLogo} alt="" className="logo" /> <span className="brand">Agro-Guide</span>
                           <button className="midBtn"> <img src = {addBtn} alt="New Chat" className="logo" /> New Chat</button>
                           <div className="upperSideBottom">


                               <button className="query">
                                     <img src = {msgIcon} alt="Query" className="" />
                                     What is the Programming ?
                               </button>
                                     
                               <button className="query">
                                     <img src = {msgIcon} alt="Query" className="" />
                                     What is the Programming ?
                               </button>

                               
                           </div>
                       </div>
                  </div>
                       
                  </div>

              <div className="main">
                    <div className="lowerSide">
                         <div className="listItems"><img src = {home} alt="" className="listitems" />Home</div>
                         <div className="listItems"><img src = {saved} alt="" className="listitems" />Saved</div>
                         <div className="listItems"><img src = {rocket} alt="" className="listitems" />Upgrade to Pro</div>
                    </div>
              </div>

              

         </div>
    );
}

export default App;
