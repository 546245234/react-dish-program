import TabPage from '@/components/TabPage/TabPage'
import Home from '@/components/Home/Home'
import Dish from '@/components/Dish/Dish'
import Car from '@/components/Car/Car'
import Person from '@/components/Person/Person'
import routerPage from '@/components/RouterPage/RouterPage'
export const routes = [
    {
        path:"/",
        component:TabPage,
        routes:[
            {
                path:'/',
                component:Home,
                exact:true,
                icon:'',
                title:'首页'
            },
            {
                path:'/TabPage/Dish',
                component:Dish,
                icon:'',
                title:'点餐'
            },
            {
                path:'/TabPage/Car',
                component:Car,
                icon:'',
                title:'购物车'
            },
            {
                path:'/TabPage/Person',
                component:Person,
                icon:'',
                title:'我的'
            }
        ],
        redirect:'/'
    },
    {
        path:"/routerPage",
        component:routerPage,
    }
]