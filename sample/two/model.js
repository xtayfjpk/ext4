(function(){
    Ext.onReady((function(){
        //使用Ext.define定义一个Model类
        Ext.define("Person", {
            extend:"Ext.data.Model",
            fields:[
                {name:"name",type:"auto"},
                {name:"age",type:"int"},
                {name:"email",type:"auto"}
            ]
        });

        Ext.regModel("user", {
            fields:[
                {name:"name",type:"auto"},
                {name:"age",type:"int"},
                {name:"email",type:"auto"}
            ]
        });


        var _p = new Person({
            name:"张三",
            age:15,
            email:"55632@qq.com"
        });

        var _p2 = Ext.create("Person", {
            name:"李四",
            age:15,
            email:"55632@qq.com"
        });

        var _p3 = Ext.ModelManager.create({
            name:"王五",
            age:15,
            email:"55632@qq.com"
        }, "Person");

        alert(_p3.get("name"));
    }));
})();