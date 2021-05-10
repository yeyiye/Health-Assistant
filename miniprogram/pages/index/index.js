Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0    // 秒
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setInterval()
  },
  setInterval: function () {
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours       
    var i = setInterval(function () {  // 设置定时器
        second--
        if(second==0 && minute==0 && hours==0){
          clearInterval(i)
        }
        if (second < 0) {
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
    }, 1000)
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