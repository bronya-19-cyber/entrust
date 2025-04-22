import {updateOrderStatus} from "../../api/api";
Page({
  data: {
    currentTab:{type:Number,value:0},
    posts: [
      {
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: 'Pending',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        post_id: 6,
        time: '2023-10-02',
        publisher: 'User9',
        amount: 200,
        status: 'Completed',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      }
    ],
    orders:[
      {
        post_id: 1,
        time: '2023-10-01',
        publisher: 'User1',
        amount: 100,
        status: 'Pending',
        description: 'This is a sample post',
        publishTime: '2023-10-01 12:00:00'
      },
      {
        post_id: 2,
        time: '2023-10-02',
        publisher: 'User2',
        amount: 200,
        status: 'Completed',
        description: 'Another sample post',
        publishTime: '2023-10-02 14:00:00'
      }
    ]
  },
  switchTab(e) {
    this.setData({
      currentTab: Number(e.currentTarget.dataset.tab)
    });
  },

  swiperChange(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  handleDel(event) {
    const orderId= event.data;
    updateOrderStatus(orderId, 'userId', '已删除') // 传递状态 'canceled'
      .then((response) => {
        console.log('删除成功', response);
        wx.showToast({
          title: '删除成功',
          icon: 'success'
        });
        // 跳转回首页或其他页面
      })
      .catch((error) => {
        console.error('删除失败', error);
        wx.showToast({
          title: '删除失败',
          icon: 'none'
        });
      });
  },

  handleComplete(event) {
    const orderId= event.data;
    updateOrderStatus(orderId," userId", '已确认') // 传递状态 'completed'
      .then((response) => {
        console.log('确认成功', response);
        wx.showToast({
          title: '确认成功',
          icon: 'success'
        });
        // 跳转回首页或其他页面
      })
      .catch((error) => {
        console.error('确认失败', error);
        wx.showToast({
          title: '确认失败',
          icon: 'none'
        });
      });
  },

  handleCancel(event) {
    const orderId= event.data;
    updateOrderStatus(orderId, 'userId', '待接取') // 传递状态 'canceled'
      .then((response) => {
        console.log('取消成功', response);
        wx.showToast({
          title: '取消成功',
          icon: 'success'
        });
        // 跳转回首页或其他页面
      })
      .catch((error) => {
        console.error('取消失败', error);
        wx.showToast({
          title: '取消失败',
          icon: 'none'
        });
      });
  },
  
  handleComplete(event) {
    const orderId= event.data;
    updateOrderStatus(orderId," userId", '已确认') // 传递状态 'completed'
      .then((response) => {
        console.log('确认成功', response);
        wx.showToast({
          title: '确认成功',
          icon: 'success'
        });
        // 跳转回首页或其他页面
      })
      .catch((error) => {
        console.error('确认失败', error);
        wx.showToast({
          title: '确认失败',
          icon: 'none'
        });
      });
  }
});

