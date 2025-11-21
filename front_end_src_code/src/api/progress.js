// import api from './index'
import { mockProgressMap } from '@/mocks/progress'

export function fetchUserCourseProgress (courseId) {
  // TODO: 调用后端接口 — 确认 `/api/courses/{id}/progress` 返回的 PersonalCourseProgress 字段及鉴权要求
  // return api.get(`/courses/${courseId}/progress`)

  // 返回 mock 数据以支持离线开发
  const p = mockProgressMap[courseId] || { courseId, completedTasks: 0, totalTasks: 0, percent: 0, lastActive: null }
  return Promise.resolve(p)
}
