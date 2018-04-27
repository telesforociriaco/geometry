
// Create unit tests for geometry.js

// Create unit test for Figure;
describe('Test Figure', function(){
  let myFig = new Figure();

  it('should create an object of type figure', function(){
    expect(myFig instanceof Figure).toBe(true);
  });

  it('should have a type generic', function(){
    expect(myFig.getType()).toBe('generic');
  });

  it('should have a getArea method', function(){
    expect(typeof myFig.getArea).toBe('function');
  });

  it('should have a getPerimeter method', function() {
    expect(typeof myFig.getPerimeter).toBe('function');
  })

  it('should have a getName method',function() {
    expect(typeof myFig.getName).toBe('function');
  });

  it('should have a setName and getName thod',function() {
    let name = 'perro';
    myFig.setName(name);
    expect(myFig.getName()).toBe(name);
  });

  it('should have a setHeight method', function() {
    expect(typeof myFig.setHeight).toBe('function');
  });

  it('should have a setWidth method', function() {
    expect(typeof myFig.setWidth).toBe('function');
  });


});
// Create unit test for Circle;
describe('Test Circle', function(){
  let myCircle = new Circle(8);
  it('should create an object of type Circle', function () {
    expect(myCircle instanceof Circle).toBe(true);
  });

  it('should have a type circle', function() {
    expect(myCircle.getType()).toBe('circle');
  });

  it('should have a getName method',function() {
    expect(typeof myCircle.getName).toBe('function');
  });

  it('should have a setName and getName method',function() {
    let name = 'perro';
    myCircle.setName(name);
    expect(myCircle.getName(name)).toBe(name);
  });

  it('should have a getRadio method',function() {
    expect(typeof myCircle.getRadio).toBe('function');
  });

  it('Should have a setRadio method', function() {
    expect(typeof myCircle.setRadio).toBe('function');
  });

  it('Should have a setRadio and getRadio method', function() {
    let radio = 3;
    myCircle.setRadio(radio);
    expect(myCircle.getRadio()).toBe(radio);
  });

  it('should have a getArea method', function() {
    expect(typeof myCircle.getArea).toBe('function');
  });

  it('should have a getArea method', function() {
    let radio = 5;
    myCircle.setRadio(radio);
    expect( myCircle.getArea().toFixed(3)).toBe("78.540");
  });


});

// Create unit tests for Rectangle;
describe('Test Rectangle',function() {
  let myRecrangle = new Rectangle();
  it('should create an object of type Rectangle', function() {
    expect(myRecrangle instanceof Rectangle).toBe(true);
  });

  it('should have a type rectangle', function() {
    expect(myRecrangle.getType()).toBe('rectangle');
  });

  it('should have a setName and getName thod',function() {
    let name = 'gato';
    myRecrangle.setName(name);
    expect(myRecrangle.getName()).toBe(name);
  });

  it('should have a getArea method', function() {
    expect(typeof myRecrangle.getArea).toBe('function');
  });

  it('should result of getArea = 20', function() {
    let height = 5;
    let width = 4;
    myRecrangle.setHeight(height);
    myRecrangle.setWidth(width);
      expect(myRecrangle.getArea()).toBe(20);
  })


  it('should have a getPerimeter method', function() {
    expect(typeof myRecrangle.getPerimeter).toBe('function');
  });

  it('should result of getPerimeter = 18', function() {
    let height = 5;
    let width = 4;
    myRecrangle.setHeight(height);
    myRecrangle.setWidth(width);
    expect(myRecrangle.getPerimeter()).toBe(18);
  });

});

// Create unit tests for Squere
describe('Test Squere',function() {
  let mySquere = new Squere();
  it('Should crete an object to type Squere', function () {
    expect(mySquere instanceof Squere).toBe(true);
  });

  it('should have a type square', function() {
    expect(mySquere.getType()).toBe('squere');
  });

  it('should have a getName method', function() {
    let name = 'cacatua';
    mySquere.setName(name);
    expect(mySquere.getName()).toBe(name);
  });

  it('should have a getArea method', function() {
    expect(typeof mySquere.getArea).toBe('function');
  });

  it('should have a getArea method', function() {
    let height = 26;
    let width = 26;
    mySquere.setWidth(height);
    mySquere.setHeight(width);
    expect(mySquere.getArea()).toBe(676);
  });

  it('should result of getPerimeter = 20', function() {
    let height = 5;
    let width = 5;
    mySquere.setHeight(height);
    mySquere.setWidth(width);
      expect(mySquere.getPerimeter()).toBe(20);
  });

});

// Create unit tests for Triangle
describe('Test Triangle', function() {
  let myTriangle = new Triangle();
  it('should create an object to type Triangle', function() {
    expect(myTriangle instanceof Triangle).toBe(true);
  });
  it('should have a type Triangle', function() {
    expect(myTriangle.getType()).toBe('equilateral');
  });

  it('should have a getName method', function() {
    expect(typeof myTriangle.getName).toBe('function');
  });

  it('should have a getName method', function() {
    let name = 'cacatua';
    myTriangle.setName(name);
    expect(myTriangle.getName()).toBe(name);
  });

  it('should have a getArea method', function() {
    expect(typeof myTriangle.getArea).toBe('function');
  });

  it('should have a getArea method', function() {
    let width = 4;
    let height = 3.5;
    myTriangle.setWidth(width);
    myTriangle.setHeight(height);
    expect(myTriangle.getArea()).toBe(7);
  });

  it('should have a getPerimeter method', function() {
    let width = 3;
    myTriangle.setWidth(width);
    expect(myTriangle.getPerimeter()).toBe(9);
  });

});
