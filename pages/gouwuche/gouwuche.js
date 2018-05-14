const app = getApp()
var good = [];
var totalPrice = 0;
Page({
  data: {
    nocart: false,
    good: [],               // 购物车列表
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true,    // 全选状态，默认全选
    selected: true
  },
  onShow: function () {
    good = wx.getStorageSync("cart");  //获取已添加商品信息
    this.total();   //调用封装函数，计算总价
    console.log(good)
    if (good.length > 0) {  //如果购物车列表有信息
      this.setData({
        nocart: true   //隐藏内容“没有商品”
      })
    } else {
      this.setData({    // 否则显示信息：购物车没有商品
        nocart: false
      })
    }
    this.select()
  },
  select:function(){
    for (var i = 0; i < good.length; i++) { //循环找到购物车所有商品信息
      if (good[i].selected == false) {  //如果有商品单选按钮未被选中
        this.setData({
          selectAllStatus: false  //设置全选按钮为未被选中状态
        })
      }
    }
    for (var j = 0, k = 0; j < good.length; j++) {  //循环找到购物车所有商品信息
      if (good[j].selected == true) { //如果有商品单选按钮被选中
        k++;  //被选中的商品种类加1
        if (good.length == k) {  //如果所有加入购物车商品的种类和被选中商品种类数目相等
          this.setData({
            selectAllStatus: true  //设置全选框为选中状态
          })
        }
      }
    }
  },
  total: function () {  // 计算总价的封装函数
    good = wx.getStorageSync("cart")  //获得存储区cart的所有加入购物车的 商品信息，放入good数组中
    console.log(good)
    var totalPrice = 0;  // 初始化总价为0
    var pay = 0   //初始化商品个数为0
    for (var i = 0; i < good.length; i++) { //循环找到数组中的所有商品信息
      if (good[i].selected == true) { //如果商品为被选中状态
        totalPrice += good[i].price * good[i].num; //总价=该商品的单价*该商品的数量，循环叠加
        pay += good[i].num;  // 商品个数
      }
    }
    if (good.length > 0) { //如果数组中有商品
      this.setData({
        nocart: true, //显示信息隐藏
        good: good, //更新数组内容
        pay: pay, //更新商品数量
        totalPrice: totalPrice // 更新总价
      })
    } else { //如果数组中没有商品
      this.setData({
        nocart: false  //显示信息：购物车没有商品
      })
    }
    wx.setStorageSync("cart", good) //更新存储区域cart的商品信息，更新数组good
  },
  // 单选按钮
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let good = this.data.good;                    // 获取购物车列表
    const selected = good[index].selected;         // 获取当前商品的选中状态
    good[index].selected = !selected;              // 改变选中状态
    // this.select()
    for (var i = 0; i < good.length; i++) {  //循环找到数组中的所有商品信息
      if (good[i].selected == false) {  //如果商品为未被选中状态
        this.setData({
          selectAllStatus: false  //设置全选按钮为未被选中状态
        })
      }
    }
    for (var j = 0, k = 0; j < good.length; j++) { //循环找到购物车所有商品信息
      if (good[j].selected == true) {  //如果有商品单选按钮被选中
        k++;  //被选中的商品种类加1
        if (good.length == k) { //如果所有加入购物车商品的种类和被选中商品种类数目相等
          this.setData({
            selectAllStatus: true //设置全选框为选中状态
          })
        }
      }
    }
    this.setData({
      good: good  //更新数组内容
    })
    wx.setStorageSync("cart", good)  //更新存储信息
    this.total()  //调用函数，计算总价和商品数量
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus; //改变全选状态
    console.log(selectAllStatus)
    let good = this.data.good; // 获取购物车列表
    for (let i = 0; i < good.length; i++) { //循环找到数组中的所有商品信息
      good[i].selected = selectAllStatus //将商品单选状态赋值给全选按钮
    }
    this.setData({
      selectAllStatus: selectAllStatus, //更新全选按钮选中状态
      good: good //更新数组
    }) 
    wx.setStorageSync("cart", good) //重置存储区商品信息
    this.total(); //调用函数，计算总价，总数
  },
  // 增加数量
  addCount: function (e) {
    var i = e.currentTarget.dataset.id; //将商品id赋值给i
    var totalPrice = 0; //初始化总价
    var pay = 0; //初始化总数
    good[i].num++; //点击按钮+，数量num增加一次
    good[i].selected =true //点击加号按钮，该商品默认单选框被选中
    for (var i = 0; i < good.length; i++) { //循环找到数组中的所有商品信息
      if (good[i].selected == true) { //如果单选按钮被选中
        totalPrice += good[i].price * good[i].num; //总价+=商品单价*商品数量（累计叠加各个商品）
        pay += good[i].num;  //商品数量
      }
    }
    for (var j = 0, k = 0; j < good.length; j++) { //循环找到数组中的所有商品信息
      if (good[j].selected == true) {//如果单选按钮被选中
        k++;  //商品种类数加一
        if (good.length == k) {  //如果所有购物车商品种类数=数组中的所有商品
          this.setData({
            selectAllStatus: true //全选按钮被选中
          })
        }
      }
    }
    // this.select()
    this.setData({
      good: good, //更新数组内容
      totalPrice: totalPrice, //更新商品总价
      pay: pay //更新商品数量
    })
    wx.setStorageSync("cart", good) //重置存储区信息
  },
  // 减少数量
  minusCount: function (e) {
    var i = e.currentTarget.dataset.id; //商品id
    var totalPrice = 0; //初始化
    var pay = 0; //初始化
    if (good[i].num > 1) { //如果商品数量>1
      good[i].num--; //商品数递减
      good[i].selected = true //点击-按钮，默认该商品单选框被选中
      for (var i = 0; i < good.length; i++) { //循环找到所有商品
        if (good[i].selected == true) { //如果商品单选框被选中
          totalPrice += good[i].price * good[i].num; //计算总价
          pay += good[i].num; //计算总数
        }
      }
      this.setData({
        good: good, //将数组更新信息传到页面中
        totalPrice: totalPrice, //将总价更新信息传到页面中
        pay: pay //将总数更新信息传到页面中
      })
      for (var j = 0, k = 0; j < good.length; j++) { //循环找到所有信息
        if (good[j].selected == true) { //如果商品单选按钮被选中
          k++; //该商品种类数加1
          if (good.length == k) { //如果商品所有种类=k
            this.setData({
              selectAllStatus: true //设置全选框为选中状态
            })
          }
        }
      }
    }
    wx.setStorageSync("cart", good) //更新存储信息
  },
  delcart: function (e) { //删除
    var i = e.currentTarget.dataset.id; //获取商品id名
    var totalPrice = 0; //初始化总价
    var pay = 0; //初始化总数
    good.splice(i, 1); //删除第i个元素
    for (var i = 0; i < good.length; i++) { //获取所有商品信息
      totalPrice += good[i].price * good[i].num; //计算总价
      pay += good[i].num; //计算总数
    }
    this.setData({
      good: good, //更新数组信息
      totalPrice: totalPrice, //更新价格
      pay: pay //更新总数量
    });
    wx.setStorageSync("cart", good) //更新存储区信息
    this.total() //调用计算总价函数
    for (var j = 0, k = 0; j < good.length; j++) { //获得所有商品信息
      if (good[j].selected == true) { //如果商品被选中
        k++; //商品种类加1
        if (good.length == k) { //购物车中所有商品种类=k
          this.setData({
            selectAllStatus: true //全选框设置为选中状态
          })
        }
      }
    }
  }
})