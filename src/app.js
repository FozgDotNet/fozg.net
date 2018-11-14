new Vue({
  el: '#menu',
  data: {
    name: 'fozg',
    isActive: false
  },
  created: function () {
    let self = this;
    document.addEventListener('keypress', function(e) {
      if (e.key === '`') {
        self.isActive = !self.isActive
      }
    })
    
  }
})