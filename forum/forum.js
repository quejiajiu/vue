(function($){
   var store = new Vuex.Store({
	  state: {
	    showhide: '全球工单系统',
	    isActive:false,
	  },
	  mutations: {
	    increment (state,the) {
	      state.showhide = the
	    }
	  }
	})

   var data = {commentList:
	   	[
	      {
	      	'text'	:'	友情提示：如过你的电脑是预装 Win10 家庭中文版的，千万不要通过下载 ISO 来升级重装1',
	        'the'   :'全球工单系统',
	        'user'  :'allinwonder',
	        'time'  :'1 分钟前',
	        'head'  :'19772_normal.png',
	        'reply' :'honeycomb'
	      },
	      {
	      	'text'	:'sanic 自家的 hello world 评测性能也不是很牛逼。',
	        'the'   :'云计算',
	        'user'  :'Python ',
	        'time'  :'2 分钟前',
	        'head'  :'55566_normal.png',
	        'reply' :'takanasi'
	      },
	      {
	      	'text'	:'Android 上禁用定位权限后，有些应用依然可以定位的可能原因',
	        'the'   :'honeycomb',
	        'user'  :'allinwonder ',
	        'time'  :'32 分钟前',
	        'head'  :'89326_normal.png',
	        'reply' :'honeycomb'
	      },
	      {
	      	'text'	:'我也来吐槽 PHP 最垃圾的地方',
	        'the'   :'gouchaoer',
	        'user'  :'allinwonder ',
	        'time'  :'41 分钟前',
	        'head'  :'189082_normal.png',
	        'reply' :'s2722357'
	      },
	      {
	      	'text'	:'[需 Root] 无需再折腾！ Google Now Enabler 解决没有 feed 页面/无法开启问题！全系统通用！无需 Xposed',
	        'the' 	:'rebelliouswhiz',
	        'user'  :'allinwonder ',
	        'time'  :'5 分钟前',
	        'head'  :'142954_normal.png',
	        'reply' :'honeycomb'
	      },
	      {
	      	'text'	:'今天在 Go Hack',
	        'the' 	:'程序员',
	        'user'  :'metrue ',
	        'time'  :'2 小时 7 分钟前',
	        'head'  :'134227_normal.png',
	        'reply' :'ZhaoHongXuan'
	      },
	      {
	      	'text'	:'双十一要来了，你们准备买点啥？',
	        'the' 	:'程序员',
	        'user'  :'niselover ',
	        'time'  :'3 小时 27 分钟前',
	        'head'  :'8042_normal.png',
	        'reply' :'SoulSleep'
	      },
	      {
	      	'text'	:'中国移动的 IP 地址，同时分配给不同省份、城市的用户使用，是怎么回事',
	        'the' 	:'程序员',
	        'user'  :'metrue ',
	        'time'  :'2 小时 7 分钟前',
	        'head'  :'134879_normal.png',
	        'reply' :'ZhaoHongXuan'
	      },
	      {
	      	'text'	:'像 Godaddy 这样的域名商能多少刀一个批发到域名？怎么 Google 了一下好像也要 8 刀还是 6 刀的样子',
	        'the' 	:'程序员',
	        'user'  :'feimo ',
	        'time'  :'2 小时 37 分钟前',
	        'head'  :'68410_normal.png',
	        'reply' :' evilangel'
	      },
	      {
	      	'text'	:'阿里云国际,注册好了美国 pp,绑定了国内双币 visa 卡,绑定付款方式一直还要验证',
	        'the' 	:'程序员',
	        'user'  :'metrue ',
	        'time'  :'8 小时 7 分钟前',
	        'head'  :'253127_normal.png',
	        'reply' :'woyaojizhu8'
	      },
	      {
	      	'text'	:'对于下载站，怎样为用户设置下载门槛而且可以让自己受益？',
	        'the' 	:'程序员',
	        'user'  :'Reign ',
	        'time'  :'2 小时 7 分钟前',
	        'head'  :'160960_normal.png',
	        'reply' :'shihira'
	      },
	      {
	      	'text'	:'Ubuntu 17.10 正式发布，默认安装 Python3.6',
	        'the' 	:'Python',
	        'user'  :'rogwan ',
	        'time'  :'2 小时 7 分钟前',
	        'head'  :'110656_normal.png',
	        'reply' :'dxcqcv'
	      },
	      {
	      	'text'	:'Ubuntu 17.10 正式发布，默认安装 Python3.6',
	        'the' 	:'Python',
	        'user'  :'rogwan ',
	        'time'  :'2 小时 7 分钟前',
	        'head'  :'12857_normal.png',
	        'reply' :'dxcqcv'
	      },
	      {
	      	'text'	:'[C 语言] 输入 345.78，乘以 100 后 ，输出 34577',
	        'the' 	:'C/C++/Obj-C',
	        'user'  :'leopoe ',
	        'time'  :'7 分钟前',
	        'head'  :'261217_normal.png',
	        'reply' :'zmj1316'
	      },
	      {
	      	'text'	:'	更新 Windows 10 1709 之后，原本可以使用 2K 分辨率的变成只能 1080P',
	        'the' 	:'全球工单系统',
	        'user'  :'rogwan ',
	        'time'  :'4 小时 7 分钟前',
	        'head'  :'141931_normal.png',
	        'reply' :'dxcqcv'
	      },
	      {
	      	'text'	:'pyspark 读写 elastic search 出错，求帮助',
	        'the' 	:'程序员',
	        'user'  :'SlipStupig   ',
	        'time'  :'8 小时 41 分钟前',
	        'head'  :'260790_normal.png',
	        'reply' :'SlipStupig'
	      },
	      {
	      	'text'	:'Javascript 组合算法的问题',
	        'the' 	:'javaScript',
	        'user'  :'rogwan ',
	        'time'  :'2 小时 7 分钟前',
	        'head'  :'191778_normal.png',
	        'reply' :'dxcqcv'
	      },

	   ],
	   sideList:[
	      {
	      	head:'119973_normal.png',
	      	text:'UDPspeeder，双边网络加速工具,可以加速全流量(包括 TCP/UDP/ICMP)，开源项目'
	      },
	      {
	      	head:'55566_normal.png',
	      	text:'既然大家都在转套餐，有没有人推荐一下实惠的套餐'
	      },
	      {
	      	head:'76233_normal.png',
	      	text:'应届渣硕 Offer 比较， Intel vs 腾讯'
	      },
	      {
	      	head:'87947_normal.png',
	      	text:'看你们都转套餐成功了。移动用户表示情绪稳定。。'
	      },
	      {
	      	head:'171332_normal.png',
	      	text:'额 没信用卡? 怎么买美版 iPhone ?'
	      },
	      {
	      	head:'253127_normal.png',
	      	text:'mate10 pro 拍照 97 分，虽然对拍照不感兴趣，但还是有点厉害啊'
	      },
	      {
	      	head:'219694_normal.png',
	      	text:'[需 Root] 无需再折腾！ Google Now Enabler 解决没有 feed 页面/无法开启问题！全系统通用！无需 Xposed'
	      },
	      {
	      	head:'159346_normal.png',
	      	text:'中国移动的 IP 地址，同时分配给不同省份、城市的用户使用，是怎么回事'
	      },
	      {
	      	head:'36090_normal.png',
	      	text:'阿里云国际,注册好了美国 pp,绑定了国内双币 visa 卡,绑定付款方式一直还要验证'
	      },
	      {
	      	head:'lang_zhcn_32.png',
	      	text:'	让我们再来说说杭州房子的问题。'
	      }
	   ],
	   switchs:[
	   	  {text:'技术',the:'全球工单系统',isActive:true},
	   	  {text:'创意',the:'程序员',isActive:false},
	   	  {text:'好玩',the:'javaScript',isActive:false},
	   	  {text:'最热',the:'Python',isActive:false},
	   	  {text:'全部',the:'allinwonder',isActive:false},
	   ],
	   hotnode:['问与答','分享发现','酷工作','程序员','macOS','分享创造','Python','iPhone','Android','Apple','宽带症候群','求职','MacBook Pro']
	};
   var tmpList  = {
	  props: ['text','the','user','time','head','reply'],
	  template: 
	  	`<div class="cell item">
	       <table cellpadding="0" cellspacing="0" border="0" width="100%"> 
	        <tbody>
	         <tr> 
	          <td width="48" valign="top" align="center"><img :src="head" class="avatar" /></td>
	          <td width="10"></td> 
	          <td width="auto" valign="middle"><span class="item_title"><a href="javascript:void(0)">{{ text }}</a></span> 
	           <div class="sep5"></div> <span class="small fade">
	            <div class="votes"></div><a class="node" href="go/gts">{{ the }}</a> &nbsp;•&nbsp; <strong><a href="javascript:void(0)">{{ user }}</a></strong> 
	            &nbsp;•&nbsp; {{ time }} &nbsp;•&nbsp; 最后回复来自 <strong><a href="javascript:void(0)">{{ reply }}</a></strong></span> </td> 
	          <td width="70" align="right" valign="middle"></td> 
	         </tr> 
	        </tbody>
	       </table> 
	      </div> `,
	  methods: {
	    tolink: function () {
	      this.$emit('tolink')
	    }
	  },
	  data: function () {
	    return (store.state.showhide = this.the);
	  }
	},
	sideList = {
		props: ['text','head'],
	    template: 
		  	`<table cellpadding="0" cellspacing="0" border="0" width="100%"> 
	        <tbody>
	         <tr> 
	          <td width="24" valign="middle" align="center"> <a href="javascript:void(0)"><img :src="head" class="avatar" style="max-width: 24px; max-height: 24px;" /></a> </td> 
	          <td width="10"></td> 
	          <td width="auto" valign="middle"> <span class="item_hot_topic_title"> <a href="javascript:void(0)">{{text}}</a> </span> </td> 
	         </tr> 
	        </tbody>
	       </table> `
	},
	switchs = {
		props: ['text','the','onswitch','isActive'],
		// template: '<a href="#" class="tab" :class="{tab_current:isActive}" @click="onswitch" >{{text}}</a>',
		template: '<a href="#" class="tab" :class="{tab_current:isActive}" @click="isActive = !isActive" >{{text}}</a>',
		data:function(){
			return {isActive:true}
		}
	},
	boxList = new Vue({
		el: '#boxList',
		data: data,
		components: {'my-conlist': tmpList, 'my-sidelist':sideList, 'my-switch':switchs},
		methods: {
		    tolink: function (x) {
		       store.commit('setSkill',boxList.myCrticle[x]);
		       Vue.set(skillBox,'title',   boxList.myCrticle[x].title);
		       Vue.set(skillBox,'content', boxList.myCrticle[x].content);
		       // store.getters.setSkill(boxList.myCrticle[x]);
		    },
		    onswitch:function(el){
		    	console.log($(this))
		    	store.commit('increment',el.textConten);
		    }
		}
	})
})(jQuery)