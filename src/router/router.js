import { createWebHistory, createRouter } from "vue-router"

import PhoneAccueil from "@/pages/PhoneAccueil.vue"
import PhoneConnexion from "@/pages/PhoneConnexion.vue"
import PhoneMain from "@/pages/PhoneMain.vue"
import PhoneRecette from "@/pages/PhoneRecette.vue"

const routes = [
    {
        name: "PhoneAccueil",
        path: "/",
        component: PhoneAccueil
    },
    {
        name: "PhoneConnexion",
        path: "/phoneconnexion",
        component: PhoneConnexion
    },
    {
        name: "PhoneMain",
        path: "/phonemain",
        component: PhoneMain
    },
    {
        name: "PhoneRecette",
        path: "/phonerecette/:id",
        component: PhoneRecette
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;