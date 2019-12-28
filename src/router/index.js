import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home");
const Login = () => import("views/login/Login");
const Regist = () => import("views/regist/Regist");
const Error = () => import("components/content/error/Error");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Search = () => import("views/search/Search");

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/regist',
        component: Regist,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '*',
        component: Error
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
