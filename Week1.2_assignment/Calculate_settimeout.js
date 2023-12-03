function calculateTime(){
    const starttime = Date.now()
    setTimeout(() => {
        const endtime = Date.now()
        console.log(`function execution time is:${endtime-starttime}`)
    },1000)
}
calculateTime()