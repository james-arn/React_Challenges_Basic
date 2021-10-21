import { useState } from "react";
//components
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
return (
<div>
  <ToDoList />
</div>
)};

export default App;

// import { useState } from "react";

// const App = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

// const removeHandler = (index) => {
//     let storedNum =[...numbers]
//     storedNum.splice(index, 1)
//     setNumbers(storedNum)
// }

//     return (
//     <div>
//       {numbers.map((number, index) => {
//         return <h1 key = {index} onClick={() => removeHandler(index)}>{number} </h1>;
//       })}

//     </div>
//   );
// };

// export default App;

// exmaple
// import { useState } from "react";

// const App = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4]);

//  const addHandler = () => {
//     let storedNums = [...numbers];
//     storedNums.push(storedNums[storedNums.length - 1] + 1);
//     setNumbers(storedNums);
//   };

//   return (
//     <div>
//       {numbers.map((number, index) => {
//         return <h1 key = {index}>{number}</h1>;
//       })}
//         <button onClick={addHandler}>add one</button>
//     </div>
//   );
// };

// export default App;

// //USESTATE PRACTICE - function
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//     <button onClick={()=> setCount(count + 1)}>add one</button>
//     <button onClick={()=> setCount(count - 1)}>minus one</button>
//     <button onClick={()=> setCount(count * 2)}>double</button>
//     </div>
//   );
// };

// export default App;

// //NETFLIX
// import { useState } from "react";
// import netflix1 from "../src/images/netflix1.PNG"
// import netflix2 from "../src/images/netflix2.PNG"
// import netflix3 from "../src/images/netflix3.PNG"
// import netflix4 from "../src/images/netflix4.PNG"
// import netflix5 from "../src/images/netflix5.PNG"

// const App = () => {
//   const [contents, setContents] = useState([netflix1, netflix2, netflix3, netflix4, netflix5]);

//   return (
//     <div>
//       {contents.map((contentMap, index) => {
//         return <ContentMain key={index} contentMap={contentMap} />;
//       })}
//     </div>
//   );
// };
// const ContentMain = (props) => {
//   return (
//     <div>
//       <img src={props.contentMap}/>
//     </div>
//   );
// };

// export default App;

//BBC NEWS
// import { useState } from "react";
// import contentImage1 from "../src/images/content_1.PNG";
// import contentImage2 from "../src/images/content_2.PNG";
// import contentImage3 from "../src/images/content_3.PNG";
// import contentImage4 from "../src/images/content_4.PNG";
// const App = () => {
//   const [contents, setContents] = useState([
//     {
//       Image: contentImage1,
//       Title: "Six ways Uk can save climate",
//       Desc: "Information about somehting really important here",
//       Category: "Category",
//     },
//     {
//       Image: contentImage2,
//       Title: "Why does a climate summit need 25k people?",
//       Desc: "Information about somehting really important here",
//       Category: "Category",
//     },
//     {
//       Image: contentImage3,
//       Title: "Can you stop Norway doing drilling oil that made it rich?",
//       Desc: "Information about somehting really important here",
//       Category: "Category",
//     },
//     {
//       Image: contentImage4,
//       Title: "What does this summit mean for us all?",
//       Desc: "Information about somehting really important here",
//       Category: "Category",
//     },
//   ]);

//   return (
//     <div>
//       {contents.map((contentMap, index) => {
//         return <ContentMain key={index} contentMap={contentMap} />;
//       })}
//     </div>
//   );
// };
// const ContentMain = (props) => {
//   return (
//     <div>
//       <img src={props.contentMap.Image}/>
//       <h4> {props.contentMap.Tile} </h4>
//       <p> {props.contentMap.Desc} </p>
//       <p> {props.contentMap.Category} </p>
//     </div>
//   );
// };

// export default App;

// import "./App.css";
// import LegalDrink from "./components/LegalDrink";

// const App = () => {
//   return (
//   <div>
//     <LegalDrink />
//   </div>
// )
//   }

//   export default App;

// const App = () => {
// const [persons, setPersons] = useState([
//   {name: "Leon"},
//   {name: "Jordan"}
// ]);

// const handleClick = (value) => {
//   alert(value);
// };

// return (
// <div>
//   <Person name={persons[0].name} clickMe={handleClick} />
//   <Person name={persons[1].name} clickMe={handleClick} />
// </div>
//   )
// };

// const Person = (props) => {
// return <h1 onClick={() => props.clickMe(props.name)}>{props.name}</h1>;
// };

// export default App;

// //DAY 1 CHALLENGES
// import "./App.css";
// import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron";
// import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
// import Content from "./components/content";

// // MAIN Challenge 1, 2
// const App = () => {
// return (
//   <div>
//       <Navbar />
//       <Jumbotron />
//       <Carousel />
//       <Content />
//       <Footer />
//   </div>
// )
// }

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

// export default App;
