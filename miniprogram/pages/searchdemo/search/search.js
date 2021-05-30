Page({
  //清除历史记录
  cleanhistory: function(e) {
    this.setData({
      history: false, //隐藏历史记录
      historyArray: [], //清空历史记录数组
      newArray: [],
      searchtext: "" //清空搜索框
    })
  },
  //搜索
  search: function(e) {
    var searchtext = this.data.searchtext; //搜索框的值
    var sss = true;
    if (searchtext != "") {
      //将搜索框的值赋给历史数组
      this.data.historyArray.push(searchtext);
      //模糊查询 循环查询数组中的title字段
      for (var index in this.data.searcharray) {
        var num = this.data.searcharray[index].title.indexOf(searchtext);
        let temp = 'searcharray[' + index + '].status';
        if (num != -1) { //不匹配的不显示
          this.setData({
            [temp]: 1,
          })
          sss = false //隐藏未找到提示
        }
      }
      this.setData({
        history: false, //隐藏历史记录
        noneview: sss, //隐藏未找到提示
        searchlist: true, //显示搜索列表
        newArray: this.data.historyArray //给新历史记录数组赋值
      })
    } else {
      this.setData({
        noneview: true, //显示未找到提示
        searchlist: false, //隐藏搜索列表
        history: false, //隐藏历史记录
      })
    }
  },
  data: {
    searchtext: "", //搜索框的值
    history: false, //显示历史记录
    noneview: false, //显示未找到提示
    searchlist: false, //显示搜索列表
    historyArray: [], //历史记录数组,
    newArray: [], //添加历史记录数组
    searcharray: [{
      id: 1,
      title: "测试文章",
    }]
  },
  //搜索框的值
  searchinput: function(e) {
    //当删除input的值为空时
    if (e.detail.value == "") {
      this.setData({
        history: true, //显示历史记录
        searchlist: false //隐藏搜索列表
      });
      //所有搜索列表的状态改为0
      for (var index in this.data.searcharray) {
        let temp = 'searcharray[' + index + '].status';
        this.setData({
          [temp]: 0,
        })
      }
    }
    this.setData({
      searchtext: e.detail.value
    })
  },
  //点击历史记录赋值给搜索框
  textfz: function(e) {
    this.setData({
      searchtext: e.target.dataset.text
    })
  }
})