/*
 * @Date: 2020-12-17 14:23:36
 * @Description: 
 */

import request from '@/utils/request.js'
import { formatGetUri } from '@/utils/tool.js'

const api = {}
const PORT1 = 'baseinfo'
// POST请求方式
api.register = (params) =>
  request.globalRequest(
    `${PORT1}/mobile/signUp`,
    'POST//必须大写，为了兼容其他应用',
    params,
    1
  )
// GET请求方式
api.register = (params) =>
  request.globalRequest(
    `${PORT1}/mobile/signUp${formatGetUri(params)}`,
    'GET //必须大写，为了兼容其他应用',
    {},
    1
  )
export default api
