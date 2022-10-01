import './style.css';
import Gameboard from './Component/Gameboard';
import Ship from './Component/Ship';
function App() {
    const template = () => {
      return `
          <header>HEADER!</header>
          <div class="boards">
            <div class="player">
            
            </div>
            <div class="ai">
        
              Example of state management in Vanilla JS
            </div>
          </div>
          <footer>FOOTER!</footer>
        `;
    }

    const initialize = () => {
      document.body.innerHTML = template();
      const tileClick = document.getElementsByClassName('tiles')
      const shipList = [4,4,3,3,2,2,1,1]; 
      let num = 0
      let ships = {}
    
      shipList.forEach(element => { 
        ships[`ship${num}`] = Ship(`ship${num}`, element)
        num++;
      })
      
      const playerBoard = Gameboard();
      playerBoard.createGameboard("player");

      shipList.forEach(element => { 
        ships[`ship${num}`] = Ship(element)
        num++;
      })
      
    playerBoard.placeShip(ships.ship0, 2, 3);
    playerBoard.placeShip(ships.ship1, 4, 3);
    playerBoard.placeShip(ships.ship2, 5, 3);
    playerBoard.placeShip(ships.ship3, 6, 4);
    playerBoard.placeShip(ships.ship4, 7, 7);
    playerBoard.placeShip(ships.ship5, 8, 8);
    playerBoard.placeShip(ships.ship6, 9, 9);
    playerBoard.placeShip(ships.ship7, 0, 1);

    console.log(playerBoard.getBoard());

    
    Array.from(tileClick).forEach(
        (element,index) => {
          element.addEventListener('click', ()=>{
            if(!playerBoard.getBoard()[Math.floor(index/10)][index%10].attacked){
              playerBoard.receiveAttack( index%10,Math.floor(index/10));
              element.innerHTML = "x";
            }
            console.log(playerBoard.getBoard())
          })
        }
      )  

    }
    return{template, initialize}
  };


  const game = App();

  game.initialize();