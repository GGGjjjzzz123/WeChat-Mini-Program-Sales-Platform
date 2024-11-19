Page({
  data: {
    searchQuery: ''  // 存储用户输入的搜索内容
  },

  // 监听输入框的输入事件
  onInputChange: function(e) {
    this.setData({
      searchQuery: e.detail.value  // 获取输入框的内容
    });
  },

  // 点击搜索按钮时触发的事件
  onSearchClick: function() {
    if (this.data.searchQuery.trim() === '') {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      });
    } else {
      // 在这里可以处理搜索逻辑
      console.log('搜索内容：', this.data.searchQuery);
      wx.navigateTo({
        url: '/pages/search/index?query=' + this.data.searchQuery  // 跳转到搜索结果页面
      });
    }
  }
});
