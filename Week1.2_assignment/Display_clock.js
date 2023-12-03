function clock(){
  const date_time = new Date()
  console.log(`${date_time.getHours()}:${date_time.getMinutes()}:${date_time.getSeconds()}`)
}
setInterval(clock,1000)