// src/api/auth/index.js
// NOTE: 目前将后端调用注释并使用 mock 返回，用于本地开发离线调试。
// TODO: 当需要联调后端时，恢复下面被注释的真实请求并移除 mock 实现。

import { mockLogin, mockRegister } from '@/mocks/auth'

export function login (payload) {
  // TODO: 调用后端接口 — 确认 `/api/auth/login` 返回 ActionResult.data 包含 token 与 user
  // 前端字段: { account, password }
  // 数据库 User 表字段: user_name, pwd
  // const mapped = { user_name: payload.account, pwd: payload.password }
  // return api.post('/auth/login', mapped)

  // mock 返回，使用共享 mocks（保持向后兼容）
  return Promise.resolve(mockLogin(payload))
}

export function register (payload) {
  // TODO: 调用后端接口 — 确认 `/api/auth/register` 的参数校验与错误码
  // 前端当前传递: { school, account, password }
  // const mapped = { user_name: payload.account, pwd: payload.password, nick_name: payload.nick_name || payload.account, school: payload.school }
  // return api.post('/auth/register', mapped)

  return Promise.resolve(mockRegister(payload)) // 保持向后兼容
}

export default { login, register }
