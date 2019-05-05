exports.getMedianTemperature = (arr)=>{
    /**
     * SORT ARRAY
     */
    arr= this.sortByTemperature(arr);
    var median=0;
    var arrLengthModule = arr.length%2;

    if(arrLengthModule == 0){
        //even length
            var v1 = arr[(arr.length/2)-1]
            var v2 = arr[arr.length/2]
            median = (v1.temperature+v2.temperature)/2
         
    }else{
        //odd
        var position = parseInt(arr.length/2)
        median=arr[position].temperature
    }
    return median;
}

exports.getTemperatureAverage = (arr)=>{
    var sum =0;
    var average=0;
    if(arr.length>0){
        sum= arr.reduce((a,b)=>(a +b.temperature),0);
        average = sum/2;
    }
    return average;
}
exports.getLowestTemperature = (arr)=>{
    arr= this.sortByTemperature(arr);
    var lowest = arr[arr.length-1]
    return lowest;
}
exports.getHighestTemperature = (arr)=>{
    arr= this.sortByTemperature(arr);
    var highest = arr[0]
    return highest;
}

exports.sortByTemperature = (arr)=>{
    arr= arr.sort((a,b)=>(a.temperature > b.temperature) ? -1: 1)
    return arr;
  }


exports.datesString = (arr)=>{
    for(var a in arr){
        var dateItem =new Date(arr[a].date);
        var month =parseInt(dateItem.getMonth())+1;
        arr[a].date = dateItem.getDate() +'/'+month+'/'+dateItem.getFullYear();
    }
    return arr;
  }