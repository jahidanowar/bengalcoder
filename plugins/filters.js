import Vue from 'vue'

Vue.filter('formatDate', (val) => {
  if (!val) return ''
  const date = new Date(val)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  return `${mo} ${da}, ${ye}`
})
