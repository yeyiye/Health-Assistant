// pages/naturalsound/naturalsound.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      name:"小溪",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FZDUtQllRWlBYTkx1bDJrWHA0MFY2Y0IxVkVEalBaQ1N6a3dIV1laZDgxV0x3.mp3",
      pic:"../../image/stream.png",
      picp:"../../image/stream-p.png",
      musicstate: false
    },{
      name:"壁炉",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYXNIVnBPTS12Wk9ubU5tOGV3NVgwb0JwdEE5MFZSaGc4RU5HSFVQbnZaRGN3.mp3",
      pic:"../../image/fire.png",
      picp:"../../image/fire-p.png",
      musicstate: false
    },{
      name:"雨声",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FVmRCTzdfb01pdExtT1p2RTc5M0ZIQUJmV0xrSEJPRTBPY3NBaFh5eUdPYW5B.MP3",
      pic:"../../image/rain.png",
      picp:"../../image/rain-p.png",
      musicstate: false
    }],
    playing: -1,
    hours: '0' + 0,   // 时
    minute: 15,   // 分
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
    var state ="list["+that.data.playing+"].musicstate"        
    var i = setInterval(function () {  // 设置定时器
        second--; 
        if (bgMusic.paused == true){
          clearInterval(i);
        }
        else{
          if(second==0 && minute==0 && hours==0){
            clearInterval(i);
            that.setData({
              [state]:false,
              playing:-1,
              minute:30,
              second:'0' + 0
            })
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
    bgMusic.title = this.data.list[this.data.playing].name;
    bgMusic.src = this.data.list[this.data.playing].url;
  //bug ios 播放时必须加title 不然会报错导致音乐不播放
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
    const id = e.currentTarget.dataset.id;
    var state = "list["+id+"].musicstate";
    var play = "list["+that.data.playing+"].musicstate"
    if(that.data.list[id].musicstate==false){
      if(that.data.playing != -1 &&that.data.playing != id){
        const bgMusic = wx.getBackgroundAudioManager();
        bgMusic.stop();
        that.setData({
          [play]:false,
          playing:-1
        })
      }
      that.setData({
        [state]: true,
        playing:id
      })
      that.musicplay(e);
    }
    else if(that.data.list[id].musicstate==true){
      that.musicpause(e);
      that.setData({
        [state]: false
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
    if(this.data.playing!=-1){
      this.musicplay();
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if(this.data.playing!=-1){
      this.musicplay();
    }
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