// ECMASCRIPT 3

// 1. Dot syntax

var newObject = {};

// set properties
newObject.someKey = "Hello World";

// get properties
var value = newObject.someKey;

console.log(value);

// 2. Square brackets syntax

// set properties
var newObject = {};
newObject["someKey"] = "Hello World again";

// get properties
var value = newObject["someKey"];
console.log(value);

// ECMASCRIPT 5 only compatible approaches

// 3. Object.defineProperty

// set properties
var newObject = {};
Object.defineProperty( newObject, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(newObject.someKey)

// short-hand coudl be written as follows:

var defineProp = function(obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  Object.defineProperty(obj, key, config);
};

// to use, we then create a new empty "person" object
var person = Object.create(Object.prototype);

// populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirht", "1981");
defineProp(person, "hasBeard", false);

console.log(person)

