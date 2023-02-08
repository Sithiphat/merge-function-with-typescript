import { merge } from '../index';

describe('testing index file', () => {
  const collection_1: number[] = [];
  const collection_2: number[] = [];

  test('empty array should return empty array', () => {
    expect(merge(collection_1,collection_2)).toEqual([]);
  });

  test('should return merged array', () => {
    expect(merge([2,7,9,10],[0,0,0,7])).toEqual([0,0,0,2,7,7,9,10]);
  });

  test('should return merged array', () => {
    expect(merge([7,7,7,7,7,7,7],[0,0,0,7])).toEqual([0,0,0,7,7,7,7,7,7,7,7]);
  });


  test('should return array1 if array2 is empty', () => {
    expect(merge([2,7,9,10],[])).toEqual([2,7,9,10]);
  });
  
  test('should return array2 if array1 is empty', () => {
    expect(merge([],[2,7,9,10])).toEqual([2,7,9,10]);
  });
  
});