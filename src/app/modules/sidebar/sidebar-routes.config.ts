import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Panel',  icon: 'dashboard', class: '' },
    { path: 'user', title: 'Usuario',  icon: 'person', class: '' },
    { path: 'table', title: 'Listas',  icon: 'content_paste', class: '' },
    { path: 'typography', title: 'Mensajes',  icon: 'chat', class: '' },
    { path: 'icons', title: 'Valoraciones',  icon: 'stars', class: '' },
    { path: 'maps', title: 'Mapa',  icon: 'location_on', class: '' },
    { path: 'notifications', title: 'Notificaciones',  icon: 'notifications', class: '' },
    { path: 'upgrade', title: 'Exportar estadísticas',  icon: 'unarchive', class: 'active-pro' },
];
