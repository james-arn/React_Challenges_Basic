import "../App.css";

const Content_tile = (props) => {
    return (
        <div>
            <img className= "imageTile" src={props.image}/>
            <h4> {props.contentTitle} </h4>
        </div>
    )
}
    
export default Content_tile;