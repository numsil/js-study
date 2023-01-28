const sample = (param) => {
  if (Array.isArray(param)) {
    return true;
  }
  return false;
};

const sample2 = (param) => {
  if (!(param.length > 1)) return;
  return param.filter((item) => item % 2 === 0);
};

console.log(sample([2]));

console.log(sample2([1, 2, 4, 3, 2, 5, 6, 7, 56, 43, 2]));

const sample3 = (param) => {
  if (typeof param !== "string") return;
  return param.length;
};
console.log(sample3(1));

const sample4 = (param) => {
  if (typeof param !== "number") return;
  return param * 2;
};

const sample5 = () => {
  let count = 0;
  console.log("start");
  const countUp = setInterval(() => {
    count += 1;
    console.log(count);
    if (count === 5) {
      console.log("end");
      clearInterval(countUp);
    }
  }, 1000);
  console.log("function end");
};
// sample5();

const obj = [
  {
    id: 1,
    title: "sample1",
    done: false,
  },
  {
    id: 2,
    title: "sample2",
    done: false,
  },
  {
    id: 3,
    title: "sample3",
    done: false,
  },
  {
    id: 4,
    title: "sample4",
    done: false,
  },
  {
    id: 5,
    title: "sample5",
    done: false,
  },
  {
    item: [
      {
        a: 1,
      },
      {
        a: 2,
      },
      {
        a: 3,
      },
    ],
  },
];

const sample6 = (param) => {
  if (!Array.isArray(param)) return;
  const temp = param.map((item) => ({
    ...item,
    title: "",
  }));

  const filters = temp.filter((v) => v.title);
  console.log(filters);
  return temp;
};
console.log("=>", sample6(obj));
console.log([] == "0"); // false
console.log("0" == 0); // true
console.log([] == 0); // true
console.log("1" + 1); // 11
console.log("1" - 1); // 0

const inValue = () => {
  for (const x of obj) {
    const a = x.item;
    console.log("=>", a);
  }
};
inValue();

const getlocation = (c, x, y) => {
  if (typeof x === "undefined") {
    x = "A";
  }
  if (typeof y === "undefined") {
    y = "B";
  }
  console.log(x, y, c);
};

getlocation("C");

const box = () => {};
// falsy
// undefined, null, "", 0, false, {}, []
