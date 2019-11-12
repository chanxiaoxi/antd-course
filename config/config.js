export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
      }
    ]
  ],
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "/",
          component: "./Index"
        },
        {
          path: "/hello-world",
          component: "./HelloWorld"
        },
        {
          path: "/cms",
          routes: [
            { path: "/cms/article", component: "CMS/Article.js" },
            { path: "/cms/category", component: "CMS/Category.js" },
            { path: "/cms/tag", component: "CMS/Tag.js" }
          ]
        },
        {
          path: "/puzzlecards",
          component: "./PuzzleCards.js"
        },
        {
          path: 'list',
          component: '../pages/list'
        }
      ]
    }
  ],
  proxy: {
    '/api': {
      target: 'http://laravel-vue.test',
      changeOrigin: true,
    }
  }
};
