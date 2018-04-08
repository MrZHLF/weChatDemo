//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        imgUrls: [
          '../../images/sile/item1.jpg',
          '../../images/sile/item3.jpg',
          '../../images/sile/item4.jpg',
          '../../images/sile/item5.jpg',
          '../../images/sile/item6.jpg',
          '../../images/sile/item7.jpg',
          '../../images/sile/item8.jpg',
          '../../images/sile/item9.jpg',
          '../../images/sile/item10.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        itemTitle: [
          {
            title: "郑州",
          },
          {
            title: "洛阳",
          },
          {
            title: "西安",
          },
          {
            title: "上海",
          }
        ]
    },
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    },
    toast: function (e) {  //页面跳转
      wx.navigateTo({
        url: '../me/index',
      })
    },
    // 分享功能
    onShareAppMessage: function () {
      return {
        title: '微信小程序联盟',
        desc: '最具人气的小程序开发联盟!',
        path: '/page/index?id=123'
      }
    }
})
