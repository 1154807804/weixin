// pages/xiangqing/xiangqing.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // obj:{},
    goods: [
      {
        avatar
        :
        "http://img11.360buyimg.com/n7/jfs/t1900/343/2546249675/321998/2e04d46e/56e220cdN3720417f.jpg",
        detail
        :
        ["http://img30.360buyimg.com/jgsq-productsoa/jfs/t31…77/987571873/68507/92b718ac/57c3f107N66df2708.jpg",
          "http://img10.360buyimg.com/cms/jfs/t3283/165/3179022685/70152/8691aad5/57ecf4d3N0d1ccb80.jpg",
          "http://img13.360buyimg.com/cms/jfs/t3028/328/2417978329/220902/f29f6c36/57d8b3fbNc03f8716.jpg"],
        images
        :
        ["http://img11.360buyimg.com/n0/s450x450_jfs/t1900/3…/2546249675/321998/2e04d46e/56e220cdN3720417f.jpg",
          "http://img11.360buyimg.com/n0/jfs/t2014/314/1854829424/184725/6e7e1b52/56e220d3N04556832.jpg",
          "http://img11.360buyimg.com/n0/jfs/t2092/71/2569593306/231505/669b124d/56e220ddNd2018f51.jpg",
          "http://img11.360buyimg.com/n0/jfs/t1924/13/2633325770/124210/1236076b/56e220ebN1036b938.jpg",
          "http://img11.360buyimg.com/n0/jfs/t2353/268/2591014046/103546/a684aedb/56e220f2N6f351945.jpg"],
        title
        :
        "荣耀 畅玩5X 落日金 移动联通4G手机 双卡双待",
        price:"1",
        id: "001",
        selected:true
      },
      {
        avatar
        :
        "https://img13.360buyimg.com/n7/jfs/t2269/61/2017609151/168794/24c2f033/569d9733Nb0e995cd.jpg",

        detail
        :
        "https://img30.360buyimg.com/popWaterMark/jfs/t2221…/2741154341/252574/934cc6eb/56f26898Ne9505acc.jpg",
        images
        :
        "https://img13.360buyimg.com/n7/jfs/t2269/61/2017609151/168794/24c2f033/569d9733Nb0e995cd.jpg",
        title
        :
        "【礼盒版】魅族(MEIZU) 魅蓝metal 4G手机 双卡双待 白色 移动/联通4G 16G 标配",
        price: "2",
        id: "002",
        selected: true
      },
      {
        avatar
        :
        "https://img14.360buyimg.com/n7/jfs/t2665/200/2667727355/194277/db341a61/5770fabbN70e56213.jpg",
        detail
        :
        "https://img20.360buyimg.com/vc/jfs/t3076/298/1565473028/162852/56017cc9/57cfdb19Naa1be8bf.jpg",
        images
        :
        "https://img14.360buyimg.com/n7/jfs/t2665/200/2667727355/194277/db341a61/5770fabbN70e56213.jpg",
        title
        :
        "乐视（Le）乐2（X620）3GB+32GB 原力金 移动联通电信4G手机 双卡双待",
        price: "3",
        id: "003",
        selected: true
      },
      {
        avatar
        :
        "https://img14.360buyimg.com/n7/jfs/t2665/200/2667727355/194277/db341a61/5770fabbN70e56213.jpg",

        detail
        :
        "https://img20.360buyimg.com/vc/jfs/t3076/298/1565473028/162852/56017cc9/57cfdb19Naa1be8bf.jpg",
        images
        :
        "https://img14.360buyimg.com/n7/jfs/t2665/200/2667727355/194277/db341a61/5770fabbN70e56213.jpg",
        title
        :
        "乐视（Le）乐2（X620）3GB+32GB 原力金 移动联通电信4G手机 双卡双待",
        price: "4",
        id: "004",
        selected: true
      }

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj={};
    console.log(options)
    if (options.id == "001") {
      this.setData({
        obj: this.data.goods[0]
      })
    } else if (options.id == "002"){
      this.setData({
        obj: this.data.goods[1]
      })
    } else if (options.id == "003"){
      this.setData({
        obj: this.data.goods[2]
      })
    }else{
      this.setData({
        obj: this.data.goods[3]
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  addcart: function (e) {
    console.log(e)
    var fa = false;
    var clkid = e.target.dataset.id;
    var goods = this.data.goods
    for (var i = 0; i < goods.length; i++) {
      if (goods[i].id == clkid) {
        goods[i].num = 1;
        // 避免覆盖
        var arr = wx.getStorageSync("cart") || [];
        if (arr.length > 0) {
          for (var j = 0; j < arr.length; j++) {
            if (arr[j].id == clkid) {
              arr[j].num += 1;
              fa = true;
            }
          }
        }
        if (!fa) {
          arr.unshift(goods[i]);
          fa = false;
        }
      }
    }
    try {
      wx.setStorageSync("cart", arr)
    } catch (e) {
      console.log(e)
    }
  },
  switch:function(){
    wx.switchTab({
      url: '../gouwuche/gouwuche',
    })
  }
})