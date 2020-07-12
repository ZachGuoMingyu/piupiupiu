// 封装jQuery的ajax
// 请求的路径，请求的方式，携带的数据，响应内容

// 定义一个基础路径 后台服务器的基础路径
var baseURL = 'http://47.106.244.1:8099'

// 封装ajax函数
function myAjax(url, method, param, successHandle, errorHandle) {
  $.ajax({
    // 基础路径加接口地址
    url:baseURL + url,
    method: method,
    data:param,
    success:successHandle,
    error:errorHandle
  })
}
