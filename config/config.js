export default {
  plugins: [
    ['umi-plugin-react', {

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