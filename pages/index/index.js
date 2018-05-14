//index.js
//获取应用实例
const app = getApp()
// var list = require("../../data.js");
Page({
  data: {
    // arr: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    banner: [
      "http://lc-SgHcsYqo.cn-n1.lcfile.com/ac3fdeeb07b23724f786.png",
      "http://lc-SgHcsYqo.cn-n1.lcfile.com/874189bda3245092334f.png",
      "http://lc-SgHcsYqo.cn-n1.lcfile.com/6cb527940bd96db81e23.png",
      "http://lc-SgHcsYqo.cn-n1.lcfile.com/2e4a1be8e6ea180399fe.png",
      "http://lc-SgHcsYqo.cn-n1.lcfile.com/7a9febfec8cb10bc8c62.png",
      "http://lc-SgHcsYqo.cn-n1.lcfile.com/4ff3c329cc931b6dfc2d.png"
      ],
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
        price: "1",
        id: "001"
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
        id: "002"
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
        id: "003"
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
        id: "004"
      }

    ],
  },
  onLoad: function () {
    // this.setData({
    //   arr: list.goods
    // })
  },
  getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  }
})
