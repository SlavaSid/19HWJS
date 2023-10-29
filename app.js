// class Product {
//     constructor(name, prise){
// //this = {}
// this.name = name;
// this.prise = prise;
// this.quantity = 0;


// //return this
//     }

//     addQuantity(){
//         this.quantity += 1;  
//     }
//     static createDiscount(number) {
//         return `Скидка ${number}%`
//     }
// }
// console.log(Product.createDiscount(50)); 


// const bag = new Product('Сумка 1', 200);
// console.log(bag);
// console.log(bag.prise);
// bag.addQuantity();
// console.log(bag.quantity);

// const dress = new Product('Платье 1', 350);
// dress.addQuantity();
// console.log(`Товар ${dress.name}, цена: ${dress.prise}, количество: ${dress.quantity}`);

// //проверка принадлежности свойства (тетода) экземпляру
// console.log(bag.hasOwnProperty('prise')); //true
// console.log(bag.hasOwnProperty('name')); //true
// console.log(bag.hasOwnProperty('nasdg'));//false
// console.log(bag.hasOwnProperty('addQuantity'));//false

// //instansof -проверяет принадлежность экземпляра к классу

//  console.log(dress instanceof Product); //true
//  console.log(dress instanceof Object); //true
//  console.log(dress instanceof String); //true


//  const nums = [34, 56, 8];
//  console.log(typeof nums); //object

//  console.log(nums instanceof Array); //true


//  Object.values(bag); //массив 
//  //console.log(Product.values(bag)); //в не глобальном с values или другие статические методы - будет ошидка


//  // Расширение

//  class Shoes extends Product {

//     constructor(name, prise, type){
//         super(name, prise);
//         this.type = type;
//     }
//     removeQuantity(){
//              this.quantity -= 1;  
//     }
//  }

// const shoes1 = new Shoes('Сапоги', 677, 'зимние');
// console.log(shoes1);

// shoes1.addQuantity();
// shoes1.addQuantity();
// shoes1.addQuantity();
// shoes1.addQuantity();
// shoes1.removeQuantity();
// console.log(shoes1.quantity);


// создать класс для рендиренга прямоугольника
// он принимает ширину, высоту, цвет
//внутри приямоугольника появляется его площадь


class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
calcArea(){
    return this.width * this.height;
}
    createTemplate(){
        return `
        <div style="width: ${this.width}px; height: ${this.height}px; background: ${this.color}" >
        ${this.calcArea()}
        </div>`
    }
 render(){
    document.body.innerHTML = this.createTemplate();
 }

}
const rect = new Rectangle(34, 56, 'orange');
rect.render();

