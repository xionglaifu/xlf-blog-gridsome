/*
 * @Description:
 * @Author: xionglaifu
 * @Date: 2021-10-13 10:58:05
 * @LastEditors: xionglaifu
 * @LastEditTime: 2021-10-15 15:31:35
 * @company: formssi
 */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'markdownPost',
        remark: {
          //Config options can be added here
        },
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        // typeName: 'Strapi',x
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '252132547@qq.com',
          password: 'Qq669898',
        },
      },
    },
  ],
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue',
      },
    ],
    // StrapiAbout: [
    //   {
    //     path: '/about',
    //     component: './src/templates/About.vue',
    //   },
    // ],
    // StrapiContact: [
    //   {
    //     path: '/contact',
    //     component: './src/templates/Contact.vue',
    //   },
    // ],
  },
  // transformers: {
  //   remark: {
  //     //Config options can be added here
  //   },
  // },
}
