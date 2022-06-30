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
return order ? arr.sort((a,b)=> a.date.split(" ")[0] - b.date.split(" ")[0])
             : arr.sort((a,b)=> b.date.split(" ")[0] - a.date.split(" ")[0]);
}