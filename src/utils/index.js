

// 示例：获取 PointLight.vue 的源码
// const pointLightCode = await getComponentCode('./views/PointLight.vue');

export const getComponentCode = async (componentPath) => {
  try {
    // 1. 使用 glob 模式匹配所有子目录的 .vue 文件
    const componentCodes = import.meta.glob('/src/views/*.vue', {
      query: '?raw', // 关键参数：以字符串形式加载源码
      eager: false // 默认异步加载
    })
    // 2. 统一路径格式（确保使用绝对路径或统一相对路径）
    const normalizedPath = `/src/views/${componentPath}.vue`

    // 3. 检查路径是否存在
    if (!componentCodes[normalizedPath]) {
      throw new Error(`路径不存在: ${normalizedPath}`)
    }

    // 4. 执行异步加载
    const code = await componentCodes[normalizedPath]()
    return code.default
  } catch (error) {
    console.error('加载组件源码失败:', error)
    return '' // 返回空字符串而非对象
  }
}