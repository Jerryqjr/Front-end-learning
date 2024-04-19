//1.ajax
// const xhr = new XMLHttpRequest()
// xhr.open("GET", "https://api-vue-base.itheima.net/api/form/submit?name=Jerry")
// xhr.send()
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     console.log(JSON.parse(xhr.responseText))
//   }
// }

// xhr.open("POST", "https://api-vue-base.itheima.net/api/form/submit")
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
// xhr.send("name=Jerry")
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     console.log(JSON.parse(xhr.responseText))
//   }
// }

//2.axios
;(async () => {
  //基地址
  const ins = axios.create({
    baseURL: "https://api-vue-base.itheima.net/api/form",
  })

  //拦截器
  ins.interceptors.request.use((config) => {
    console.log("发送了请求")
    return config
  })

  ins.interceptors.response.use((res) => {
    console.log("回应了请求")
    return res
  })

  const res = await ins.get("/submit", {
    params: {
      MyName: "Jerry",
      age: 18,
    },
  })

  const res2 = await ins.post("/submit", {
    MyName: "Jerry",
    age: 18,
  })
  console.log(res.data)
  console.log(res2.data)
})()

//3.Fetch API
fetch("https://api-vue-base.itheima.net/api/form/submit?name=Jerry")
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .then((data) => {
    console.log(data)
  })

fetch("https://api-vue-base.itheima.net/api/form/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    MyName: "Jerry",
    age: 18,
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .then((data) => {
    console.log(data)
  })
