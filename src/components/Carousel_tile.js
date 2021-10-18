import "../App.css";
const Corousel_tile = (props) => {
return (
    <div>
        <img src={props.image}/>;
        <h3> {props.title} </h3>
    </div>
 )
}

export default Corousel_tile;
