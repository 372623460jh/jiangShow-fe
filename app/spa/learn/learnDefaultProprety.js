'use strict';

var data = {
    name: 'jianghe',
    worker: [
        {
            company: 'test1',
            add: 'add1'
        },
        {
            company: 'test3',
            add: 'add2'
        }
    ]
};
// var span = document.querySelector('.name');

/**
 * 循环遍历data中的每一个属性，给每一个属性添加一个观察者
 * @param data
 * @constructor
 */
function addObserver(data) {
    if (!data || typeof data !== 'object') {
        //非对象不需要添加观察者
        return;
    }
    Object.keys(data).forEach(function (key) {
        //遍历属性给每一个属性添加观察者
        Observer(data, key, data[key]);
    })
}
/**
 * 观察者
 * @param data
 * @param key
 * @constructor
 */
function Observer(data, key, val) {
    //给子属性添加观察者
    addObserver(val);
    // console.log('给' + key + '添加观察者');
    //利用defineProperty给属性增加set和get监听（数据劫持）
    Object.defineProperty(data, key, {
        get: function () {
            // console.log("读取了" + key + "属性：" + val);
            return val;
        },
        set: function (newValue) {
            if (val === newValue) return;
            console.log(key + "从" + val + "变为了" + newValue);
            val = newValue;
        },
        configurable: false,//是否允许删除该属性
        enumerable: true//是否允许被枚举
    });
}


//循环给data创建观察者
addObserver(data);

// data.name = 'change value';
// data.name;

// data.worker[0].company = 'company1';
// data.worker[0].company;

data.worker[1].company = 'test1';
// data.worker[1].company;
//
// data.worker = {company: 'test1', add: 'add1'};
// data.worker;
//
// data.worker[1].company = 'company2';
data.worker.company;


// //获取值
// console.log(obj.name);  //hello
//
// //设置值
// obj.name = 'change value';
// setTimeout(function () {
//     obj.name = 'zhangsan';
// }, 2000);

// console.log(obj.name); //change value