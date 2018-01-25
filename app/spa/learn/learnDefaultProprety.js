'use strict';

// var data = {
//     name: 'jianghe',
//     worker: [
//         {
//             company: 'test1',
//             add: 'add1'
//         },
//         {
//             company: 'test3',
//             add: 'add2'
//         }
//     ]
// };
// // var span = document.querySelector('.name');
//
// /**
//  * 循环遍历data中的每一个属性，给每一个属性添加一个观察者
//  * @param data
//  * @constructor
//  */
// function addObserver(data) {
//     if (!data || typeof data !== 'object') {
//         //非对象不需要添加观察者
//         return;
//     }
//     Object.keys(data).forEach(function (key) {
//         //遍历属性给每一个属性添加观察者
//         Observer(data, key, data[key]);
//     })
// }
// /**
//  * 观察者
//  * @param data
//  * @param key
//  * @constructor
//  */
// function Observer(data, key, val) {
//     //给子属性添加观察者
//     addObserver(val);
//     // console.log('给' + key + '添加观察者');
//     //利用defineProperty给属性增加set和get监听（数据劫持）
//     Object.defineProperty(data, key, {
//         get: function () {
//             // console.log("读取了" + key + "属性：" + val);
//             return val;
//         },
//         set: function (newValue) {
//             if (val === newValue) return;
//             console.log(key + "从" + val + "变为了" + newValue);
//             val = newValue;
//         },
//         configurable: false,//是否允许删除该属性
//         enumerable: true//是否允许被枚举
//     });
// }
//
//
// //循环给data创建观察者
// addObserver(data);
//
// // data.name = 'change value';
// // data.name;
//
// // data.worker[0].company = 'company1';
// // data.worker[0].company;
//
// data.worker[1].company = 'test1';
// // data.worker[1].company;
// //
// // data.worker = {company: 'test1', add: 'add1'};
// // data.worker;
// //
// // data.worker[1].company = 'company2';
// data.worker.company;
//
//
// // //获取值
// // console.log(obj.name);  //hello
// //
// // //设置值
// // obj.name = 'change value';
// // setTimeout(function () {
// //     obj.name = 'zhangsan';
// // }, 2000);
//
// // console.log(obj.name); //change value
//
// function parseDom(html) {
//     var objE = document.createElement("div");
//     objE.innerHTML = html;
//     var domList = objE.childNodes;
// }
//
// //将node转化为fragment片段
// function nodeToFragment(domList) {
//     var fragment = document.createDocumentFragment();
//     for (var n = 0; n < domList.length; n++) {
//         var child = domList[n].firstChild;
//         while (child) {
//             // 将Dom元素移入fragment中
//             fragment.appendChild(child);
//             child = el.firstChild
//         }
//     }
//
//     // var child = el.firstChild;
//     // while (child) {
//     //     // 将Dom元素移入fragment中
//     //     fragment.appendChild(child);
//     //     child = el.firstChild
//     // }
//     // return fragment;
// }
//
// // var template = '' +
// //     '<div>{{name}}</div>';
//
//
// // var parentBox = document.querySelector('#parentBox');


/**
 * 映射器用来建立dom(节点)与watcher(观察者)之间的联系(根据dom对象中的占位符来创建观察者)
 * @constructor
 */
function Mapper(dom, context) {
    //需要映射器关联的dom对象
    this.dom = dom;
    //组件上下文对象
    this.context = context;
    this.init();
};
Mapper.prototype = {
    constructor: Mapper,
    init: function () {
        if (this.dom) {
            this.fragment = this.nodeToFragment(this.dom);
        } else {
            console.log('组件未传入dom');
        }
    },

    /**
     * 将节点转化为文档碎片
     * @param el
     * @return {DocumentFragment}
     */
    nodeToFragment: function (el) {
        var fragment = document.createDocumentFragment();
        var child = el.firstChild;
        while (child) {
            // 将Dom元素移入fragment中
            fragment.appendChild(child);
            child = el.firstChild
        }
        return fragment;
    },

    /**
     * 建立dom和观察的关系
     */
    createRelationship:function () {
    }
};

var template =
    '<div id="testdiv">' +
    '   <div>' +
    '       <div>' +
    '           <span>1</span>' +
    '       </div>' +
    '       <div>' +
    '           <span>1</span>' +
    '       </div>' +
    '   </div>' +
    '   <div>' +
    '       <div>' +
    '           <span>1</span>' +
    '       </div>' +
    '       <div>' +
    '           <span>1</span>' +
    '           <div>' +
    '               <span>1</span>' +
    '           </div>' +
    '       </div>' +
    '   </div>' +
    '</div>';

function parseDom(html) {
    var objE = document.createElement("div");
    objE.innerHTML = html;
    return objE;
}

var mapper = new Mapper(parseDom(template), this);



