export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6128e6e0eefcb02ee3e51007',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3tdv49gx',
                  apiId: '75485462-7c08-47a1-b937-0019e03f1bf8'
                },
                {
                  buildHookId: '6128e6e081174fd573f829ce',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sirab8or',
                  apiId: '3c5a2cd4-e7e0-4cf4-82ca-2908c043e679'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorgenbry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sirab8or.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
