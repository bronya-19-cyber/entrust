import { fetchData } from "../../api/api"; // 导入 API 函数
Page({
  data: {
    items: [
      {
        UseId: '2222',
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: '进行中',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        UserId: '111',
        post_id: 2,
        time: '2023-10-02',
        publisher: 'User2',
        amount: 200,
        status: '待接取',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      },
      {
        UseId: '2222',
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: '进行中',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        UserId: '111',
        post_id: 2,
        time: '2023-10-02',
        publisher: 'User2',
        amount: 200,
        status: '待接取',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      },
      {
        UseId: '2222',
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: '进行中',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        UserId: '111',
        post_id: 2,
        time: '2023-10-02',
        publisher: 'User2',
        amount: 200,
        status: '待接取',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      },
      {
        UseId: '2222',
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: '进行中',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        UserId: '111',
        post_id: 2,
        time: '2023-10-02',
        publisher: 'User2',
        amount: 200,
        status: '待接取',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      },
      {
        UseId: '2222',
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: '进行中',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        UserId: '111',
        post_id: 2,
        time: '2023-10-02',
        publisher: 'User2',
        amount: 200,
        status: '待接取',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      }
    ]
  },

  // 页面加载时调用
  onLoad: function () {
    this.loadData(); // 调用 loadData 方法
  },
  onButtonClick: function() {
    wx.navigateTo({
      url: '/pages/post a topic/post a topic'
    });
  },
  // 定义 loadData 方法
  loadData: function () {
    const that = this;
    fetchData()
      .then(data => {
        // 请求成功，更新页面数据
        that.setData({
          items: data
        });
      })
      .catch(err => {
        // 请求失败，显示错误提示
        wx.showToast({
          title: err.message,
          icon: 'none'
        });
      });
  }
});