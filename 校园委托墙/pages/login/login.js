import { login } from '../../api/api';
import { setUserInfo } from '../../utils/user';

Page({
  data: {
    email: '',
    password: '',
  },

  onUseremailInput: function (e) {
    this.setData({
      email: e.detail.value,
    });
  },

  onPasswordInput: function (e) {
    this.setData({
      password: e.detail.value,
    });
  },

  onLogin: function () {
    const { email, password } = this.data;
    // 调用登录接口
    login(email, password).then((res) => {
      if (res.statusCode === 200 && res.data.success) {
        const userInfo = res.data.userInfo; 
        // 保存用户信息到本地存储
        setUserInfo(userInfo);

        wx.showToast({
          title: '登录成功',
          icon: 'success',
        });
        // 登录成功后跳转到首页
        wx.switchTab({
          url: '/pages/index/index',
        });
      } else {
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'none',
        });
      }
    }).catch((err) => {
      wx.showToast({
        title: '网络错误',
        icon: 'none',
      });
    });
  },

  goToRegister: function () {
    // 跳转到注册页面
    wx.navigateTo({
      url: '/pages/register/register',
    });
  },
});