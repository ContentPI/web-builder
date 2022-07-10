const sidebar = (locale = 'en-us') => ({
  title: 'menu',
  menu: [
    {
      title: 'blog',
      url: null,
      icon: 'book',
      subMenu: [
        {
          title: 'blog.create',
          url: `/${locale}/dashboard/blog/create`
        },
        {
          title: 'blog.list',
          url: `/${locale}/dashboard/blog`
        }
      ]
    },
    {
      title: 'media',
      url: `/${locale}/dashboard/media`,
      icon: 'image'
    },
    {
      title: 'logout',
      url: '/logout',
      icon: 'log-out'
    }
  ]
})

export { sidebar }
