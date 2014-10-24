/**
 * Created by zj on 13-12-9.
 */
function User() {
    this.name = "zhangsan";
    this.age = 26;
    var email = "xxx@qq.com";
    this.getEmail = (function(){
        return email;
    });
}

var user = new User();
alert(user.getEmail());
alert(user.name);