import { mockTeachers } from '@/mocks/teachers'
// import api from './index'

export function fetchTeachers () {
  // TODO: 调用后端接口 — 确认 `/api/teachers` 返回的数组或分页结构，以及字段名
  // 说明：数据库中 Teacher 表结构为 { id, user_id, teacher_type, type_id }
  // 前端通常需要展示教师姓名等聚合信息
  // 故后端返回聚合数据，例如 { id, user_id, name, department?, teacher_type, type_id }

  // 原始真实请求（保留为注释）：
  // return api.get('/teachers')

  return Promise.resolve(mockTeachers)
}

export function getTeacher (id) {
  if (id === undefined || id === null) return Promise.resolve(null)
  // 原始真实请求（保留为注释）：
  // return api.get(`/teachers/${id}`)

  const found = mockTeachers.find(t => String(t.id) === String(id) || t.id === id)
  return Promise.resolve(found || null)
}

export async function getTeacherNameCached (id) {
  if (id === undefined || id === null) return ''
  try {
    const t = await getTeacher(id)
    return t?.name || ''
  } catch (e) {
    return ''
  }
}
