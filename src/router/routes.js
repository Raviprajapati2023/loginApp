const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "home", component: () => import("pages/HomePage.vue") },
      { path: "upload", component: () => import("pages/UploadPage.vue") },
      {
        path: "calculator",
        component: () => import("pages/CalculatorPage.vue"),
      },
      {
        path: "gallary",
        component: () => import("pages/ImageGallary.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
