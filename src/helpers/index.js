/**
 * Helpers Functions
 */

// Function to group elements of BlogData array with same date property into an inner array 
export const groupByDate = (arr) =>{
    let sorted_arr = sortByDate(arr, false);
    let grouped = sorted_arr.reduce((r,v, i, a) => {
      r = i===1 ? [[r]] : r;
      if(v.date===a[i-1].date){
        r[r.length-1] = r[r.length-1] || []
        r[r.length-1].push(v)
      }else{
        r.push([v]);
      }
      return r;
    });
    return grouped
  }
  

// Function to sort the BlogData array by its element's property 'date' in given order( true: descending / false: ascending)
export const sortByDate = (arr, order) => {
  const monthInDigit = {
    "JAN" : 1,
    "FEB" : 2,
    "MAR" : 3,
    "APR" : 4,
    "MAY" : 5, 
    "JUN" : 6,
    "JUL" : 7,
    "AUG" : 8,
    "SEP" : 9,
    "OCT" : 10,
    "NOV" : 11,
    "DEC" : 12
  }
  
  const dateFormater = (date) => {
    const dateFormated = new Date(date.split(" ")[2]+ "-" + monthInDigit[date.split(" ")[1]] + "-" + date.split(" ")[0])
    return dateFormated;
  }

  return order ? arr.sort((a,b)=>new Date(dateFormater(a.date)) - new Date(dateFormater(b.date)))
              : arr.sort((a,b)=> new Date(dateFormater(b.date)) -new Date(dateFormater(a.date)));
}
