var obj1 = {name: "person1", age:5};
var obj2 = {age:5, name: "person1"};

var obj1String = JSON.stringify(obj1);
var obj2String = JSON.stringify(obj2);

if (obj1String === obj2String) {
  console.log("The two JSON objects are equal");
} else {
  console.log("The two JSON objects are not equal");
}