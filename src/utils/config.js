/*
 * @Date: 2020-12-17 14:04:46
 * @Description:环境变量配置
 */

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://*****.com/'
    : 'https://*****.com/'

export default {
  BASE_URL,
}
