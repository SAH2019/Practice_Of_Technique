export default class Snake {
  head:HTMLElement;
  bodies:HTMLCollection;
  element:HTMLElement;
  constructor(){
    this.head = document.querySelector('#snake>div') as HTMLElement;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    this.element = document.getElementById('snake')!
  }

  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop
  }

// 蛇的身体长度增加
  addBody(){
     this.element.insertAdjacentHTML('beforeend','<div></div>')
  }
// 蛇的身体移动
  moveBody(){
    for(let i = this.bodies.length-1;i>0;i-- ){
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }



// 设置蛇头的x坐标
  set X(value:number){
    if(this.X===value){
      return
    }
    if (value<0 || value>290) {
      throw new Error('蛇撞墙了！!')
    }
    this.moveBody()
    this.head.style.left = value +'px'
  }

// 设置蛇头的y
  set Y(value:number){
    if(this.Y===value){
      return
    }
    if (value<0 || value>290) {
      throw new Error('蛇撞墙了！!')
    }
    this.moveBody()
    this.head.style.top = value + 'px'

  }
}