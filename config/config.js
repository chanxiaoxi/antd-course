export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  routes: [
    {
      path: '/',
      component: './Home'
    },
    {
      path: '/hello-world',
      component: './HelloWorld'
    }
  ]
};