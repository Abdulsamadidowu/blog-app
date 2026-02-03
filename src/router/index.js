import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component:()=> import("../views/Homeview.vue")
    },
    {
      path: "/post/:id",
      name: "post",
      component: ()=>import("../views/Postview.vue")

    },
    {
      path: "/signup",
      name: "signup",
      component: ()=>import("../views/Createaction.vue")
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ()=>import("../views/Contactview.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: ()=>import("../views/Errorview.vue")
    },
  ],
});

export default router;
