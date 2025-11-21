import { mockCourses } from '@/mocks/courses'
// import api from './index'

// TODO: 调用后端接口 — 确认 `/api/courses` 返回的 ActionResult.data 结构及错误码处理
// 当需要联调后端时，取消下面的 mock 实现并恢复为 `return api.get('/courses')`
export function fetchCourses (params = {}) {
  // 支持 params: { page, size, status, query, types }
  // 原始真实请求（保留为注释）：
  // return api.get('/courses', { params })

  // 在 mock 情况下，根据 params 做简单过滤以模拟后端行为
  const { status, query, types } = params || {}
  let list = mockCourses.slice()
  if (status && status !== 'all') list = list.filter(c => String(c.status) === String(status))
  if (Array.isArray(types) && types.length) list = list.filter(c => types.includes(Number(c.type)))
  if (query) {
    const q = String(query).toLowerCase()
    list = list.filter(c => {
      const name = String(c.name || '').toLowerCase()
      const code = String(c.code || '').toLowerCase()
      const tags = (c.tags || []).map(t => String(t).toLowerCase()).join(' ')
      return name.includes(q) || code.includes(q) || tags.includes(q)
    })
  }
  return Promise.resolve(list)
}

export function getCourse (id) {
  // 原始真实请求（保留为注释）：
  // return api.get(`/courses/${id}`)

  const found = mockCourses.find(c => String(c.id) === String(id) || c.id === id)
  return Promise.resolve(found || null)
}
 
