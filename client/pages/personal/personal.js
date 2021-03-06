// pages/personal/personal.js
let app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[{
        title: "我的订单",
        imgUrl: "/images/icon/dingdan.png"
      },
      {
        title: "抢购订单",
        imgUrl: "/images/icon/dingdan_1.png"
      },
      {
        title: "我的等级",
        imgUrl: "/images/icon/dengji.png"
      },
      {
        title: "我的评价",
        imgUrl: "/images/icon/pingjia.png"
      },
      {
        title: "我的收藏",
        imgUrl: "/images/icon/shoucang.png"
      }],
    userInfo: {}
  },
  //事件处理函数  
  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/personal/Map/Map'
    })
  },
  edit() {
    wx.navigateTo({
      url: '/pages/personal/modify-info/modify-info',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
    })
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
  
  }
})