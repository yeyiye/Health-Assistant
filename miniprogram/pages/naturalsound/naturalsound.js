// pages/naturalsound/naturalsound.js
const bgMusic = wx.getBackgroundAudioManager();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      name:"时钟",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYzdqVDEzRkVtMUNrNEU2SlFUcXlrMEJzZUNXWnJJZHRUM0xBUVJIa0NCeXBR.mp3",
      pic:"../../image/clock.png",
      picp:"../../image/clock-p.png",
      musicstate: false
    },{
      name:"八音敲琴",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FVkVjV0RjOGVXRkZycFJXV2xIWmtxUUJmSXVMWUlJd19HakNLLUF0amtCTVlB.mp3",
      pic:"../../image/Tubularwindbell.png",
      picp:"../../image/Tubularwindbell-p.png",
      musicstate: false
    },{
      name:"吃苹果",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FUkNhSm1LcVM0NU9pU3AxOTBhUEtmSUJ3REFEVFZMZEtXYXBvS05BY3ZiMi1n.mp3",
      pic:"../../image/apple.png",
      picp:"../../image/apple-p.png",
      musicstate: false
    },{
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
    },{
      name:"风铃",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FWXhWR0lEampQRkRzNmtRWG9GZUE1TUIxdzh0SjItNzc5OFozWUREV3habVB3.mp3",
      pic:"../../image/aeolian.png",
      picp:"../../image/aeolian-p.png",
      musicstate: false
    },{
      name:"夏夜虫鸣",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYnBCdzdrZFRGZEJtTXY2Z2wwYlFSd0IxVmVOam1pYTNSOEwyeU5UakRFWDFn.mp3",
      pic:"../../image/night.png",
      picp:"../../image/night-p.png",
      musicstate: false
    },{
      name:"海下之声",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FZHNDSTFvVzZvWkRtaHlIVkVjWmpGMEI5eWV5U1k2TDYtYjlmbkxUX050M09n.mp3",
      pic:"../../image/sea.png",
      picp:"../../image/sea-p.png",
      musicstate: false
    },{
      name:"折纸",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FZl9sakZDS3VySkRreUdnUWJkTVRUa0JfZFBrSENwa2xCc2NPYnk3Q1htZVln.mp3",
      pic:"../../image/paper.png",
      picp:"../../image/paper-p.png",
      musicstate: false
    },{
      name:"春雷阵阵",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FZGZkSWdHdDEyRlBxaktSUGNmcGVvNEJTWXF3d0ZMaWFocGJmbXN2SlcyY05n.mp3",
      pic:"../../image/thunder.png",
      picp:"../../image/thunder-p.png",
      musicstate: false
    },{
      name:"马蹄声声",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FVjlRcGE3cEwxTkx1WGF5em11aENLUUJwYUZBMjJNSGxWNUd5MjZkQ2VVRDFn.mp3",
      pic:"../../image/horse.png",
      picp:"../../image/horse-p.png",
      musicstate: false
    },{
      name:"太空回响",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FVmV1S0ZDVXBoQkxvVlYzcTJ4Um5TTUJCRHA0NjRTc3kyRC1SbXp1TDBXaTNn.mp3",
      pic:"../../image/space.png",
      picp:"../../image/space-p.png",
      musicstate: false
    },{
      name:"高跟鞋",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FY3kxdE5CX3hXWlBpSmo4UExJaGdqUUJTVWhCZkJxUEZBRnNWYlM2MzBMRmZ3.wav",
      pic:"../../image/heel.png",
      picp:"../../image/heel-p.png",
      musicstate: false
    },{
      name:"咖啡",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FZTZQYi1Qb3lmQkV0UVgxNWZ5bU9jd0Jka0JKWE1lTW5Ub0w1LTFKVjNiMXZ3.mp3",
      pic:"../../image/coffee.png",
      picp:"../../image/coffee-p.png",
      musicstate: false
    },{
      name:"男性呼吸",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FWF8tOEM4UEZjSk92bmNaRm4xeXFVa0JpY05rZll1YXBnQWJia2Flc21lOVBB.mp3",
      pic:"../../image/manbreath.png",
      picp:"../../image/manbreath-p.png",
      musicstate: false
    },{
      name:"女性呼吸",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FU2s3eWt5b2lMRkxwNC1PSjVMN0J4UUJEbGphc2Z4b3B2cV9kNHhkZGJiaFJR.mp3",
      pic:"../../image/fbreath.png",
      picp:"../../image/fbreath-p.png",
      musicstate: false
    }],
    playing: -1,
    already: true,
    time: 15,
    key: ' ',  
    hours: '0' + 0,   // 时
    minute: 15, // 分
    second: '0' + 0    // 秒
  },
  set15:function(e){
    this.setData({
      time:15,
      hours:'0'+0,
      minute:15,
      second:'0'+0
    })
  },
  set30:function(e){
    this.setData({
      time:30,
      hours:'0'+0,
      minute:30,
      second:'0'+0
    })
  },
  set60:function(e){
    this.setData({
      time:60,
      hours:'0' + 1,
      minute:'0' + 0,
      second:'0' + 0
    })
  },
  set100:function(e){
    this.setData({
      time:100,
      hours:10000,
      minute:'0' + 0,
      second:'0' + 0
    })
  },
  xunhuan:function(){ 
    let that = this
    var state ="list["+that.data.playing+"].musicstate"
    var keys = this.data.key 
    if(that.data.already == false){
      return; 
    }
    var nsecond = that.data.second
    var nminute = that.data.minute
    var nhours = that.data.hours
    nsecond-=1; 
        if(nsecond==0 && nminute==0 && nhours==0){
          clearInterval(keys);
          that.setData({
            [state]:false,
            playing:-1,
            minute:30,
            second:'0' + 0
          })
          bgMusic.stop();
        }
        else if (nsecond < 0) {
            nsecond = 59  //  大于等于60秒归零
            nminute--
            if (nminute < 0) {
                nminute = 59  //  大于等于60分归零
                nhours--
                if (nhours < 10) {
                    // 少于10补零
                    that.setData({
                        hours: '0' + nhours
                    })
                } else {
                    that.setData({
                        hours: nhours
                    })
                }
            }
            if (nminute < 10) {
                // 少于10补零
                that.setData({
                    minute: '0' + nminute
                })
            } else {
                that.setData({
                    minute: nminute
                })
            }
        }
        if (nsecond < 10) {
            // 少于10补零
            that.setData({
                second: '0' + nsecond
            })
        } else {
            that.setData({
                second: nsecond
            })
        }
      
  },
  Interval: function () {
    const that = this      
    that.setData({
      key:setInterval(that.xunhuan, 1000)
    })
  },
  ready:function(){
    this.setData({already:true})
  },
  musicplay:function(e){//音乐播放实例
    let that = this
    bgMusic.title = that.data.list[that.data.playing].name;
    bgMusic.src = that.data.list[that.data.playing].url;
  //bug ios 播放时必须加title 不然会报错导致音乐不播放
    bgMusic.onEnded(that.musicplay);
    bgMusic.play();
    bgMusic.onPlay(that.Interval);
    bgMusic.onCanplay(that.ready);
    bgMusic.onPause(that.musicpause);
  },
  musicpause:function(e){
    let that = this;
    var state = "list["+that.data.playing+"].musicstate";
    bgMusic.pause();
    that.setData({
      [state]: false
    })
    clearInterval(that.data.key)
  },
  music:function(e){
    let that = this;
    const id = e.currentTarget.dataset.id;
    var state = "list["+id+"].musicstate";
    var play = "list["+that.data.playing+"].musicstate"
    if(that.data.list[id].musicstate==false){
      if(that.data.playing != id){
        this.setData({
          already:false
        })
      }
      if(that.data.playing != -1 &&that.data.playing != id){
        bgMusic.stop();
        clearInterval(that.data.key)
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
      bgMusic.pause()
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
    let that = this;
    if(bgMusic.paused == false){
      var dataUrl = bgMusic.src;
      var len = that.data.list.length;
          for(var i = 0;i < len;i++){
            if(dataUrl == (that.data.list[i].url)){
              var state = "list["+i+"].musicstate";
              that.setData({
                playing:i,
                [state]:true
              })
              that.Interval();
            }
          }
    }
    /*wx.getBackgroundAudioPlayerState({
      success (res) {
        const status = res.status;
        const dataUrl = res.dataUrl;
        if(status != 2){
          var len = that.data.list.length;
          for(var i = 0;i < len;i++){
            if(dataUrl == (that.data.list[i].url+"#devtools_no_referrer")){
              var state = "list["+i+"].musicstate";
              that.setData({
                playing:i,
                [state]:true
              })
              that.Interval();
            }
          }
        }
      }
    })*/
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    if(this.data.playing!=-1 && bgMusic.paused == false){
      this.musicplay();
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if(this.data.playing!=-1 && bgMusic.paused == false){
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