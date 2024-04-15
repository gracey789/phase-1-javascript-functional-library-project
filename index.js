// Helper function to convert objects into arrays if necessary
const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
  // Iterates over each element and applies a callback
  const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
  
    return collection;
  }
  
  // Creates a new array by applying a callback to each element
  const myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
  
    return newArr;
  }
  
  // Reduces the collection to a single value using a callback function
  const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  // Finds the first element that satisfies a predicate function
  const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
  
    return undefined;
  }
  
  // Creates a new array with elements that pass a predicate function
  const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
  }
  
  // Returns the number of elements in the collection
  const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
  
  // Returns the first element or n elements of an array
  const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
  // Returns the last element or n elements of an array
  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  
  // Sorts array elements based on values returned by a callback
  const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
  // Flattens a nested array, optionally only one level deep
  const myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  
  // Returns an array containing the keys of the given object
  const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  // Returns an array containing the values of the given object
  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  }
  