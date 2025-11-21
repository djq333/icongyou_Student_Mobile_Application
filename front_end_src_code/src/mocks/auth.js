// Mock auth helpers
export function mockLogin (payload) {
  return {
    token: 'mock-token-1234567890',
    user: {
      id: 999,
      name: '测试用户',
      account: payload?.account || 'mock@local',
      avatar: ''
    }
  }
}

export function mockRegister (payload) {
  const name = payload?.name || payload?.user_name || payload?.account || '新用户'
  return { success: true, message: '注册成功', user: { id: 1000, name } }
}
