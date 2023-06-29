The new APIs in ES6 come in three flavours: Symbol, Reflect, and Proxy

# Symbols can be used to Create Unique Object Keys.
var myObj = {}

// create a new set of keys so as to prevent over-writing dict key values
myObj['key1'] = "hello"
var key1 = Symbol('key1');
myObj[key1] = "world";
// The two keys are not identical and will not over-write the value  'hello'
# Symbols are unique similar to python's uuid4()
let temp1 = Symbol('foo')
let temp2 = Symbol('foo')
temp1 == temp2 # false

# Symbols can be made non unique by using the inbuilt method Symbol.for()
> Symbol.for('foo') == Symbol.for('foo')
true

# Well Known Symbols
### Symbol.hasInstance: instanceof
lho instanceof rho would call rho[Symbol.hasInstance](lho)

class MyClass {
    static [Symbol.hasInstance](lho) {
        return Array.isArray(lho);
    }
}
[] instanceof MyClass  // output=true

### Symbol.iterator
var myArray = [1,2,3];

// with `for of`
for(var value of myArray) {
    console.log(value);
}

// without `for of`
var _myArray = myArray[Symbol.iterator]();
while(var _iteration = _myArray.next()) {
    if (_iteration.done) {
        break;
    }
    var value = _iteration.value;
    console.log(value);
}

sample 2 implementation 
class Collection {
  *[Symbol.iterator]() {
    var i = 0;
    while(this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }

}
var myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;
for(var value of myCollection) {
    console.log(value); // 1, then 2
}
### Symbol.isConcatSpreadable
This symbol drives the behavior of Concatenating Arrays.
x = [1, 2].concat([3, 4], [5, 6], 7, 8);
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
// all array subsets are amalgamated into a single array.
in ES6, the ability of an array subset to be merged as a union is termed as being 'spreadable'.
The boolean property that decides this is  --> Symbol.isConcatSpreadable  

class ArrayIsh extends Array {
    get [Symbol.isConcatSpreadable]() {
        return true;
    }
}
class Collection extends Array {
    get [Symbol.isConcatSpreadable]() {
        return false;
    }
}

arrayIshInstance = new ArrayIsh();
arrayIshInstance[0] = 3;
arrayIshInstance[1] = 4;
collectionInstance = new Collection();
collectionInstance[0] = 5;
collectionInstance[1] = 6;

spreadableTest = [1,2].concat(arrayIshInstance).concat(collectionInstance);
[ 1, 2, 3, 4, 5, 6 ]