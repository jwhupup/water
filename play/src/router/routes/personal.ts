import { RouteRecordRaw } from 'vue-router';

export const personal: RouteRecordRaw[] = [
  { path: '/', redirect: 'test' },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test.vue'),
      },
    ],
  },
];
