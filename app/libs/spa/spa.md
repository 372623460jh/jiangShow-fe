# SPA前后分离使用说明文档 #

版本：v2.0

日期：2018年1月23日

----
##前言：
### 本SPA框架参照了Android和React Native的部分设计理念，结合自身的业务需求。使用传统的html做为模板。控制器页面一一对应，业务层可以轻松自由的控制页面。

- ###使用该框架必须掌握的几个点：
	1. **路由配置**
	2. **模板及模板引擎**
	3. **控制器概念**
	4. **生命周期方法**
	5. **核心API**

##文件分类：

- 系统文件
	1. config.js *需使用者自主配置*
	2. spa.js *核心文件使用者无需关心*
    3. index.html *入口html，文件名可自定义*

- 样式文件
	1. 公共样式 *公共样式需要在入口html中自主引入*
	2. 页面样式 *控制器与页面样式的对应关系是多对一，只需在`config.js`对应的控制器下配置即可，系统会根据锚点值变化来自动引入样式文件（多个控制器可以引入同一个样式文件，也可以为空）*

- 控制器文件
	*控制器中包含了页面模板和页面的业务逻辑*

**注意**：
1. 公共样式需要在入口页面`index.html`中手动添加`link`标签;
2. 对应样式表中的选择器建议以`路由名_`来命名（如：books.css中的按钮选择器建议为`.books_btn`）该条不是强制要求只是为了防止样式表中选择器冲突给出的建议;

<h2 id="route">路由配置</h2>

- 在config.js中还有一些require的配置，如对require.js不了解的可在网上查阅资料，这里不做过多赘述。我们现在主要关注的是如下部分：路由配置。

		window.jjmatch.mob_app = {
		    home: '/index',//默认路由
		    config: {
		        container: '#mob_app_wrap',//主页面中的占位标签的选择器
		        style_url: './areas/spa/style/',//css文件根目录
		        controller_url: './areas/spa/controllers/'//controllers文件根目录
		    },
		    routes: {
		        '/index': {
		            title: '首 页', //标题
		            style: 'index', //样式文件名
		            controller: 'index', //控制器文件名
					in: 'basic_in', //进入该页时执行的动画（可不填不填默认为basic_in）
					out: 'basic_out' //退出该页时执行的动画（可不填不填默认为basic_out）
					before：functiong(){} //路由匹配到之前执行（可不填）
					after：functiong(){} //路由匹配到之后执行（可不填）
		        },
		        '/main': {
		            title: '主 页',
		            style: 'main',
		            controller: 'main'
		        }
		    }
		};


**注意**：
1. 本spa组件是以hash值来路由的。当页面上无路由值时该组件会自动为url添加`#/index`，也就是上面配置文件中的`mob_app.home`属性(如在浏览器输入`http://mobspa.test.jj.cn`会被修改为默认路由`http://mobspa.test.jj.cn/#/index`);
2. 当路由变化组件会加载对应路由的控制器和样式表装载到主页面中（当路由为/main，spa就会加载对应的style，controller文件到index.html中）；
3. in和out决定了页面之间切换的动画，目前该组件中只写了`basic_in`和`basic_out`的动画，如以后有特殊需求需要改变页面间的动画可增加；

<h2 id="template">模板及模板引擎</h2>

- 模板引擎使用的是Mustache，有兴趣的同学可以详细学下，这里只介绍在本SPA中使用到的

	    var template =
	        '<div class="index">' +
	        '<div class="index_box">main</div>' +
	        '<div class="index_btn">' +
	        '{{#test}}' +
	        '<div class="btn" id={{title}}>{{content}}</div>' +
	        '{{/test}}' +
	        '</div>' +
	        '</div>';
		var data = {
		    test: [
		        {
		            title: 'btn1',
		            content: '按钮1'
		        }, {
		            title: 'btn2',
		            content: '按钮2'
		        }, {
		            title: 'btn3',
		            content: '按钮3'
		        }, {
		            title: 'btn4',
		            content: '按钮4'
		        }
		    ]
	    };
		var root_dom = spa.parse_dom(template, data)[0];

