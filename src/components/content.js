import "../App.css";
import Content_tile from "./content_tile";
import contentImage1 from "../images/content_1.PNG";
import contentImage2 from "../images/content_2.PNG";
import contentImage3 from "../images/content_3.PNG";
import contentImage4 from "../images/content_4.PNG";
import contentImage5 from "../images/content_5.PNG";

const Content = (props) => {
  return (
    <div>
      <div>
        <h2> Climate Change </h2>
      </div>
      <div className="carouselTile">
        <Content_tile
          image={contentImage1}
          contentTitle="Six ways Uk can save climate"
        />
        <Content_tile
          image={contentImage2}
          contentTitle="Why does a climate summit need 25k people?"
        />
        <Content_tile
          image={contentImage3}
          contentTitle="can you stop Norway doing drilling oil that made it rich?"
        />
        <Content_tile
          image={contentImage4}
          contentTitle="What does this summit mean for us all?"
        />
        <Content_tile
          image={contentImage5}
          contentTitle="How smart appliances can fix the energy gap"
        />
      </div>
    </div>
  );
};

export default Content;
