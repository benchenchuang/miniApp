// pages/components/page_navigation/index.js
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isBack:{
      type:Boolean,
      value:false
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: {}
  },
  ready(){
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
  }
})
