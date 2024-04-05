export function getTodaysDate(){
    const date = new Date();
    const day = date.getDay();
    const month = date.toLocaleString('default', { month: 'long' });
    const year= date.getFullYear();
    
    return   `${month} ${day}, ${year}` ;
}
