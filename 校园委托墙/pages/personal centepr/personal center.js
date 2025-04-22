import { clearUserInfo } from '../../utils/user';
import{getUserInfo} from '../../utils/user'

Page({
  data: {
    userInfo: {
    }, 
  },
  
  onLoad() {
    const userInfo = getUserInfo()
      this.setData({
        userInfo,
      });
  },

  // 跳转到登录页面
  goToLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },

  // 跳转到问卷页面
  goToQuestionnaire() {
    wx.navigateTo({
      url: '/pages/questionnaire/questionnaire',
    });
  },

  onLogout() {
    // 清除用户信息
    clearUserInfo();
    wx.showToast({
      title: '已退出登录',
      icon: 'success',
    });
  },

});
