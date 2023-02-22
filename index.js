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

// let arr = [1, 2, 3, 4, 5];
// let result = arr.splice(1, 2);
// console.log(arr);
// console.log(result);
// let plusarry = arr.concat([7, 8]);
// console.log(plusarry);

let users = ["n", "b", "a"];
users.forEach((item, index, arr) => {
  console.log(`${index}, ${item}, ${arr}`);
});

function solution(common) {
  const length = common.length;
  const diff = common[1] - common[0]; // 등차수열의 공차
  const ratio = common[1] / common[0]; // 등비수열의 공비
  console.log("common", diff);

  if (common[length - 1] - common[length - 2] === diff) {
    // 주어진 수열이 등차수열인 경우
    return common[length - 1] + diff;
  } else {
    // 주어진 수열이 등비수열인 경우
    return common[length - 1] * ratio;
  }
}

let arryItem = [1, 2, 3, 4, 5];
let find = arryItem.filter((item) => {
  return item % 2 === 0;
});
console.log("find", find);

// function solution(num, total) {
//   let start  Math.floor(total / num) - Math.floor(num / 2);
//   const result = [];

//   if (start <= 0) {
//     start = 1;
//   }

//   for (let i = 0; i < num; i++) {
//     result.push(start + i);
//   }

//   if (result.reduce((acc, cur) => acc + cur, 0) !== total) {
//     return [-1];
//   }

//   return result;
// }
// console.log("cote", solution(4, 14));

function solution(num, total) {
  const start = Math.floor((total - (num * (num - 1)) / 2) / num);
  if (start < 1) {
    return [-1];
  }
  return Array.from({ length: num }, (_, i) => start + i);
}
console.log(solution(5, 1150));

const answer = [3, 1, 4, 6];
const value = "3214";
let strike = 0;
let ball = 0;
answer.forEach((element, index) => {
  console.log("value", element === 3);
});
for (let i = 0; i < answer.length; i++) {
  const index = value.indexOf(answer[i]);
  if (index > -1) {
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
}
console.log(strike);

const array = [1, 2, 3, 4];
const result = [];
// for (let i = 0; i < 4; i++) {
//   result.push(array[i] * 2);
// }
const b = array.map((element, i) => {
  return element * 2;
});
console.log(b);

const a = Array(5)
  .fill(0)
  .map((e, i) => {
    return i + 1;
  });

console.log(a);

[1, 2, 3, 4].forEach((element) => {
  console.log(element);
});

const 과일 = ["바나나", "사과", "수박"];
const 과일2 = ["딸기", "자두", "복숭아"];

const f = 과일.forEach((과일) => {
  과일2.push(과일);
});
console.log(과일2);

const numbers = [20, 11, 33, 10, 7, 77, 2];
numbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log(numbers);
