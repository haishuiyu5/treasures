import RouterMenu from '@/router/Menu/index'

export default {
    path: '/Layout',
    name: 'Layout',
    title: '布局',
    icon: 'House',
    component: () => import('@/views/Home/index.vue'),
    children: RouterMenu
}