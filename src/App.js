import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      
    boxes:  [ {color:"red"},{color:"green"},{color:"Yellow"},{color:"Orange"},{color:"purple"},{color:"blue"}
    ,{color:"RosyBrown"},{color:"SaddleBrown"},{color:"SeaGreen"},{color:"SpringGreen"},{color:"pink"},{color:"violet"}
    ,{color:"Sienna"},{color:"Silver"},{color:"SlateGray"},{color:"Teal"},{color:"Thistle"},{color:"WhiteSmoke"}
    ,{color:"Turquoise"},{color:"Wheat"},{color:"Salmon"},{color:"SeaShell"},{color:"SteelBlue"},{color:"SpringGreen"}
    ,{color:"LavenderBlush"},{color:"Khaki"},{color:"LightCoral"},{color:"LemonChiffon"},{color:"Lavender"},{color:"IndianRed"}
    ,{color:"Indigo"},{color:"LightGoldenRodYellow"},
      
      
      //Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              //"SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              //"SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              //"Yellow","YellowGreen"
  /*
  "HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite
  
  
  */
      
      
      ] }
      
      
      setInterval(()=>{
        var randomnum= Math.floor(Math.random()*this.props.allColors.length)
        var randombox= Math.floor(Math.random()*24)
      console.log(randomnum)
        var newboxes= this.state.boxes.slice();
        newboxes[randombox].color= this.props.allColors[randomnum]
        this.setState({boxes:newboxes})
        
      },300)
  }
  
  
  
  render() {
  
  const boxes= this.state.boxes.map((e,i)=>{
  
  return <Box key={i}  background={e.color} /> 
  });
    return (
      <div className="App">
         {boxes}
      </div>
    );
  };

    
  
  
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
