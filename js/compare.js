 var vm = new Vue({
    el: '#app',
    data: {
        stateArr: [
           {
            isActive:true,
            opts: []
           },
           {
            isActive:true,
            opts: []
           },
           {
            isActive:true,
            opts: []
          }
       ],
       productList:[],
       newTodo:{id:null,productImage:'',productName:''}
    },
    mounted: function () {
      // var _this = this;
      this.cartView();
    },
    methods: {
      cartView: function () {
        this.$http.get("aa.json").then(function(response){
          var res = eval (response.data);
          if(res && res.status=="1"){
            this.productList = res.result.list;
          }
          
          console.log(res.result.list[0].productImage);
        },function(err){
          console.log(err);
        });
      },
      deleteTodo:function(index){
         this.productList.splice(index,1);
      },
      addTodo:function (newTodo) {
                this.productList.push(newTodo);
                this.newTodo = {id:null,productImage:0,productName:0};
            },
      goL:function (index) {
          this.productList.moveArr(index,'l');
      },
      goR:function (index) {
          this.productList.moveArr(index);
      },
    }

  });
 Array.prototype.moveArr = function(ind,str){
  var i = str == 'l' ? -1 : 1;    
  if((ind <= 0 && i == -1) || (i == 1 && ind >= this.length-1))return false;
  this[ind] = this.splice(ind+i,1,this[ind])[0];
 }
