// Create constructor function (base class) for geometric figures with the following public methods: getArea, getPerimeter, getName, getType, setWidth, setHeight, setName, setRadio(only for circle)

  function Figure(){
      this._type = 'generic';
  };

  // Public methods
  Figure.prototype.getArea = function(){
    return this._calculateArea();
  }
  Figure.prototype.getPerimeter = function () {
    return this._calculatePerimeter();
  };

  Figure.prototype.getName = function () {
    return this._name;
  };

  Figure.prototype.getType = function () {
    return this._type;
  };

  Figure.prototype.setHeight = function (height) {
    this._height = height;
  };

  Figure.prototype.setWidth = function (width) {
    this._width = width;
  };

  Figure.prototype.setName = function (name) {
    this._name = name;
  };
  Figure.prototype.draw = function (name, height, width, radio) {
    this._name = name;
    this._height = height;
    this._width = width;
    this._radio = radio;

    this._createFigure = function(){
      console.log("si llega");
      this._name = document.getElementById("name");
      this._height = document.getElementById("height");
      this._width = document.getElementById("width");
      this.radio = document.getElementById("radio");

      this.drawFigure = window.document.createElement("div");
      drawFigure.id = "forma";
      drawFigure.style = "width:" + width.value + "px; height:" + height.value + "px; background-color:red";
      document.body.appendChild(drawFigure);




      return console.log("Rayos!");

    }

  }




// Create a circle constructor that inherit from geometric figure

  function Circle(radio) {
    this._radio = radio;
    this._type = 'circle';


    this._calculateArea = function() {
      return Math.PI * Math.pow(this._radio,2);
    }
    this._calculatePerimeter = function () {
      return (Math.PI * this._radio) * 2;
    }


  }

Circle.prototype = new Figure();

Circle.prototype.getRadio = function () {
  return this._radio;
};

Circle.prototype.setRadio = function (radio) {
  this._radio = radio;
};

// Create a rectangle constructor

function Rectangle(height, width) {
  this._height = height;
  this._width = width;
  this._type = 'rectangle';

  this._calculateArea = function(){
    return this._width * this._height;
  }

  this._calculatePerimeter = function () {
    return this._width*2 + this._height*2;
  }

}
Rectangle.prototype = new Figure();



// Create a squere constructor

function Squere(size) {
  this._width = size;
  this._height = size;
  this._type = 'squere';
}

Squere.prototype = new Rectangle();
// Create a triangle, constructor

// Equilateral Triangle
function Triangle(width, height) {
  this._width = width;
  this._height = height;
  this._type = 'equilateral';

  this._calculateArea = function () {
    return (this._width * this._height)/2;
  }
  this._calculatePerimeter = function () {
    return this._width * 3;
  }


}

  Triangle.prototype = new Figure();

// Functions on the HTML



// }

  function createSquere() {

    if(document.getElementById("squere") != null){
      return alert("squere was create");
    }else{
        let name = document.getElementById("name");
        let height = window.document.getElementById("height");
        let width = document.getElementById("width");

        let drawFigure = window.document.createElement("div");
        drawFigure.id = "squere";

        drawFigure.setAttribute("class","squere");
        drawFigure.style = "width:" + height.value + "px; height:" + height.value + "px; background:red; border: 2px solid black";
        document.body.appendChild(drawFigure);

        let buttonColor = window.document.createElement("input");
        buttonColor.id = "button";
        buttonColor.type = "button";
        buttonColor.value = "changeColor";
        buttonColor.setAttribute("onclick","changeColor("+ drawFigure.id + ");");
        document.body.appendChild(buttonColor);
        return console.log("squere done!");
        }
  };

  function createRectangle() {
    if(document.getElementById("rectangle") != null){
      return alert("rectangle was create");
    }else{
          let name = document.getElementById("name");
          let height = window.document.getElementById("height");
          let width = document.getElementById("width");

          let drawFigure = window.document.createElement("div");
          drawFigure.id = "rectangle";
          drawFigure.setAttribute("class","rectangle");
          drawFigure.style = "width:" + width.value + "px; height:" + height.value + "px; background:red; border: 2px solid black";
          document.body.appendChild(drawFigure);

          let buttonColor = window.document.createElement("input");
          buttonColor.id = "button";
          buttonColor.type = "button";
          buttonColor.value = "changeColor";
          buttonColor.setAttribute("onclick","changeColor("+ drawFigure.id + ");");
          document.body.appendChild(buttonColor);
          return console.log("rectangle done!");
          }
  };

  function createCircle() {
    if(document.getElementById("circle") != null){
      return alert("circle was create");
    }else{
        let name = document.getElementById("name");
        let height = window.document.getElementById("height");
        let width = document.getElementById("width");
        let radio = document.getElementById("radio");
        let circule = new Circle(radio.value);
        console.log(circule.getArea());
        let drawFigure = window.document.createElement("div");
        drawFigure.id = "circle";
        drawFigure.setAttribute("class","circule");
        drawFigure.style = "width:" + radio.value + "px; height:" + radio.value + "px; background:red; border: 2px solid black; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;";
        document.body.appendChild(drawFigure);

        let buttonColor = window.document.createElement("input");
        buttonColor.id = "button";
        buttonColor.type = "button";
        buttonColor.value = "changeColor";
        buttonColor.setAttribute("onclick","changeColor("+ drawFigure.id + ");");
        document.body.appendChild(buttonColor);
        console.log("cirlce was create");

        let area = window.document.createElement("input");
        area.id = "area";
        area.type = "button";
        area.value = "area";
        area.setAttribute("onclick","circule.getArea("+ radio.value+")");
        document.body.appendChild(area);
      };


  };


  function changeColor(type) {
      console.log(type.id);
        function getRandomColor(){
          let colors = new Array(14);
          colors[0]="0";
          colors[1]="1";
          colors[2]="2";
          colors[3]="3";
          colors[4]="4";
          colors[5]="5";
          colors[5]="6";
          colors[6]="7";
          colors[7]="8";
          colors[8]="9";
          colors[9]="a";
          colors[10]="b";
          colors[11]="c";
          colors[12]="d";
          colors[13]="e";
          colors[14]="f";

          let digit = new Array(5);
          let color = '';
          for (i=0;i<6;i++){
              color+= colors[Math.round(Math.random()*14)];
          }
          return color;
          }
    let fig = window.document.getElementById(type.id).style.background = "#"+ (getRandomColor());

  }
