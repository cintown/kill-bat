<template>
    <div class="container">
        <div id="gitalk-container"></div>
    </div>
</template>
<script>
  export default {
    name: 'comment',
    data() {
      return {};
    },
    mounted() {
      const body = document.querySelector('.container');

      const linkGitalk = document.createElement('link');
      linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
      linkGitalk.rel = 'stylesheet';
      body.appendChild(linkGitalk);
      const scriptGitalk = document.createElement('script');
      scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
      body.appendChild(scriptGitalk);

      scriptGitalk.onload = () => {
        const commentConfig = {
          // 开发 OAuth 及 Issues项目地址
          // clientID: 'eea717df8b83a0ca6b7e',
          // clientSecret: 'd3832efcc09413cd6a5e1cfda879b5d3ba952242',
          // repo: 'kill-bat',

          // 生产 OAuth 及 Issues项目地址
          clientID: '0913f7d01f652a4bbe70',
          clientSecret: 'e8d43a9c2d49f39add5bde5fb4e3cc2903245e46',
          repo: 'meidanlong.github.io',

          owner: 'Meidanlong',
          admin: ['Meidanlong'],
          id: location.pathname,
          distractionFreeMode: false,
          language: 'zh-CN',

        };

        const gitalk = new Gitalk(commentConfig);
        gitalk.render('gitalk-container');
      };
    },
  };
</script>
