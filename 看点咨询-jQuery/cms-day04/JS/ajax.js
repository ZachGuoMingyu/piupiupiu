// 封装jQuery的ajax
// 请求的路径，请求的方式，携带的参数，响应内容

// 定义一个基础路径，后台接口的基础路径
var baseURL = 'http://47.106.244.1:8099'

// 封装ajax函数
function myAjax(url, method, param, successHandle, errorHandle) {
  $.ajax({
    url: baseURL + url,
    method: method,
    data: param,
    success: successHandle,
    error: errorHandle
  })
}
