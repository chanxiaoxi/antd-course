export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true
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
        }
      ]
    }
  ]
};