- 简单解释几点：
	1. 	{{#A}}{{/A}}表示循环A
	2. 	{{B}}表示取B的值
	3. 	app.parse_dom方法会将template模板装载data数据后返回一个dom对象root_dom；


<h2 id="controller">控制器</h2>

    'use strict';
    var spa = global.spa,
    var template = '<div></div>';//html模板
    spa.controller['/main'] = {
        /**
         * 页面被创建时会执行此生命周期方法
         * @param now_page 当前页
         * @param last_page 从哪个页来
         */
        on_create: function (now_page, last_page) {},
        /**
         * 页面被创建时会执行此生命周期方法（可不写，不写时不执行）
         * @param now_page 当前页
         * @param last_page 从哪个页返回
         */
        on_resume: function (now_page, last_page) {},
        /**
         * 当虚拟或物理返回返回键被按下时（可不写，不写时默认执行spa.go_back()方法）
         */
        on_back: function () {},
        /**
         * 页面被销毁时会进此生命周期方法（可不写，不写时不执行）
         */
        on_destroy: function () {}
    }

**注意：**

1. 控制器和模板一一对应，一个控制器控制一个模板页面中的业务逻辑。
2. Page对象上面代码中`on_create`，`on_resume`生命周期方法中的`now_page`，`last_page`就是Page对象（以下是Page对象的构造方法）

		function Page(route_name, args, route, params) {
	        this.route_name = route_name || '';//路由名字
	        this.args = this.deepcopy(args);//内存传递的参数(深拷贝)
	        this.params = params || 'dom';//url传递的参数，url传递的参数会影响界面。所以当route_name相等而param不等时页面不能复用
	        this.dom;//dom对象 
	        this.route = route || {};//route对象
	        this.route.in = route.in || 'basic_in';
	        this.route.out = route.out || 'basic_out';    
	        this.controller = undefined;//控制器对象     
	        this.style_path = data.style_url + route.style;//css文件位置
	        this.controller_path = data.controller_url + route.controller;//控制器文件位置
	    };

	简单说明下Page对象中的主要属性
	- route_name：对应的路由名
	- args：页面间通过内存传递参数
	- params：页面间通过url传递参数
	- dom：该页面对应的dom根节点
	- controller：该页面对应的控制器对象
	- route：配置在配置文件中的路由对象
	- style_path：样式路径
	- controller_path：控制器路径

<h2 id="life">生命周期方法</h2>

- on_create:页面被创建时会执行此生命周期方法
- on_resume:页面被创建时会执行此生命周期方法（可不写，不写时不执行）
- on_destroy:页面被销毁时会进此生命周期方法（可不写，不写时不执行）

**注意：**

- on_back:该方法虽然不属于生命周期方法，但使用频率很高（当虚拟或物理返回键被点击时执行）

<h2 id="api">核心API</h2>

* [spa.go() 页面跳转（前进动画）](#a) 
* [spa.go_back() 页面跳转（返回动画）](#b) 
* [spa.parse_dom() 将模板解析为dom](#c) 
* [spa.set_storage() 保存共享的数据](#d) 
* [spa.get_storage() 读取共享的数据](#e) 
* [spa.del_storage() 删除共享的数据](#f) 
* [spa.extend() 继承，深拷贝，浅拷贝方法](#g) 
* [spa.urlparams2obj() 将url中的参数字串转化为对象 ](#h) 
* [spa.obj2urlparams() 将对象转化为url参数字串](#i) 
* [spa.get_platform() 获取平台信息](#j)
* [spa.open_webview() 打开新的webview](#k) 
* [spa.hide_native_back() 隐藏原生底部返回键](#l) 
* [spa.loading.template 设置loading的模板](#m) 
* [spa.loading.get_dom() 获取loading的dom对象](#n)
* [spa.loading.show() 显示loading](#o)
* [spa.loading.hide() 隐藏loading](#p)
* [spa.each() 遍历对象](#q)

---
- <h3 id="a">spa.go() 页面跳转（前进动画）</h3> 
	
	A页面跳转到B页面：在A控制器中执行`spa.go('/B');`

	A页面跳转到B页面并传递name=‘张三’的参数：在A控制器中执行`spa.go('/B',{name:'张三'});`

	A页面跳转到B页面并传递name=‘张三’的参数,通过url传递age=24：在A控制器中执行`spa.go('/B',{name:'张三'},'age=24');` **(不建议使用url传参)**

---

- <h3 id="b">spa.go_back() 页面跳转（返回动画）</h3> 

	B页面返回上一页：在B控制器中执行`spa.go_back();`

	B页面返回到A页面：在A控制器中执行`spa.go_back('/A');`

	B页面返回到A页面并传递name=‘张三’的参数：在A控制器中执行`spa.go_back('/A',{name:'张三'});`

	B页面跳转到A页面并传递name=‘张三’的参数,通过url传递age=24：在A控制器中执行`spa.go_back('/B',{name:'张三'},'age=24');`**(不建议使用url传参)**

---

- <h3 id="c">spa.parse_dom() 将模板解析为dom的方法 </h3> 

	在A页面中想把模板（未使用模板引擎）转换为dom对象：`var root_dom = spa.parse_dom(template)[0];`

	在A页面中想把模板（使用模板引擎）转换为dom对象：`var root_dom = spa.parse_dom(template,data)[0];`

---

- <h3 id="d">spa.set_storage() 保存共享的数据 </h3> 

    spa用于保存数据的方法（数据是使用extend方法深拷贝到spa.storage中）`spa.set_storage(key,value);`

---

- <h3 id="e">spa.get_storage() 读取共享的数据 </h3> 

    spa用于读取保存数据的方法 `spa.get_storage(key);`

---

- <h3 id="f">spa.del_storage() 删除共享的数据 </h3> 

    spa用于读取保存数据的方法 `spa.del_storage(key);`

---

- <h3 id="g">spa.extend() 继承，深拷贝，浅拷贝方法 </h3> 

	`spa.extend(true,{},obj1,obj2...)`将obj1,obj2深拷贝到{}中

    `spa.extend({},obj1,obj2...)`将obj1,obj2浅拷贝到{}中

    `spa.extend(obj1)`将obj1浅拷贝到this(spa)中成为spa的静态属性

    `spa.extend(true,obj1)`将obj1深拷贝到this(spa)中成为spa的静态属性

---

- <h3 id="h">spa.urlparams2obj() 将url中的参数字串转化为对象 </h3> 

	`spa.urlparams2obj(str)`将str转为对象

---

- <h3 id="i">spa.obj2urlparams() 将对象转化为url参数字串 </h3> 

	`spa.obj2urlparams(obj)`将obj转为url中的参数字串

---

- <h3 id="j">spa.get_platform() 获取平台信息 </h3> 

	`spa.get_platform()`获取平台信息有三种返回值（Web，iOS,Android）

---

- <h3 id="k">spa.open_webview() 打开新的webview </h3> 

	`spa.open_webview(url, title, hideback)`打开一个新的webview（url：地址；title：标题；hideback：是否隐藏返回键）

---

- <h3 id="l">spa.hide_native_back() 隐藏原生底部返回 </h3> 

	`spa.hide_native_back()`隐藏原生底部返回

---

- <h3 id="m">spa.loading.template 设置loading的模板 </h3> 

	`spa.loading.template = '<div></div>';`设置loading的模板

---

- <h3 id="n">spa.loading.get_dom() 获取loading的dom对象 </h3> 

	`spa.loading.get_dom()'`获取loading的dom对象

---

- <h3 id="o">spa.loading.show() 显示loading </h3>

	`spa.loading.show({tips:标题, duration:延时关闭 , unclose:true})'`显示loading标题tips，duration显示多久，unclose===true点击loading不允许关闭

---

- <h3 id="p">spa.loading.hide() 隐藏loading </h3>

	`spa.loading.show()'`隐藏loading

---

- <h3 id="q">spa.each() 遍历对象 </h3>

	`spa.each(obj，fun)'`遍历对象obj，执行回调fun

##Demo

- **spa.js测试地址：** http://csstest.my.jj.cn/js/jjmatch/gbk/common/spa.js
- **demo:** 88下：/data/wwwroot/my/mobspa/css.jj.cn/js/web_source/mob/spa
- **svn：** svn://web-svn.jjweb.cn:8288/svn/design/手机APP/spa_json数据分离版
- **申诉（测试）：** http://mobspa.test.jj.cn/spa.php#/appeal_index?hideback=true