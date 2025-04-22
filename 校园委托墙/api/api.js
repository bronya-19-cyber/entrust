export function fetchData() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: '', // 订单视图的 API 地址
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data); // 请求成功，返回数据
        } else {
          reject(new Error('数据请求失败')); // 请求失败，返回错误
        }
      },
      fail: (err) => {
        reject(new Error('网络请求失败，请重试')); // 网络错误，返回错误
      }
    });
  });
}

export function fetchOrderInfo(post_id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `/${post_id}`, // 替换为你的 API 地址
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data); // 请求成功，返回订单信息
        } else {
          reject(new Error('获取订单信息失败')); // 请求失败，返回错误
        }
      },
      fail: (err) => {
        reject(new Error('网络请求失败，请重试')); // 网络错误，返回错误
      }
    });
  });
}

export const updateOrderStatus = (orderId, userId, status,others) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `/${orderId}`, // 根据实际API路径调整
      method: 'PUT',
      data: {
        userId: userId,
        status: status, // 动态传递状态
        others:others
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

export const syncDataToServer = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: ``, // 替换为你的服务器接口地址
      method: 'POST',
      data: {
        time: data.time,
        amount: data.amount,
        intro: data.intro,
        detail: data.detail,
        way: data.way
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(new Error('服务器返回错误'));
        }
      },
      fail: (err) => {
        reject(new Error('网络请求失败'));
      }
    });
  });
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: ``, // 替换为你的登录接口路径
      method: 'POST',
      data: {
        email,
        password,
      },
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data); // 成功时返回数据
        } else {
          reject(res.data); // 状态码非 200 时返回错误
        }
      },
      fail(err) {
        reject(err); // 网络错误时返回错误
      },
    });
  });
};