import { createWebHistory, createRouter } from "vue-router"

import PhoneAccueil from "@/pages/PhoneAccueil.vue"
import PhoneConnexion from "@/pages/PhoneConnexion.vue"
import PhoneMain from "@/pages/PhoneMain.vue"
import PhoneRecette from "@/pages/PhoneRecette.vue"

const routes = [
    {
        path: "/",
        name: "PhoneAccueil",
        component: PhoneAccueil
    },
    {
        path: "/phoneconnexion",
        name: "PhoneConnexion",
        component: PhoneConnexion
    },
    {
        path: "/phonemain",
        name: "PhoneMain",
        component: PhoneMain
    },
    {
        path: "/phonerecette",
        name: "PhoneRecette",
        component: PhoneRecette
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;