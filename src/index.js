// index.js
import './index.css' // 导入css
import './index.scss'

const hello = require('./hello.js');
document.querySelector("#root").appendChild(hello());