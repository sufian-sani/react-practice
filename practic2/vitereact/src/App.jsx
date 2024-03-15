import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import According from "./components/accordian/index.jsx";
import According2 from "./components/accordian2/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import RandomColor2 from "./components/random-color2/RandomColor2.jsx";
import Tabs from "./components/custom-tabs2/tabs.jsx";
import {ModelTest} from "./components/custom-model/model-test.jsx";
// import StarRating from "./components/star-rating/index.jsx";
// import StarRating from "./components/star-rating2/StarRating.jsx";
// import Accordian from "./components2/accordian/Accordian.jsx";
// import ColorGenerate from "./components2/colorgenerator/ColorGenerate.jsx";
// import StarFeed from "./components2/starfeedback/index.jsx";
// import ImageSlider from "./components/image-slider/index.jsx";
// import ImageSlider from "./components/image-slider2/index.jsx";
// import ImageSlider from "./components/image-slider2/indexAi.jsx";
// import LoadMoreData from "./components/load-more-data/LoadMoreData.jsx";
// import menus from "./components/tree-view/data";
// import TreeView from "./components/tree-view/index.jsx";

// import menus from "./components/tree-view2/tabs-data.js";
// import TreeView2 from "./components/tree-view2/index.jsx";
// import TabTest from "./components/custom-tabs/tab-test.jsx";
function App() {

  return (
    <div>
      {/*<According />*/}
      {/*<According2 />*/}
      {/*  <RandomColor />*/}
      {/*  <RandomColor2 />*/}
      {/*  <StarRating noOfStars={10} />*/}
      {/*  <StarRating noOfStars={10} />*/}
      {/*  <Accordian />*/}
      {/*  <ColorGenerate />*/}
      {/*  <StarFeed />*/}
      {/*  <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"} />*/}
      {/*  <ImageSlider />*/}
      {/*  <LoadMoreData />*/}
      {/*  <TreeView  menus={menus} />*/}
      {/*  <TreeView2 menus={menus} />*/}
      {/*  <TabTest />*/}
      {/*<Tabs />*/}
        <ModelTest />
    </div>
  );
}

export default App
