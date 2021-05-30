// miniprogram/pages/questionnaire/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.result)
    if(parseInt(options.result)>38){
      this.setData({
        result:1
      })
    }
    else if (parseInt(options.result)<=38&&parseInt(options.result)>28){
      this.setData({
        result:2
      })
    }
    else if (parseInt(options.result)<=28&&parseInt(options.result)>18){
      this.setData({
        result:3
      })
    }
    else if (parseInt(options.result)<28){
      this.setData({
        result:4
      })
    }
    console.log(this.data.result)
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
})