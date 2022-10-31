let user = {
    Name: "John",
    Age: 30,
  
    sayHello: function () {
      return "hello" + " " + this.Name;
    },
  };
  
  var a = user.sayHello();
  document.write(a);
  // console.log(a);
  
  
  