// pages/sleeprecorded/sleeprecorded.js
const DB = wx.cloud.database().collection("list")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[] 
  },
  compute:function(a,b,c){
    var date3 = new Date(b).getTime() - new Date(a).getTime();
    //计算出小时数
    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    if(hours<10){
      hours='0'+hours;
    }
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    if(minutes<10){
      minutes = '0' + minutes
    }
    var h = "list["+c+"].hours"
    var m = "list["+c+"].minutes"
    this.setData({
      [h]:hours,
      [m]:minutes
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
  request:function(e){
    let that = this
    DB.get({
      success(res){
        console.log("查询数据成功",res)
        that.setData({
          list:res.data.reverse()
        })
        for(var i = 0;i<that.data.list.length;i++){
          var a = that.data.list[i].sleepd + ' ' + that.data.list[i].sleeph;
          var b = that.data.list[i].upd + ' ' + that.data.list[i].uph;
          that.compute(a,b,i);
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.request();
    
  },
  del:function(e){
    let that = this;
    wx.showModal({

      title: '删除',
 
      content: '确定删除这条记录吗',
 
      success: function (res) {
        let list = that.data.list;
        const id = e.currentTarget.dataset.id;
        if (res.confirm) {//这里是点击了确定以后
          
          console.log('用户点击确定'+id)
          console.log(list[id])
          DB.doc(list[id]._id).remove()
          that.onShow()
        } else {//这里是点击了取消以后
 
        }
 
      }
 
    })
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