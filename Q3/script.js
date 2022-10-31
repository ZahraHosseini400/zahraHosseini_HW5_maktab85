function compareAge(a, b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
  }
  let arrayObjs = [
    { name: "ZAHRA", age: 28 },
    { name: "Anne", age: 20 },
    { name: "James", age: 40 },
  ];
  const get = (arrayObjs) => {
    arrayObjs.sort(compareAge);
    console.log(arrayObjs);
  };
  get(arrayObjs);
  