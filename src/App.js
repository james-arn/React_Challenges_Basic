import "./App.css";
import Movies from "./components/Job";

const App = () => {
  return (
    <div>
      <Job role="Junior Developer"/>
    </div>
  );
};

const Job = (props) => {
  return <p> I'm a {props.role}. </p>;
};

export default App;
