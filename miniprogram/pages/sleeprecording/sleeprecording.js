// pages/sleeprecording/sleeprecording.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sleeph:'00:00',
    uph:'00:00',
    sleepd:'2000-01-01',
    upd:'2000-01-01'
  },
  error:function(e){
    wx.showToast({
      title: '输入不合法',
      icon: 'error',  
      duration: 2000//持续的时间
    })
  },
  sub:function(e){
    var sd = this.data.sleepd;
    var ud = this.data.upd;
    var st = this.data.sleeph;
    var ut = this.data.uph;
    var date_sd = new Date(sd.replace(/-/g,"/"));
    var date_ud = new Date(ud.replace(/-/g,"/"));
    var date_today = new Date();
    var differ = parseInt(date_ud.getDate()-date_sd.getDate());
    var today = parseInt(date_today.getDate()-date_ud.getDate());
    if(sd>ud || differ>1 || today<0 || today > 10){
      this.error();
    }
    else if(differ == 0){
      if(st>=ut){
        this.error();
      }
      else{
        wx.navigateTo({
          url: '../success/success'
        })
      }
    }
    else{
      wx.navigateTo({
        url: '../success/success'
      })
    }
  },
  reset:function(e){
    this.setData({
      sleeph:'00:00',
      uph:'00:00',
      sleepd:'2000-01-01',
      upd:'2000-01-01'
    })
  },
  setsleepdate:function(e){
    this.setData({
      sleepd:e.detail.value
    });
  },
  setupdate:function(e){
    this.setData({
      upd:e.detail.value
    });
  },
  setsleeptime:function(e){
    this.setData({
      sleeph:e.detail.value
    });
  },
  setuptime:function(e){
    this.setData({
      uph:e.detail.value
    });
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