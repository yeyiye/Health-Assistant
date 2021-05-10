// pages/naturalsound/naturalsound.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[1,2,3,4],
    musicstate: false,
    hours: '0' + 0,   // 时
    minute: 30,   // 分
    second: '0' + 0    // 秒
  },
  set15:function(e){
    this.setData({
      hours:'0'+0,
      minute:15,
      second:'0'+0
    })
  },
  set30:function(e){
    this.setData({
      hours:'0'+0,
      minute:30,
      second:'0'+0
    })
  },
  set60:function(e){
    this.setData({
      hours:'0' + 1,
      minute:'0' + 0,
      second:'0' + 0
    })
  },
  Interval: function () {
    const that = this
    const bgMusic = wx.getBackgroundAudioManager()
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours       
    var i = setInterval(function () {  // 设置定时器
        second--; 
        if (bgMusic.paused == true){
          clearInterval(i);
        }
        else{
          if(second==0 && minute==0 && hours==0){
            clearInterval(i);
            bgMusic.stop();
          }
          else if (second < 0) {
              second = 59  //  大于等于60秒归零
              minute--
              if (minute < 0) {
                  minute = 59  //  大于等于60分归零
                  hours--
                  if (hours < 10) {
                      // 少于10补零
                      that.setData({
                          hours: '0' + hours
                      })
                  } else {
                      that.setData({
                          hours: hours
                      })
                  }
              }
              if (minute < 10) {
                  // 少于10补零
                  that.setData({
                      minute: '0' + minute
                  })
              } else {
                  that.setData({
                      minute: minute
                  })
              }
          }
          if (second < 10) {
              // 少于10补零
              that.setData({
                  second: '0' + second
              })
          } else {
              that.setData({
                  second: second
              })
          }
        }
    }, 1000)
  },
  musicplay:function(e){
    const bgMusic = wx.getBackgroundAudioManager(); //音乐播放实例
    //bug ios 播放时必须加title 不然会报错导致音乐不播放
    bgMusic.title = "test";
    bgMusic.src = "http://www.0dutv.com/plug/down/up2.php/273437983.mp3";
    bgMusic.onEnded(this.musicplay);
    bgMusic.play();
    this.Interval();
  },
  musicpause:function(e){
    const bgMusic = wx.getBackgroundAudioManager();
    bgMusic.pause();
  },
  music:function(e){
    let that = this;
    if(that.data.musicstate==false){
      that.setData({
        musicstate: true
      })
      that.musicplay();
    }
    else if(that.data.musicstate==true){
      that.musicpause();
      that.setData({
        musicstate: false
      })
    }
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