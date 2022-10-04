function Ship (name, length) {
    let health = length;
    let placed = false;
    let shipArray = [];
    for(let arrIndex = 0; arrIndex < length; arrIndex++){
        shipArray.push({ hit: false });
    }
    const hit = (index) => shipArray[index].hit = true;
    const isSunk = () => shipArray.every((element) => element.hit ==true);
    const isPlaced = () => placed = true;
    const getPlaced = () => placed;
    const getLength = () => length;
    const getHealth = () => health;
    const getShipArray= () => shipArray;
    const getName = () => name;
    
    return{
        hit,   isSunk, isPlaced,
        getShipArray, getLength, getHealth,
        getName, getPlaced
    }

}

export default Ship;