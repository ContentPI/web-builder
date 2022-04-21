const sidebar = {
  title: 'menu',
  menu: [
    {
      title: 'sidebar.reservations',
      url: null,
      icon: 'calendar',
      subMenu: [
        {
          title: 'sidebar.stoneHouse',
          url: '/dashboard/reservations/stone'
        },
        {
          title: 'sidebar.camping',
          url: '/dashboard/reservations/camping'
        }
      ]
    },
    {
      title: 'sidebar.clients',
      icon: 'briefcase',
      url: '/dashboard/clients'
    },
    {
      title: 'sidebar.reports',
      icon: 'clipboard',
      url: '/reports'
    },
    {
      title: 'sidebar.information',
      icon: 'book-open',
      url: '/information'
    },
    {
      title: 'logout',
      icon: 'log-out',
      url: '/logout'
    }
  ]
}

export { sidebar }
