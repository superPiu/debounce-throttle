import {debounce,throttle} from 'debounce-and-throttle'
document.getElementById('debounceInput').addEventListener('keyup',debounce(function(e){
    console.log(this,e)
}))
document.getElementById('throttleBtn').addEventListener('click',throttle(function(e){
    console.log(this,e)
}))
