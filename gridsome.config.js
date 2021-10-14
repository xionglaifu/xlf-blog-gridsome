/*
 * @Description:
 * @Author: xionglaifu
 * @Date: 2021-10-13 10:58:05
 * @LastEditors: xionglaifu
 * @LastEditTime: 2021-10-14 09:54:43
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
        // apiURL: process.env.GRIDSOME_API_URL,
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
  ],
  transformers: {
    remark: {
      //Config options can be added here
    },
  },
}
