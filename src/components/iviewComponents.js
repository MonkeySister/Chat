import Vue from "vue"
import { Button, Table, Avatar, Icon, Row, Col, Message } from "view-design"
Vue.prototype.$Message = Message
let obj = Object.assign({}, { Button, Table, Avatar, Icon, Row, Col })
for (let com in obj) {
  Vue.component(com, obj[com])
}
