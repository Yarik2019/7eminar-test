import { createRouter, createWebHistory } from "vue-router";
import HomeVideo from "../views/HomeVideo.vue";
import AllVideosView from "../views/HomeVideo/AllVideosView.vue";
import MyVideos from "../views/HomeVideo/MyVideos.vue";
import DocumentsView from "@/views/DocumentsView";
import TopicsView from "@/views/TopicsView";

const routes = [
  {
    path: "/",
    name: "HomeVideo",
    component: HomeVideo,
    children: [
      {
        path: "",
        name: "allVideo",
        component: AllVideosView,
      },
      {
        path: "my-videos",
        name: "MyVideos",
        component: MyVideos,
      },
    ],
  },
  {
    path: "/Documents",
    name: "DocumentsView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DocumentsView,
  },
  {
    path: "/topics",
    name: "TopicsView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TopicsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
