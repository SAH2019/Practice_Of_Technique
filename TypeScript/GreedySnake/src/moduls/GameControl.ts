import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

export default class GameControl{
      snake:Snake;
      food:Food;
      scorePanel:ScorePanel;
      direction:string = '';
      isLive:boolean;
      constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.isLive = true
        this.init()
      }
      init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run()
      }


      keyDownHandler(event:KeyboardEvent){
        // console.log(event.key);
        this.direction = event.key
      }

      run(){
        let X= this.snake.X;
        let Y= this.snake.Y;
        switch (this.direction) {
          case 'ArrowUp':
              Y-=10;
            break;
          case 'ArrowDown':
              Y+=10;
              break;
          case 'ArrowLeft':
              X-=10;
              break
          case 'ArrowRight':
              X+=10;
              break;
          default:
              break;
        }
        if(this.checkEat(X,Y)){
          this.food.change();
          this.scorePanel.addScore()
          this.snake.addBody()
        }
        try {
          this.snake.X = X
          this.snake.Y = Y
        } catch (error) {
          console.log(error.message);
          this.isLive = false
        }
     
       this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
      }
      checkEat(X:number,Y:number){
        return X===this.food.X && Y===this.food.Y
      }
}