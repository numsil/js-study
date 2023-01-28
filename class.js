class 동물 {
  털 = "수북하다";
  constructor(종류, 몸무게, 키) {
    this.종류 = 종류;
    this.몸무게 = 몸무게;
    this.키 = 키;
  }

  울부짖다(울음) {
    return `${this.종류}가 ${울음}소리를 내다.`;
  }
  먹다(음식) {
    return `${this.종류}가 ${음식}을 먹었다.`;
  }
  싸다() {
    return `${this.종류}가 똥을 싸다.`;
  }
  정보() {
    return `몸무게 : ${this.몸무게}, 키 : ${this.키}, 털 : ${this.털}`;
  }
}

class 인류 extends 동물 {
  constructor(이름, 종류, 몸무게, 키) {
    super(종류, 몸무게, 키);
    this.이름 = 이름;
  }
  말하다(말) {
    return `${this.이름}이(가) ${말}이라고 했다.`;
  }
  생각하다(무슨생각) {
    return `${this.이름}가 ${무슨생각}이라는 생각을 했다!`;
  }
}

const 강아지 = new 동물("강아지", "5kg", "40cm");
console.log(강아지.먹다("개밥"));
console.log(강아지.싸다());
console.log(강아지.울부짖다("멍멍"));
console.log(강아지.정보());

const 김선우 = new 인류("김선우", "사람", "169cm", "60kg");
console.log(김선우.말하다("난 병신"));
console.log(김선우.생각하다("아무 생각 없음"));

function 사람(음식물) {
  let 배설물;
  if (음식물 === "치킨") {
    return `${음식물}을 먹고 체했음`;
  }
  배설물 = 음식물 !== "" ? "똥" : "아무것도 없음";
  return `${음식물}을 먹고 ${배설물}을 만들어내`;
} // 음식물을 먹고 배설물을 만들어냈을지도 모름

function 사람(음식물) {
  return `Hello ${음식물}`;
} // Hello 음식물

function 사람() {} // undef

console.log(사람("피자"));
