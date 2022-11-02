// components/course-list/course-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courses:{
      type:Array,
      value:[]
    }
  },
  // 2.9.3之后生命周期钩子必须写在lifetimes中
  lifetimes:{
    ready(){
      console.log(this.properties);
    
    },
    detached(){
      console.log('组件被销毁了');
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

  }
})
