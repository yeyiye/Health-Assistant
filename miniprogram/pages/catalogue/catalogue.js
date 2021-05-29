// pages/catalogue/catalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "barlist": [
      {
        "pagePath": "/pages/naturalsound/naturalsound",
        "text": "自然音效",
        "barflag":true,
        "iconPath": "/image/apple.png"
      },
      {
        "pagePath": "/pages/catalogue/catalogue",
        "text": "睡前故事",
        "iconPath": "/image/apple.png",
        "selectedColor": "#2679f4"
      },
      {
        "pagePath": "/pages/sleeprecord/sleeprecord",
        "text": "睡眠记录",
        "barflag":true,
        "iconPath": "/image/apple.png"
        
      }
    ],
    list:[{
      name:"动物故事哈哈镜",
      url:"../story/story"
    },{
      name:"不听话的骆驼",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FWEJSX3hIRUIzUkJnMElYZWpWLUo4TUJWU05hR1AxaTczcjI3cWhwbEFaNEtB.mp3"
    }]
  },
  goto:function(e){
    let that = this;
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: that.data.list[id].url
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