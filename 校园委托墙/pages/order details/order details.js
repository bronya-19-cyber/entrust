// pages/details/details.js
import { fetchOrderInfo } from "../../api/api"; // 导入 API 函数

Page({
  data: {
    post_id: '', // 订单 ID
    orderInfo:
      {
        time:"rghreth",
        publisher:"dfad",
        receiver:'fdg',
        amount:"dgrg",
        status:"Fdgfd",
        description:"uiykuy",
        details:"String",
        way:"String",
        receiverWay:"sdfaf"
      }
      
     
  },

  onLoad: function (options) {
    // 获取传递的参数
    const { post_id} = options;

    // 将 post_id 设置到 data 中
    this.setData({
      post_id,
    });

    // 根据 post_id 查询订单信息
    fetchOrderInfo(post_id)
      .then(data => {
        // 请求成功，更新页面数据
        this.setData({
          orderInfo: data
        });
        console.log('订单信息', data);
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