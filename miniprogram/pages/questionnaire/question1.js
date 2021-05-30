// miniprogram/pages/questionnaire/question1.js
var app=getApp()
Page({
 data:{
  currentTab:0,
  items1: [
    {name: 3, value: '30min以下',},
    {name: 2, value: '30-60min' },
    {name: 1, value: '60min以上' },
  ],
  items2: [
    {name: 4, value: '十点之前',  },
    {name: 3, value: '十点到十一点' },
    {name: 2, value: '十一点到十二点' },
    {name: 1, value: '十二点以后' },
  ],
  items3: [
    {name: 4, value: '8小时以上', },
    {name: 3, value: '7-8小时' },
    {name: 2, value: '6-7小时' },
    {name: 1, value: '6小时以下' },
  ],
  items4: [
    {name: 4, value: '营养均衡',  },
    {name: 3, value: '随便应付' },
    {name: 2, value: '相当丰盛' },
    {name: 1, value: '没吃' },
  ],
  items5: [
    {name: 4, value: '荤素搭配',  },
    {name: 3, value: '今天开荤' },
    {name: 2, value: '随便应付' },
    {name: 1, value: '压根没吃' },
  ],
  items6: [
    {name: 4, value: '稍稍吃了一点',  },
    {name: 3, value: '正常吃饭' },
    {name: 1, value: '减肥，不吃' },
    {name: 2, value: '聚会，大吃一顿' },
  ],
  items7: [
    {name: 3, value: '没这习惯',  },
    {name: 2, value: '突然饿了，随便吃点' },
    {name: 1, value: '奢侈一顿' },
  ],
  items8: [
    {name: 4, value: '随便吃了一点，或者没吃',  },
    {name: 3, value: '不太多，一两包薯片的量' },
    {name: 2, value: '大约能有一顿饭的量吧' },
    {name: 1, value: '您猜怎么着，今天就没吃正餐' },
  ],
  items9: [
    {name: 4, value: '没这习惯',  },
    {name: 3, value: '一两根解解闷' },
    {name: 2, value: '有点烦，多抽了几根' },
    {name: 1, value: '一包？两包？记不清多少了' },
  ],
  items10: [
    {name: 4, value: '滴酒不沾',  },
    {name: 3, value: '小酌怡情' },
    {name: 2, value: '多饮伤身' },
    {name: 1, value: '喝断片了' },
  ],
  items11: [
    {name: 4, value: '2小时以下',  },
    {name: 3, value: '2-4小时' },
    {name: 2, value: '4-6小时' },
    {name: 1, value: '6小时以上' },
  ],
  items12: [
    {name: 4, value: '3小时以下',  },
    {name: 3, value: '3-6小时' },
    {name: 2, value: '6-9小时' },
    {name: 1, value: '9小时以上 ' },
  ],
  sum: 0,
  lastnumber: 0,
  lastTab: -1
 },
 onLoad:function(options){
  // 页面初始化 options为页面跳转所带来的参数
 },
 //滑动切换
 swiperTab:function( e ){
  var that=this;
  that.setData({
   currentTab:e.detail.current
  });
 },
 //点击切换
 clickTabUp: function( e ) { 
 console.log("ddd")
  var that = this; 
  console.log(this.data.currentTab)
  console.log(e.target.dataset.current)
  if(this.data.currentTab == undefined){
    that.setData( {
      currentTab: 1
    })
  }
  else{
    that.setData( {
      currentTab: parseInt(e.target.dataset.current) + parseInt(1)
    })
  }
 } ,
clickTab: function (e) {
  var that = this; 

  if( this.data.currentTab === e.target.dataset.current ) { 
    return false;
  } else { 
   that.setData( { 
    currentTab: e.target.dataset.current 
   }) 
  }
 },
 radioChange: function (e) {

  //console.log('radio发生change事件，携带value值为：', e.detail.value)
  //console.log(this.data.currentTab)
  //console.log(this.data.lastTab)
  //console.log(this.data.lastnumber)
  if(this.data.currentTab == 0){
    this.setData( {
      sum: e.detail.value,
      lastTab: this.data.currentTab
    })
  }
  else{
    if(this.data.lastTab!=this.data.currentTab){
      //console.log("触发")
      this.setData( {
        sum: parseInt(this.data.sum)+parseInt(e.detail.value),/*parseInt(this.data.lastnumber),*/
        lastnumber: e.detail.value,
        lastTab: this.data.currentTab
      })
    }
    else{
      this.setData( {
        sum: parseInt(this.data.sum)+parseInt(e.detail.value)-parseInt(this.data.lastnumber),
        lastnumber: e.detail.value
      })
    }
  }
  console.log("sum is"+this.data.sum);
},
})