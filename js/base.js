$(function(){
  //$("#result").load("ajax/test.html #container");
  $('[data-href]').each(function(){
    var _this = $(this);
    _this.load(_this.attr('data-href'));
  });
  setTimeout(function(){initNav()},500)
  // ajaxgo('data/userInfo.json',{},function(d){
  //   console.log(d)
  // },'get','json',function(e,x,s){console.table(e);});
  $.ajax({
    url:'data/userInfo.json',
    dataType:'json',
    success:function(d){
      console.log(d)
    },
    error:function(e,x,s){
      // console.table(e);
      // console.log(e.responseText)
      var data = strToJson(e.responseText);
      //console.log(data);
      assVue('#suerInfo',data);
    }
  });
  $.ajax({
    url:'data/userCrticle.json',
    dataType:'json',
    success:function(d){
      console.log(d)
    },
    error:function(e,x,s){
      var data = strToJson(e.responseText);
      assVue('#suerCrticle',data.allCrticle[0],{
        onClickCrticle:function(a){
          var _data = data.allCrticleContent;
          for(var i = 0;i < _data.length;i++){
            if(_data[i].crticleUrl == a)$('#suerCrticleContent').html(_data[i].myCrticle);
          }
        }
      });
    }
  });

});
function ajaxgo(url,data,fn,type,json,fn1){
   $.ajax({
    url:url,
    data:data || {},
    type:type || 'get',
    dataType: json || 'json',
    success:fn,
    error:fn1
  });
}
function strToJson(str){ 
  var json = eval('(' + str + ')'); 
  return json; 
}
function assVue(s,d,m){
  if(!$(s).length)return false;
  var app = new Vue({
    el: s,
    data:d,
    methods:m
  })
}

function initNav(){
  var app = new Vue({
    el: '#header',
    data:{
      nav:[
        {nat:'首页',act:true},
        {nat:'技术问答',act:false},
        {nat:'知识库',act:false},
        {nat:'个人主页',act:false},
        {nat:'消息中心',act:false}
      ]
    },
    // methods:function(){
    //   $('#header li').click(function(e){
    //     e.prevenDefault();
    //     $(this).siblings().removeClass('active').end().addClass('active');
    //   })
    // }
  })
}
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
Array.prototype.mathFloor = function() {
 return this[Math.floor(Math.random()*this.length)];
};
/* tips 提示 */
function tips(t,e,s) {
    var s = s || 300,e = e || 1000,$t = $('<div class="tips" style="max-width:70%;text-align:center;padding:1rem;position:fixed;top:50%;left:50%;background:rgba(0,0,0,.8);color:#fff;border-radius:10px;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);z-index:99999999;display:none;">'+t+'</div>');
    if($('body').find('.tips').length){
        setTimeout(function () {
            tips(t,e,s);
        },e+s);
    }else{
        $t.appendTo('body').fadeIn(s,function () {
            setTimeout(function () {
                $t.fadeOut(s,function () {
                    $t.remove();
                });
            },e);
        });
    }
};