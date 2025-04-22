import{getUserInfo} from '../../utils/user'
import{fetchOrderInfo}from "../../api/api"
import{ updateOrderStatus}from "../../api/api"

Page({
  data: {
    post_id: '', // 订单 ID
    orderInfo: {
      time: "rghreth",
      publisher: "dfad",
      amount: "dgrg",
      status: "Fdgfd",
      description: "uiykuy",
      details: "String",
      way: "String"
    }
  },

  onLoad: function (options) {
    // 获取传递的参数
    const { post_id } = options;
    // 将 post_id 设置到 data 中
    this.setData({
      post_id,
    });

    // 根据 post_id 查询订单信息
    fetchOrderInfo(post_id)
      .then(orderInfo => {
        // 请求成功，更新页面数据
        this.setData({
          orderInfo: orderInfo
        });
      })
      .catch(err => {
        // 请求失败，显示错误提示
        wx.showToast({
          title: err.message,
          icon: 'none'
        });
      });
  },

  handleAccept() {
    const orderId = this.data.post_id; // 获取订单ID
    const userId = getUserInfo().userId;

    // 弹出输入框让用户输入电话号码
    wx.showModal({
      title: '请输入电话号码',
      content: '',
      editable: true,
      placeholderText: '请输入您的电话号码',
      success: (res) => {
        if (res.confirm) {
          const phoneNumber = res.content; // 获取用户输入的电话号码

          // 提交订单状态更新
          updateOrderStatus(orderId, userId, "被接取", phoneNumber)
            .then((response) => {
              console.log('订单接取成功', response);
              wx.showToast({
                title: '接取成功',
                icon: 'success',
                duration: 1500 // 提示持续1.5秒
              });

              // 延迟1.5秒后跳转回首页
              setTimeout(() => {
                wx.switchTab({
                  url: '/pages/index/index' // 首页的路径
                });
              }, 1500);
            })
            .catch((error) => {
              console.error('订单接取失败', error);
              wx.showToast({
                title: '接取失败',
                icon: 'none'
              });
            });
        } else if (res.cancel) {
          // 用户点击了取消按钮
          console.log('用户取消了操作');
        }
      }
    });
  }
});