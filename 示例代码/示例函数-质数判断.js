/**  这是一个示例函数
 * @param {number} num1 -第一个数字
 * @param {number} num2 -第二个数字
 * @returns {number} -两个数字的和
 */
function sum(num1, num2) {
  return num1 + num2
}

sum()

const nameList = ["Jerry", "陶喆", "小镇姑娘"]

function myTemplate() {
  // join('') 的意思是，把数组里的内容合并成一个字符串
  return `<ul>
	${nameList.map((item) => `<li>${item}</li>`).join("")}
	</ul>`
}
document.body.innerHTML = myTemplate()

//质数判断例子

const num = prompt("请输入一个大于1的整数")

if (num <= 1) {
  alert("该值不合法")
} else {
  //标志位,默认为质数
  let flag = true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false
      break
    }
  }
  if (flag) {
    alert(`${num}是质数`)
    console.log(`${num}是质数`)
  } else {
    alert(`${num}不是质数`)
    console.log(`${num}不是质数`)
  }
}
