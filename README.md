# debounce-throttle

### 参数介绍

#### debounce方法包含两个入参

1.回调函数fn
2.连续触发时效间隔时间，支持缺省值，默认200毫秒

#### throttle方法包含两个入参

1.回调函数fn
2.连续触发时效间隔时间，支持缺省值，默认1000毫秒

### 安装

```
npm install debounce-and-throttle
```

### 用法示例

```javascript
import {debounce,throttle} from 'debounce-and-throttle'
document.getElementById('debounceInput').addEventListener('keyup',debounce(function(e){
    console.log(this,e)
}))
document.getElementById('throttleBtn').addEventListener('click',throttle(function(e){
    console.log(this,e)
}))
```