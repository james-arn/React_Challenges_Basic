import "./App.css";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";


// MAIN Challenge 1, 2
const App = () => {
return (
  <div>
      <Navbar />  
      <Jumbotron />
      <Footer />
  </div>
)
}

// LECTURE Challenge 1 & 2
// import image from "./images/juniordev.jfif"

// const App = () => {
//   return (
//     <div>
//       <Job role="Junior Developer"/>
//       <Image src />
//     </div>
//   );
// };

// const Job = (props) => {
//   return <p> I'm a {props.role}. </p>;
// };

// const Image = (props) => {
//   return <img src={image}/>;
// } 

export default App;
