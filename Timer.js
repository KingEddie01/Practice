const label = document.getElementById("timerLabel");
updateTime();
setInterval(updateTime,1000)

function updateTime(){
    let date = new Date();
    label.innerHTML = timeFormat(date);

    function timeFormat(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        hours = addZero(hours);
        minutes= addZero(minutes);
        seconds = addZero(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrpm}`;


        function addZero(time){
            time = time.toString();
            return time.length < 2 ? "0" + time : time;

        }
    }
}

