import "../App.css";
import Carousel_tile from "./Carousel_tile";
import outdoorGetawaysImg from "../images/outdoor_getaways.jpg" 
import uniqueStaysImg from "../images/Unique_stays.jpg" 
import entireHomesImg from "../images/Entire_homes.jpg"
import petsAllowedImg from "../images/pets_allowed.jpg"

const Carousel = (props) => {
return (
    <div>
     <div>
        <h2> Live anywhere </h2>
     </div>
        <div className="carouselTile">
         <Carousel_tile image={outdoorGetawaysImg}
          title="Outdoor Getaways"/>;
         <Carousel_tile image={uniqueStaysImg}
          title="Unique Stays"/>;
         <Carousel_tile image={entireHomesImg}
          title="Entire Homes"/>;
        <Carousel_tile image={petsAllowedImg}
          title="Pets Allowed"/>;
        </div>
 </div>
)
}

export default Carousel;
