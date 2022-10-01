function Gameboard () {
    const board = [];
    const tileClick = document.getElementsByClassName('tiles');

    const createGameboard = (string) => {
        const boardname = document.querySelector(`.${string}`)
        for (let y = 0; y < 10; y++) {
            board[y] = [];
            for (let x = 0; x < 10; x++) {
                const tiles = document.createElement("div");
            tiles.classList.add("tiles");
              board[y].push({shipObject: null, shipIndex: undefined, attacked :false })
              boardname.appendChild(tiles);
            }
        }

    }
    const getBoard = () => {
        return board
    }

    /* 
        Needs for a logic for overlapping you 
        may want to get the length if it overlaps
        go on to the vertical first 
    */
    const isAvailable = (ship, x, y) => {

        for(let checkTiles = 0; checkTiles < ship.getLength(); checkTiles++){

            if(board[y+checkTiles][x].shipObject !== null){
            
                return false
            }
        }
        return true;
    }

    const placeShip = (ship, x, y) =>{

        if(isAvailable(ship, x, y)){
            
            for(let loop = 0; loop < ship.getLength(); loop++){
                Array.from(tileClick)[(y)*10 + (x) + loop*10].style.backgroundColor = "pink";
                
                board[y+loop][x].shipObject = ship;
                board[y+loop][x].shipIndex = loop;
        }
        
    }

    }

    const receiveAttack = (x, y) => {
        console.log(x,y);
        if(!board[y][x].attacked){
            if(board[y][x].shipObject !== null){
                board[y][x].shipObject.hit(board[y][x].shipIndex); 
                if(board[y][x].shipObject.isSunk()){
                    console.log(`${board[y][x].shipObject.getName()} is Sunked`)
                }
              } 
            // else{
            //     console.log(board[y][x].shipObject)
            //     console.log('missed')  
            // }
            board[y][x].attacked = true;  
        } 
        // else{
        //     board[y][x].attacked = true;
        //      console.log('hit')
        //     return null; //for testing
        // }
         // logic if it is hit before
         //add test for hitted before
    }

    

    return {createGameboard, getBoard, isAvailable, placeShip, receiveAttack}
}

export default Gameboard;