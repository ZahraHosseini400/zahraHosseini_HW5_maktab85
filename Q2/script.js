let Obj = {
    num: 0,
  
    increase: function () {
      this.num += 1;
      return this;
    },
    decreas: function () {
      this.num -= 1;
      return this;
    },
    reset: function () {
      this.num -=this.num;
      return this;
    },
   read: function () {
      console.log(this.num);
      return this;
    },
  };
  Obj.increase().increase().increase().reset().read().decreas().read().increase().read();
  // console.log(Obj.num);
  