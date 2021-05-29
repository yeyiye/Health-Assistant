// components/mytabbar/mytabbar.js
Component({
  data: {
  },
  properties: {
    barlist: {
      type: [
        
      ]
    }
  },
  /**
   * 页面的初始数据
   */

  methods: {
    forwardBar: function(event){
      const url = event.currentTarget.dataset.url;
      const barflag = event.currentTarget.dataset.barflag;
      if(url){
        if(barflag){
          wx.redirectTo({
            'url': url
          })
        }else{
          wx.navigateTo({
            'url': url
          })
        }
       
      }else{
        wx.showToast({
          title: '未配置目标地址',
        })
      }
      
    }
  }
})