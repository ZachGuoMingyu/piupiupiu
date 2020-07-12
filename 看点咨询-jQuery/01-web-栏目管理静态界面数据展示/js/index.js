$(function () {
  $('.container-left li').click(function () {
    var text = $(this).text();
    //设定样式变化之前，重置所有的样式
    $('.container-left li').css({
      backgroundColor: 'RGB(47, 65, 87)',
      color: 'white'
    })
    // 这里的this指的是当前点击的li
    $(this).css({
      backgroundColor: 'white',
      color: 'RGB(47, 65, 87)'
    });
    //设定标题提示 通过text方法 设置text内容
    $('.header-title').text(text);
    // 先写这里
    if (text == '首页') {
      $('.content-main').load('./pages/home.html');
    } else if (text == '栏目管理') {
      $('.content-main').load('./pages/category.html');
    } else if (text == '文章管理') {
      $('.content-main').load('./pages/article.html');
    } else if (text == '文章管理') {
      alert(1);
      $('.content-main').load('./pages/article.html');
    } else if (text == '用户管理') {
      $('.content-main').load('./pages/user.html');
    } else if (text == '评论管理') {
      $('.content-main').load('./pages/comment.html');
    } else {
      return;
    }
  });
  $('.container-left li:first').click();
})