import { syncDataToServer } from '../../api/api'; 
import{ getUserInfo } from '../../utils/user'

Page({
  data: {
    UserId: "",
    time: '请选择日期',
    amount: '',
    indescription: '',
    detail: '',
    way: '',
    pulishTime: '',
  },

  onLoad() {
      this.setData({
        userId:getUserInfo().userId,
        nickName:getUserInfo().nickName,
      });
  },

  // 处理日期和时间选择
  handleDateChange(e) {
    this.setData({
      time: e.detail.value
    });
  },

  handleAmountChange(e) {
    const amount = e.detail.value; // 从 e.detail.value 获取值
    this.setData({
      amount: amount
    });
  },

  // 简介输入事件
  handleDescriptionChange(e) {
    const description = e.detail.value; // 从 e.detail.value 获取值
    this.setData({
      description: description
    });
  },

  // 详情输入事件
  handleDetailChange(e) {
    const detail = e.detail.value; // 从 e.detail.value 获取值
    this.setData({
      detail: detail
    });
  },

  // 联系输入事件
  handleWayChange(e) {
    const way = e.detail.value; // 从 e.detail.value 获取值
    this.setData({
      way: way
    });
  },

  // 确认发布事件
  async handleConfirm(e) {
    const { userId,time, amount, description, detail, way } = this.data;

    // 简单的表单验证
    if (!userId || time =='请选择日期' || !amount || !description || !detail || !way) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    try {
      const result = await syncDataToServer({ userId,time, amount, description, detail, way });

      wx.showToast({
        title: '发布成功',
        icon: 'success'
      });

      console.log('数据同步成功', result);

      // 清空表单数据
      this.setData({
        time: '请选择日期',
        amount: '',
        description: '',
        detail: '',
        way: ''
      });

    } catch (error) {
      wx.showToast({
        title: '发布失败，请重试',
        icon: 'none'
      });

      console.error('发布失败', error);
    }
  },
});