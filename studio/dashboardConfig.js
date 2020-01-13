export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1ceba3ba68f331dc731e4e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o6tyu2hy',
                  apiId: '0f392771-437d-4f65-9bb1-f2404125d09c'
                },
                {
                  buildHookId: '5e1ceba3ba68f32d6d731e51',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oi7oe5iw',
                  apiId: '80a2101a-174c-48cc-b516-caa195d6ebe0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrujoh/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oi7oe5iw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
