// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
export async function getRoutes() {
  return {
    routes: {"1":{"path":"/","file":"@/pages/index.vue","parentId":"@@/global-layout","id":"1"},"2":{"path":"/docs/:id","file":"@/pages/docs/index.vue","parentId":"@@/global-layout","id":"2"},"3":{"path":"/:pathMatch(.*)*","name":"NotFound","file":"@/pages/404.vue","parentId":"@@/global-layout","id":"3"},"@@/global-layout":{"id":"@@/global-layout","path":"/","file":"@/layouts/index.vue","isLayout":true}},
    routeComponents: {
'1': () => import(/* webpackChunkName: "p__index" */'@/pages/index.vue'),
'2': () => import(/* webpackChunkName: "p__docs__index" */'@/pages/docs/index.vue'),
'3': () => import(/* webpackChunkName: "p__404" */'@/pages/404.vue'),
'@@/global-layout': () => import(/* webpackChunkName: "layouts__index" */'@/layouts/index.vue'),
},
  };
}
