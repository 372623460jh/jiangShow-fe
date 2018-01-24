/**
 * Created by jianghe on 2018/1/24.
 */
function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk: function (data) {
        var me = this;
        Object.keys(data).forEach(function (key) {
            me.convert(key, data[key]);
        });
    },
    convert: function (key, val) {
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function (data, key, val) {

        var dep = new Dep();

        //如果子是object的话，进行监听
        var childObj = observe(val);

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                console.log('获取' + key);
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function (newVal) {
                console.log('设置' + key);
                if (newVal === val) {
                    // 值未发生改变
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};

/**
 * 进行监听的方法
 * @param value 监听的数据对象
 * @return {Observer}
 */
function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },

    depend: function () {
        Dep.target.addDep(this);
    },

    removeSub: function (sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    }
};

Dep.target = null;

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

observe(data);

// data.worker[1].company = 'test1';
data.name = 'zhangsan';