function Gameboard (name) {
    const board = [];
    const tileClick = document.getElementsByClassName(`tiles${name}`);

    const createGameboard = (string) => {
        const boardname = document.querySelector(`.${string}`)
        for (let y = 0; y < 10; y++) {
            board[y] = [];
            for (let x = 0; x < 10; x++) {
                const tiles = document.createElement("div");
                tiles.classList.add(`tiles${string.charAt(0).toUpperCase() + string.slice(1)}`);
                board[y].push({shipObject: null, shipIndex: undefined, attacked :false })
                boardname.appendChild(tiles);
            }
        }

    }
    const getBoard = () => {
        return board
    }

    const isAvailable = (ship, x, y) => {
        for(let checkTiles = 0; checkTiles < ship.getLength(); checkTiles++){
            if(y+checkTiles >= 10 || y+checkTiles <0){
                return false
            }
            if(board[y+checkTiles][x].shipObject !== null){
                return false
            } 
        }
        return true;
    }

    const placeShip = (ship, x, y) =>{
        if(isAvailable(ship, x, y)){
            for(let loop = 0; loop < ship.getLength(); loop++){
                Array.from(tileClick)[(y)*10 + (x) + loop*10].style.backgroundColor = "#b4d2e7";
                Array.from(tileClick)[(y)*10 + (x) + loop*10].classList.add('target');
                board[y+loop][x].shipObject = ship;
                board[y+loop][x].shipIndex = loop;
                ship.isPlaced()
            } 
        }
    }

    const receiveAttack = (box, x, y) => {
        console.log(x,y);
        if(!board[y][x].attacked){
            if(board[y][x].shipObject !== null){
                const hitTarget = document.getElementsByClassName(`tiles${box}`);
                board[y][x].shipObject.hit(board[y][x].shipIndex); 
                hitTarget[y*10+x].style.color = "blue";

              } 

            board[y][x].attacked = true;  
        } 

    }

    

    return {createGameboard, getBoard, isAvailable, placeShip, receiveAttack}
}

export default Gameboard;