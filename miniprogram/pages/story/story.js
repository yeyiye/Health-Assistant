// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      name:"一连串错事",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FY2duLVl3WHBKTkxnaWZCbFl2Q3NvSUJoQTZKMUkyTkV4OGNLbGdrdmJUYWd3.mp3",
      pic:"../../image/stream.png",
      picp:"../../image/stream-p.png",
      musicstate: false
    },{
      name:"不听话的骆驼",
      url:"https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FWEJSX3hIRUIzUkJnMElYZWpWLUo4TUJWU05hR1AxaTczcjI3cWhwbEFaNEtB.mp3",
      pic:"../../image/stream.png",
      picp:"../../image/stream-p.png",
      musicstate: false
    }],
    playing:-1
  },
  musicplay:function(e){
    const bgMusic = wx.getBackgroundAudioManager(); //音乐播放实例
    bgMusic.title = this.data.list[this.data.playing].name;
    bgMusic.src = this.data.list[this.data.playing].url;
  //bug ios 播放时必须加title 不然会报错导致音乐不播放
    bgMusic.onEnded(this.musicplay);
    bgMusic.play();
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