// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  shouquan(){
    console.log('点击事件执行了'),
    wx.getUserProfile({
      desc:'必须授权才可以继续使用',
      success(res){
        console.log('授权成功',res)
      },
      fail(res){
        console.log('授权失败',res)
      }
    })
  },
  data: {
    loginBtnState:true,
    username:"",
    password:""
  },
  usernameInput:function(e){
    console.log(e);
    var val = e.detail.value;
    if(val != ''){
      this.setData({
        username:val
      });
      if(this.data.password != ""){
        this.setData({
          loginBtnState:false
        })
      }
    }
    else{
      this.setData({
        loginBtnState:true
      })
    }
  },
  passwordInput:function(e){
    var val = e.detail.value;
    if(val != ''){
      this.setData({
        password:val
      });
      if(this.data.username != ""){
        this.setData({
          loginBtnState:false
        })
      }
    }
    else{
      this.setData({
        loginBtnState:true
      })
    }
  },
  login:function(){
    var userInfs = wx.getStorageSync('userobjs') || [];
    var userInf = userInfs.find(item=>{
      item.username == this.data.username;
    });
    if(userInf){
      if(userInf.password == this.data.password){
        wx.showToast({
          title: '登录成功',
          duration:2000,
          success:function(){
            wx.navigateTo({
              url:'../home/home',
            })
          }
        })
      }
      else{
        wx.showToast({
          title: '密码错误',
          duration:2000
        })
      }
    }
    else{
      wx.showToast({
        title: '用户不存在',
        duration:2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登录/注册',
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