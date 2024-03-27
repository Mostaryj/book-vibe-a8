const getStoredRead =()=>{
    const storedRead = localStorage.getItem('read-book');
    if(storedRead){
        return JSON.parse(storedRead);
    }
    return [];
}

const saveList = Id =>{
       const storedReads = getStoredRead();
       const exits = storedReads.find(readId => readId === Id );
       if(!exits){
        storedReads.push(Id);
        localStorage.setItem('read-book',JSON.stringify(storedReads) );
       }
}



const getStoredWish =()=>{
    const storedRead = localStorage.getItem('wish-book');
    if(storedRead){
        return JSON.parse(storedRead);
    }
    return [];
}


const saveWishList = Id =>{
    const storedReads = getStoredWish();
    const exits = storedReads.find(readId => readId === Id );
    if(!exits){
     storedReads.push(Id);
     localStorage.setItem('wish-book',JSON.stringify(storedReads) );
    }
}


export {saveList, getStoredRead}
export {getStoredWish, saveWishList}