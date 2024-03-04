var a = null
console.log(typeof a)

const str = "abcdea"

//给字符查索引(索引值为0,说明字符串以查询的参数为开头)
console.log(str.indexOf("c"))
console.log(str.lastIndexOf("c"))

console.log(str.indexOf("a"))
console.log(str.lastIndexOf("a"))

var name1 = "abcdefghijklmn"
var cut = name1.slice(1, -1)
alert(cut)

var str2 = "smyhvaevaesmyhvae"

//定义一个json，然后判断json中是否有该属性，如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
var json = {}
for (var i = 0; i < str2.length; i++) {
  //判断：如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
  var key = str2.charAt(i)
  if (json[key] === undefined) {
    json[key] = 1
  } else {
    json[key] += 1
  }
}
console.log(json)

console.log("----------------")
//获取json中属性值最大的选项
var maxKey = ""
var maxValue = 0
for (var k in json) {
  //        if(maxKey == ""){
  //            maxKey = k;
  //            maxValue = json[k];
  //        }else{
  if (json[k] > maxValue) {
    maxKey = k
    maxValue = json[k]
  }
  //        }
}
console.log(maxKey)
console.log(maxValue)

var url = "http://www.cnblogs.com/smyhvae/"

var str1 = encodeURIComponent(url)
console.log(str1) //打印url的编码
console.log(decodeURIComponent(str1)) //对url进行编码后，再解码，还原为url

const date14 = new Date("Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)")
console.log(date14) // Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)

var myDate = new Date("1970/01/01 8:0:0")

console.log(myDate.getTime()) // 获取时间戳

// 方式一：获取 Date 对象的时间戳（最常用的写法）
const timestamp1 = +new Date()
console.log(timestamp1) // 打印结果举例：1589448165370
