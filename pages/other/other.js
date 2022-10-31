// pages/other/other.js
Page({
  parentTap(e) {
    console.log('parentTap',e.target.dataset);
  },
  childTap(e) {
    console.log('childTap');
  }
})