import catImage from "../images/cat.jpg" 
const Jumbotron = (props) => {
return (
    <div>
        <h1> CatNation </h1>
        <img src={catImage} id = "cat" />;
    </div>
 )
}

export default Jumbotron;
