const app=getApp()
var good=[];
var totalPrice = 0;
Page({
  data: {
    nocart: false,
    good: [],               // 购物车列表
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true,    // 全选状态，默认全选
    selected: true
  },
  onShow:function() {
    good=wx.getStorageSync("cart");
    this.total();
    console.log(good)
    if(good.length>0){
      this.setData({
        nocart:true
      })
    }else{
      this.setData({
        nocart: false
      })
    }
    for (var i = 0; i < good.length; i++) {
      if (good[i].selected == false) {
        this.setData({
          selectAllStatus: false
        })
      }
    }
    for (var j = 0, k = 0; j < good.length; j++) {
      if (good[j].selected == true) {
        k++;
        if (good.length == k) {
          this.setData({
            selectAllStatus: true
          })
        }
      }
    }
  },
  total: function () {
    good = wx.getStorageSync("cart")
    console.log(good)
    var totalPrice = 0;
    var pay = 0
    for (var i = 0; i < good.length; i++) {
      if (good[i].selected == true) {
        totalPrice += good[i].price * good[i].num; 
        pay += good[i].num;  //个数
      }
    }
    if(good.length>0){
      this.setData({
        nocart:true,
        good: good,
        pay: pay,
        totalPrice: totalPrice
      })
    }else{
      this.setData({
        nocart:false
      })
    } 
    wx.setStorageSync("cart", good)
  }, 
  // 单选
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let good = this.data.good;                    // 获取购物车列表
    const selected = good[index].selected;         // 获取当前商品的选中状态
    good[index].selected = !selected;              // 改变状态
    for(var i=0;i<good.length;i++){
      if(good[i].selected==false){
        this.setData({
          selectAllStatus: false
        })
      }
    }
    for(var j=0,k=0;j<good.length;j++){
      if(good[j].selected==true){
        k++;
        if(good.length==k){
          this.setData({
            selectAllStatus:true
          })
        }
      }
    }
    this.setData({
      good:good
    })
    wx.setStorageSync("cart", good)
    this.total()
  },
  selectAll(e){
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    console.log(selectAllStatus)
      let good = this.data.good;
      for(let i=0;i<good.length;i++){
        good[i].selected = selectAllStatus
      }
      this.setData({
        selectAllStatus :selectAllStatus,
        good:good
      })
      wx.setStorageSync("cart", good)
      this.total();
  },
  // 增加数量
  addCount: function (e) {
    var i = e.currentTarget.dataset.id;
    var totalPrice = 0;
    var pay = 0;
    good[i].num++;
    for (var i = 0; i < good.length; i++) {
      if (good[i].selected==true){
        totalPrice += good[i].price * good[i].num;
        pay += good[i].num;
      }
    }
    this.setData({
      good: good,
      totalPrice: totalPrice,
      pay: pay
    })
    wx.setStorageSync("cart",good)
  },
  // 减少数量
  minusCount:function(e) {
    var i = e.currentTarget.dataset.id;
    var totalPrice = 0;
    var pay = 0;
    if(good[i].num>1){
      good[i].num--;
      for (var i = 0; i < good.length; i++) {
        if (good[i].selected == true) {
          totalPrice += good[i].price * good[i].num;
          pay += good[i].num;
        }
      }
      this.setData({
        good: good,
        totalPrice: totalPrice,
        pay: pay
      })
    }
    wx.setStorageSync("cart", good)
  },
  delcart: function (e) {
    var i = e.currentTarget.dataset.id;
    var totalPrice = 0;
    var pay = 0;
    good.splice(i, 1);
    for (var i = 0; i < good.length; i++) {
      totalPrice += good[i].price * good[i].num;
      pay += good[i].num;
    }
    this.setData({
      good: good,
      totalPrice: totalPrice,
      pay: pay
    });
    wx.setStorageSync("cart", good)
    this.total()
  }
})