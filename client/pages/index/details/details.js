// pages/index/details/details.js
var util = require('/../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img0.imgtn.bdimg.com/it/u=1720491959,247420273&fm=15&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2503928512,938110335&fm=27&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=2539525911,1613953068&fm=15&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=1720491959,247420273&fm=15&gp=0.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    date: [
      {
        title: '星期一',
        data: '今天'
      },
      {
        title: '星期二',
        data: '明天'
      },
      {
        title: '星期三',
        data: '4月11号'
      }
    ],
    startProduceDate: '2018-01-01',
    endProduceDate: '2018-12-31',
    selectedProduceDate: '4月12日'
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var date=data.getDate()
    console.log(time);
    //在通过setData更改Page()里面的data。动态更新页面的数据
    this.setData({
      time:time,
      year:year,
      day:day,
      month:month
    });
  },
  dateChange: function (e) {
    this.setData({
      selectedProduceDate:e.detail.value
    })
  },
  // 跳转页面
  MapLocation() {
    wx.navigateTo({
      url: '/pages/personal/Map/Map',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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