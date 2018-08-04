const dispfloatMenu = new class {
　sample() {
    console.log("hoge")
  }
}

dispfloatMenu.sample()


class DisplayName {
　sample() {
    console.log("fuga")
  }
}
const displayName = new DisplayName()
displayName.sample()


// class DisplayFloatMenu {
// 　sample() {
//     console.log("fizz")
//   }
// }
// const displayFloatMenu = new DisplayFloatMenu()

const displayFloatMenu = new class DisplayFloatMenu {
　sample() {
    console.log("fizz")
  }
}();
displayFloatMenu.sample()

const newDisplayFloatMeny = new DisplayFloatMenu()
newDisplayFloatMeny().sample()