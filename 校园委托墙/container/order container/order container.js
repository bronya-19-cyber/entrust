Component({
  properties: {
    post_id: String,
    time: String,
    publisher: String,
    amount: String,
    status: String,
    description: String,
    publishTime: String,
    url: String 
  },
  options: {
    styleIsolation: 'isolated'
  },

  methods: {
    goto() {
      // 可以携带参数，根据实际需求添加
      const params = {
        post_id: this.properties.post_id,
      };
      // 将参数拼接成 URL 查询字符串
      const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
      const fullUrl = `${this.properties.url}?${queryString}`; 

      wx.navigateTo({
        url: fullUrl,
        success: function (res) {
          console.log('跳转成功', res);
        },
        fail: function (err) {
          console.error('跳转失败', err);
        }
      });
    }
  }
});