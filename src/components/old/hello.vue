<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
     <ul class="navhead" id="v_header">
        <li v-for="item in navs" v-bind:key="item">
          <a v-bind:href="item.link+'.html'">{{item.text}}</a>
          <ul v-if="item.child">
            <li v-for="item2 in item.child" v-bind:key="item2">
              <a v-bind:href="item2.link+'.html'">{{item2.text}}</a>
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App2',
      navs: [{
        text: '首页',
        link: 'index'
      }, {
        text: '设计大匠',
        link: 'DJdesign',
        child: [{
          text: '主案设计师',
          link: 'DJdesign'
        }, {
          text: '总监设计师',
          link: ''
        }, {
          text: '事务所设计师',
          link: ''
        }, {
          text: '陈设设计师',
          link: ''
        }]
      }]
    }
  }
}

</script>

  <!--    
export default { 
      v_header : new Vue({       
        el:'#v_header',
        data:{
          navs:[
          {text:'首页',link:'index'},
          {text:'设计大匠',link:'DJdesign', 
            child:[
              {text:'主案设计师',link:'DJdesign'},
              {text:'总监设计师',link:''},
              {text:'事务所设计师',link:''},
              {text:'陈设设计师',link:''}
              ]
          },
          {text:'大匠作品',link:'DJwork'},
          {text:'热装楼盘',link:'hotbuilding', 
            child:[
              {text:'热装楼盘',link:'hotbuilding'},
              {text:'在施工地',link:'constructionsite'},
              {text:'工地实景',link:'constructionsite-photo'}
              ]},
          {text:'匠心工程',link:'center', 
            child:[
              {text:'匠心工程',link:'center'},
              {text:'战略联盟',link:'brand'}
              ]
          },
          {text:'艺墅生活',link:'ysrs'},
          {text:'软装陈设',link:'furnishings'},
          {text:'关于我们',link:'brand', 
            child:[
              {text:'品牌介绍',link:'brand'},
              {text:'发展历程',link:'development'},
              {text:'组织架构',link:'orginazition'},
              {text:'企业理念',link:'company'},
              {text:'服务项目',link:'service'},
              {text:'会员服务',link:'member'},
              {text:'匠心文化',link:'aboutculture'},
              {text:'当期活动',link:'abculactive'},
              {text:'公司新闻',link:'aboutnew'},
              {text:'行业资讯',link:'aboutindustry'},
              {text:'联系我们',link:'contact'}
              ]
          },
          {text:'招聘信息',link:'recruit'}
          ]
        }        
      })
}
-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
