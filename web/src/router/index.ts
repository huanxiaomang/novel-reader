import { createRouter, createWebHistory } from "vue-router"
import { constantRoute } from "./routes"
//创建路由
let router = createRouter({
    //路由模式
    //webhistory
    history: createWebHistory(),
    routes: constantRoute,
    //滚动行为，切换路由时自动到顶
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

export default router;