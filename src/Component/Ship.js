function Ship (name, length) {
    let health = length;
    let placed = false;
    let shipArray = [];
    for(let arrIndex = 0; arrIndex < length; arrIndex++){
        shipArray.push({ hit: false });
    }
    const hit = (index) => shipArray[index].hit = true;
    const isSunk = () => shipArray.every((element) => element.hit ==true);
    const getLength = () => length;
    const getHealth = () => health;
    const isPlaced = () => placed;
    const getShipArray= () => shipArray;
    const getName = () => name;
    
    return{
        hit,  getShipArray, isSunk, 
        getLength, getHealth,
        isPlaced, getName
    }

}

export default Ship;