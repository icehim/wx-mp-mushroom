// components/search-bar/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
      value:'请输入关键字'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapMe(e){
      const data = e.currentTarget.dataset
      this.triggerEvent('myevent',data)
    }
  }
})
