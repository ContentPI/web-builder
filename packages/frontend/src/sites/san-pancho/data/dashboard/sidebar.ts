const sidebar = (locale = 'en-us') => ({
  title: 'menu',
  menu: [
    {
      title: 'sidebar.reservations',
      url: null,
      icon: 'calendar',
      subMenu: [
        {
          title: 'sidebar.stoneHouse',
          url: `/${locale}/dashboard/reservations`
        },
        {
          title: 'sidebar.camping',
          url: `/${locale}/dashboard/reservations/camping`
        }
      ]
    },
    {
      title: 'sidebar.guests',
      icon: 'briefcase',
      url: `/${locale}/dashboard/guests`
    },
    {
      title: 'sidebar.reports',
      icon: 'clipboard',
      url: `/${locale}/dashboard/reports`
    },
    {
      title: 'sidebar.information',
      icon: 'book-open',
      url: `/${locale}/dashboard/information`
    },
    {
      title: 'logout',
      icon: 'log-out',
      url: `/${locale}/logout`
    }
  ]
})

export { sidebar }
