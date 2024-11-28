function sayHello(name, callback) {
	var myName = name.toUpperCase() + ", Hello";
    return callback(myName);
}
 
var result = sayHello("Khoa", function (arg) {
    return arg;
});
 
alert(result);