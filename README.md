### clickout-vue3
Register clickout event in javascript
### Description
A Vue3 directive is used when clicked outside of an element

source codes are pushed on github where is https://github.com/waitInHope/clickout-vue3

---

### Import
`npm install clickout --save`

---

### API

```
import Clickout from 'clickout-vue3'

// 全局指令
let vue = creatApp().use(Clickout)

// 组件指令
export default {
	directives: {
		'clickout': Clickout
	}
}
```

---

### example

`<div v-clickout=clickoutEvent></div>`
