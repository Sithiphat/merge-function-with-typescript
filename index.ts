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