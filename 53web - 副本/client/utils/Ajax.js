class Ajax {
  constructor() {
    //创建对象
    this.xmlHttp = new XMLHttpRequest();
  }

  post(url, ob, callback) {
    //创建一个缓存的属性，用来装载对象里面的数据
    let buffer = "";
    //遍历对象
    for (let key in ob) {
      //每次把数据追加到前面已经添加的数据
      buffer = buffer + key + "=" + ob[key] + "&";
    }
    //因为最后一个符号可能是&,所以把它去掉
    buffer = buffer.substring(0, buffer.length - 1);
    console.log(buffer);
    //2,设置联网的参数
    this.xmlHttp.open("POST", url, true);
    //3,设置头文件
    console.log(buffer);
    this.xmlHttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    //4,提交的数据
    this.xmlHttp.send(buffer);
    //5,接收服务器传回的数据//固定不变
    this.xmlHttp.onreadystatechange = function() {
      //固定不变。成功获得数据的标志
      if (this.readyState == 4 && this.status == 200) {
        //把字符串数据转为对象
        let data = JSON.parse(this.responseText);
        //通过回调机制传回给调用者
        console.log(111)
        callback(data);
      }
    };
  }
  
  get(url, callback) {
    //2,设置相关参数
    this.xmlHttp.open("GET", url, true);
    //3,向服务器发出请求
    this.xmlHttp.send();
    //4,获得服务器返回的数据
    this.xmlHttp.onreadystatechange = function() {
      //如果成功返回数据，就输出打印数据
      if (this.readyState == 4 && this.status == 200) {
        //responseText就是后台服务器返回的数据
        callback(this.responseText);
      }
    };
  }

  
}
