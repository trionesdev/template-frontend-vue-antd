import {createMemoryHistory, createRouter} from "vue-router";

const routes: any[] = [
    {path: '/sign-in', component: () => import('@app/account/sign-in/page.vue')},
    {
        path: '/', component: () => import('@app/normal/layout/index.vue'),
        children: [
            {
                path: '/',
                component: () => import('@app/normal/org/members/page.vue')
            }
        ]
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})