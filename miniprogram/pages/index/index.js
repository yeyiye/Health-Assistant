const DB = wx.cloud.database().collection("list")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  adddata:function(){
    DB.add({
      data:{
        sleeph:"",
        uph:"",
        sleepd:"",
        upd:""
      },
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      }
    })
  },
  getdata(){
    DB.get({
      success(res){
        console.log("查询数据成功",res)
      }
    })
  },
  deletedata(){
      DB.doc("79550af260afa0f01ad7797645eac626").remove()
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