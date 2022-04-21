const sidebar = {
  title: 'menu',
  menu: [
    {
      title: 'blog',
      url: null,
      icon: 'book',
      subMenu: [
        {
          title: 'blog.create',
          url: '/dashboard/blog/create'
        },
        {
          title: 'blog.list',
          url: '/dashboard/blog'
        }
      ]
    },
    {
      title: 'media',
      url: '/dashboard/media',
      icon: 'image'
    },
    {
      title: 'logout',
      url: '/logout',
      icon: 'log-out'
    }
  ]
}

export { sidebar }
