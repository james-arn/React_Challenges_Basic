import "./App.css";
import image from "./images/juniordev.jfif"

const App = () => {
  return (
    <div>
      <Job role="Junior Developer"/>
      <Image src />
    </div>
  );
};

const Job = (props) => {
  return <p> I'm a {props.role}. </p>;
};

const Image = (props) => {
  return <img src={image}/>;
} 

export default App;
