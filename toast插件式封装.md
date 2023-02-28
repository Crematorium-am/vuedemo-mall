关于Toast插件式封装的前要
1.为什么推荐使用插件式封装，而不是直接组件方式直接使用，
  这里主要涉及两点（个人觉得）：
  第一点就是如果是组件方式使用，当项目多个地方都需要使用时，不免会出现代码耦合，不符合开发规范
  第二点就是事件的传递不方便，比如说：当详情页需要toast弹窗，肯定是要在详情页的主要组件进行引用显示，但是当弹窗的出现是由子组件触发时，则需要从子组件监听触发事件，然后传递给父组件控制弹窗的出现。
2.可以使用混入吗？
  有待验证

正式将Toast进行插件式封装
1.创建Toast组件
2.将Toast组件进行插件化安装
  Ⅰ.在Toast组件文件夹中创建一个index.js
    导入组件
    import Toast from './Toast'

    const一个空对象(命名随意)
    const obj = {}

    给对象添加一个install方法(因为在vue中使用插件的时候，会优先寻找插件的install方法进行安装)
    obj.install = function(Vue){  //参数Vue是默认传进来的
      创建一个组件构造器
      const toastConstructor = Vue.extend(Toast)

      通过new的方式，创建一个组件构造器对象
      const toast = new toastConstructor()

      通过$mount()将new出来的组件构造器对象挂载到某个标签元素上
      toast.$mount(document.createElement('div'))

      将创建出来的div渲染到body中
      document.body.appendChild(total.$el)  //total.$el对应的就是div，因为vue组件创建之后，$el代表的就是组件的根标签

      给Vue对象原型添加一个$toast，这样方便在任何地方都可通过this.$toast访问到所创建出来的toast对象(注：这里是通过组件构造器所new出来的对象，而不是构造器本身) 
        Vue.prototype.$toast = toast 
    }  

  Ⅱ.在main.js中安装Toast插件
    将toast引入 (不用具体到js文件)
    import toast from '@/components/common/toast' 

    通过use()将插件toast进行安装
    Vue.use('toast')

通过上面的一系列操作，插件就已经被创建出来而且被启用了，接下来就可以对Toast组件添加想要执行的功能