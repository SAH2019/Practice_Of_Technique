export default class Food{
  element:HTMLElement;
  // X:number;
  // Y:number;
  constructor(){
    this.element = document.getElementById('food')!;
  }


  // 获取食物x轴坐标
  get X(){
    return this.element.offsetLeft
  }
  get Y(){
    return this.element.offsetTop
  }
  change(){
    this.element.style.left = Math.round(Math.random()*29)*10+'px'
    this.element.style.top = Math.round(Math.random()*29)*10+'px'
  }
}

let food =new Food()
food.change()
console.log(food);

