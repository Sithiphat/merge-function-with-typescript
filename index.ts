export function merge(collection_1: number[],collection_2:number[] ): number[] {
    let ansArray:number[]=[];
    let index1:number=0, index2:number=0;

    while(index1<collection_2.length && index2<collection_2.length ){
        if (collection_1[index1]<collection_2[index2]) {
            ansArray.push(collection_1[index1]);
            index1++;
        }
        else {
            ansArray.push(collection_2[index2])
            index2++;    
        }      
    }
    while(index1<collection_1.length ){
        ansArray.push(collection_1[index1]);
        index1++;
    }
    
    while( index2<collection_2.length ){
        ansArray.push(collection_2[index2])
        index2++;   
    }

    return ansArray;
}

console.log("collection_1 = [3,7,11]" );
console.log("collection_2 = [0,1,1,99]" );
console.log("answer = ["+merge([3,7,11],[0,1,1,99]) + "]\n");
console.log("collection_1 = [2,7,9,10]" );
console.log("collection_2 = [0,0,0,7]" );
console.log("answer = ["+merge([2,7,9,10],[0,0,0,7]) + "]\n");
console.log("collection_1 = [7,7,7,7,7,7,7]" );
console.log("collection_2 = [0,0,0,7]" );
console.log("answer = ["+merge([7,7,7,7,7,7,7],[0,0,0,7]) + "]\n");
console.log("collection_1 = []" );
console.log("collection_2 = []" );
console.log("answer = ["+merge([],[]) + "]\n");