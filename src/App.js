import './style.css';
import Gameboard from './Component/Gameboard';
import Ship from './Component/Ship';
function App() {
    let startgame = false
    const template = () => {
      return `
          <header>HEADER!</header>
          <div class="boards">
            <div class="boardContainer">
              <div class="player"> 
              </div>
              <div class="placeShip">
              </div>
            </div>
            <div class="boardContainer">
              <div class="ai">
              </div>
            </div>
          </div>
          <footer>FOOTER!</footer>
        `;
    }

    const initialize = () => {
      document.body.innerHTML = template(); 
      const tileClick = document.getElementsByClassName('tilesAi');  
      const tileClickPlayer = document.getElementsByClassName('tilesPlayer');  
      const shipList = [4,4,3,3,2,2,1,1];
      const playerBoard = Gameboard("Player");
      const aiBoard = Gameboard("Ai")
      playerBoard.createGameboard("player");
      aiBoard.createGameboard("ai")

      
      let shipPlaced = dragShip(playerBoard, shipList);
      let aishipPlaced = aiShip(aiBoard, shipList);

      console.log(playerBoard.getBoard());

  
  
      
   
      Array.from(tileClick).forEach(
        (element,index) => {
          
          element.addEventListener('click', ()=>{
            if(startgame){
              let randomNum =  Math.floor(Math.random() * 100);
              if(!aiBoard.getBoard()[Math.floor(index/10)][index%10].attacked){
                aiBoard.receiveAttack('Ai', index%10,Math.floor(index/10));
                element.innerHTML = "x";
                console.log(aiBoard.getBoard());

                while (playerBoard.getBoard()[Math.floor(randomNum/10)][randomNum%10].attacked){
                  randomNum =  Math.floor(Math.random() * 100)
                }
                playerBoard.receiveAttack('Player', randomNum%10,Math.floor(randomNum/10));
                tileClickPlayer[randomNum].innerHTML = "x";

              }
              


              if(aishipPlaced.every(ship => ship.isSunk())){
                console.log("You Win")
              }

             
              if(shipPlaced.every(ship => ship.isSunk())){
                console.log("You Lose")
              }
          }})
        }

      )  
      ////////////////////////////////////////////////////////////////////////////////////  
    }
    const dragShip= (playerBoard, shipList) => {
      const shipPlace = document.querySelector('.placeShip');
      const tileClick = document.getElementsByClassName('tilesPlayer');
      const tilePlace = document.getElementsByClassName('tilePlace');
      
      let ships = [];
      let num = 0;
      let index = 0;
      let shipIndex = 0;

      shipList.forEach((element) => { 
        ships.push(Ship(`ship${num}`, element));
        let spaceTiles = ''
        for(let tile = 0; tile < ships[shipIndex].getLength(); tile++){
            spaceTiles += "<div class='tilePlace'></div>"
        }
        shipPlace.innerHTML= spaceTiles;
        num++;
      })

      shipPlace.setAttribute('draggable', true);
      shipPlace.style.flexDirection = "column";
      console.log(tileClick)
      Array.from(tilePlace).forEach(
        (element,i) =>{
          element.addEventListener("mousedown", (e) => {

            console.log('mousedown: ',i)
            index=i;
          });  
      })
      

      Array.from(tileClick).forEach(
        (element) => {
          element.addEventListener('dragover', (e)=>{
            e.preventDefault();
          })
        }
      ) 
      Array.from(tileClick).forEach(
        (element,i) => {
          element.addEventListener('drop', (e)=>{
           
            let spaceTiles = ''
            console.log(index)
            playerBoard.placeShip(ships[shipIndex],i%10,Math.floor(i/10-index));

            if(ships[shipIndex].getPlaced()){
              shipIndex++;
            }
            
            

          if(shipIndex >= shipList.length){
            shipPlace.innerHTML = '';
            const startBtn = document.createElement('button');
            const resetBtn = document.createElement('button');
            startBtn.innerText = 'START'
            resetBtn.innerText = 'RESET'
            shipPlace.append(startBtn,resetBtn);

            startBtn.addEventListener('click',()=>{
              startgame=true;
              console.log('clicked')
            })
            resetBtn.addEventListener('click',()=>{
              const game = App();
              game.initialize();
            })

          }else{
            for(let tile = 0; tile < ships[shipIndex].getLength(); tile++){
              spaceTiles += "<div class='tilePlace'></div>"
          }
            shipPlace.innerHTML= spaceTiles;
          }
          
          Array.from(tilePlace).forEach(
            (element,i) =>{
              element.addEventListener("mousedown", (e) => {
                index=i;
              });  
          })


          })
        }) 
        return ships
    }
    const aiShip= (aiBoard, shipList) => {
      
      let ships = [];
      let num = 0;
      let shipIndex = 0;

  
      shipList.forEach((element) => { 
        ships.push(Ship(`ship${num}`, element));
        num++;
      })

      
      while(shipIndex < ships.length){
        let digitx =  Math.floor(Math.random() * 100);
        console.log(digitx)
        aiBoard.placeShip(ships[shipIndex],digitx%10,Math.floor(digitx/10));
        if(ships[shipIndex].getPlaced()){
          shipIndex++;
        }
        
      }
      

        return ships
    }
    

    return{template, initialize, dragShip};
  };


  const game = App();

  game.initialize();