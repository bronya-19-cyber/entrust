Page({
  data: {
    username: '',
    email: '',
    captcha: '',
    password: '',
    confirmPassword: '',
    avatarUrl: '', // 头像地址
    isCounting: false, // 是否正在倒计时
    countdownText: '获取验证码', // 验证码按钮文字
    countdown: 60, // 倒计时时间
  },

  // 用户名输入
  onUsernameInput: function (e) {
    this.setData({
      username: e.detail.value,
    });
  },

  // 邮箱输入
  onEmailInput: function (e) {
    this.setData({
      email: e.detail.value,
    });
  },

  // 验证码输入
  onCaptchaInput: function (e) {
    this.setData({
      captcha: e.detail.value,
    });
  },

  // 密码输入
  onPasswordInput: function (e) {
    this.setData({
      password: e.detail.value,
    });
  },

  // 确认密码输入
  onConfirmPasswordInput: function (e) {
    this.setData({
      confirmPassword: e.detail.value,
    });
  },

  // 获取验证码
  getCaptcha: function () {
    if (this.data.isCounting) return;

    const email = this.data.email;
    if (!email) {
      wx.showToast({
        title: '请输入邮箱',
        icon: 'none',
      });
      return;
    }

    // 模拟发送验证码请求
    wx.showToast({
      title: '验证码已发送',
      icon: 'none',
    });

    // 开始倒计时
    this.startCountdown();
  },

  // 开始倒计时
  startCountdown: function () {
    this.setData({
      isCounting: true,
      countdownText: `${this.data.countdown}秒`,
    });

    const timer = setInterval(() => {
      let countdown = this.data.countdown - 1;
      if (countdown <= 0) {
        clearInterval(timer);
        this.setData({
          isCounting: false,
          countdownText: '获取验证码',
          countdown: 60,
        });
      } else {
        this.setData({
          countdownText: `${countdown}秒`,
          countdown,
        });
      }
    }, 1000);
  },

  // 上传头像
  uploadAvatar: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          avatarUrl: tempFilePath,
        });

        // 这里可以将图片上传到服务器
        wx.uploadFile({
          url: 'https://your-server-domain.com/uploadAvatar', // 替换为你的上传接口
          filePath: tempFilePath,
          name: 'avatar',
          success: (uploadRes) => {
            const avatarUrl = JSON.parse(uploadRes.data).url;
            this.setData({
              avatarUrl,
            });
          },
          fail: (err) => {
            wx.showToast({
              title: '上传失败',
              icon: 'none',
            });
          },
        });
      },
    });
  },

  // 注册
  onRegister: function () {
    const { username, email, captcha, password, confirmPassword, avatarUrl } = this.data;

    // 校验输入
    if (!username || !email || !captcha || !password || !confirmPassword) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
      });
      return;
    }

    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none',
      });
      return;
    }

    // 调用后端接口进行注册
    wx.request({
      url: 'https://your-server-domain.com/register', // 替换为你的注册接口
      method: 'POST',
      data: {
        nickName,
        email,
        captcha,
        password,
        avatarUrl,
      },
      success: (res) => {
        if (res.data.success) {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
          });
          // 注册成功后返回登录页面，并填充用户名
          wx.navigateBack({
            delta: 1,
            success: () => {
              const pages = getCurrentPages();
              const prevPage = pages[pages.length - 1];
              prevPage.setData({
                email: email,
              });
            },
          });
        } else {
          wx.showToast({
            title: '注册失败',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
        });
      },
    });
  },
});