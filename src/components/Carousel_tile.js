import "../App.css";
const Corousel_tile = (props) => {
  return (
    <div>
      <img className="imageTile" src={props.image} />
      <h3> {props.contentTitle} </h3>
    </div>
  );
};

export default Corousel_tile;
