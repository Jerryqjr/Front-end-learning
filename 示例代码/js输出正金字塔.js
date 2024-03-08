for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= 5 - i; k++) {
    document.write("&ensp;")
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    document.write("*")
  }
  document.write("<br>")
}
