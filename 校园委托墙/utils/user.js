
// 保存用户信息到本地存储
export const setUserInfo = (userInfo) => {
  wx.setStorageSync('userInfo', userInfo);
};

// 获取用户信息
export const getUserInfo = () => {
  return wx.getStorageSync('userInfo') || null;
};

// 清除用户信息（用于退出登录）
export const clearUserInfo = () => {
  wx.removeStorageSync('userInfo');
};