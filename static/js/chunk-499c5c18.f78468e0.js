(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-499c5c18"],{"0eda":function(e,t,a){"use strict";a("ccc2")},"90fe":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("eltable",{attrs:{tableData:e.tableData,tableColumns:e.tableLabel,page:e.page,rows:e.rows,total:e.total,loading:e.loading,isshow:e.isshow,tableOption:e.tableOption,ExtraButton:e.ExtraButton},on:{sizeChange:e.sizeChange,pageChange:e.pageChange,clickButton:e.clickButton,sortChange:e.sortChange}},[a("el-form",{ref:"form",attrs:{id:"form",model:e.form,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"年龄:"}},[a("el-input",{attrs:{clearable:""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("el-form-item",{attrs:{label:"性别:"}},[a("el-select",{attrs:{placeholder:"请选择性别",clearable:""},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-option",{attrs:{value:"男"}},[e._v("男")]),a("el-option",{attrs:{value:"女"}},[e._v("女")])],1)],1)],1)],1)],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"searchBox"},[e._t("default"),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),a("el-button",{attrs:{type:"primary"},on:{click:e.refresh}},[e._v("重置")])],1)],2),e._l(e.ExtraButton,(function(t,n){return[a("el-button",{key:n,staticStyle:{float:"left",margin:"0 10px 15px 2.5%"},attrs:{type:"undefined"!=typeof t.type?t.type:"primary"},on:{click:function(a){return e.buttonMethods2(t.click)}}},[e._v(e._s(t.name))])]})),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"95%","margin-left":"2.5%"},attrs:{"header-cell-style":{fontSize:"14px",background:"#fafafa",color:"black"},"element-loading-text":"加载中",data:e.tableData,border:"",stripe:""},on:{"sort-change":e.handleSortChange}},[e._l(e.tableColumns,(function(t,n){return a("el-table-column",{key:n,attrs:{prop:t.param,width:t.width?t.width:"",sortable:!!t.sortable,label:t.label},scopedSlots:e._u([{key:"default",fn:function(n){return[t.render?a("span",[e._v(" "+e._s(t.render(n.row))+" ")]):a("span",[e._v(e._s(n.row[t.param]))])]}}],null,!0)})})),e.isshow?a("el-table-column",{attrs:{type:"selection",align:"center",fixed:""}}):e._e(),e.tableOption.label?a("el-table-column",{attrs:{label:e.tableOption.label,align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.tableOption.options,(function(n,l){return a("el-button",{key:l,attrs:{type:n.type,icon:n.icon,size:"mini"},on:{click:function(a){return e.handleButton(n.methods,t.row,t.$index)}}},[e._v(" "+e._s(n.label)+" ")])}))}}],null,!1,580811418)}):e._e()],2),a("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.rows,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2)},r=[],s=(a("a9e3"),{props:{loading:{type:Boolean,default:!1},ExtraButton:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},tableColumns:{type:Array,default:function(){return[]}},isshow:{type:Boolean,default:!1},tableOption:{type:Object,default:function(){return{}}},page:{type:Number,default:function(){return 1}},rows:{type:Number,default:function(){return 20}},total:{type:Number,default:function(){return 0}}},data:function(){return{searchVal:""}},methods:{refresh:function(){this.form={name:"",age:"",sex:""}},search:function(){},handleSizeChange:function(e){this.$emit("sizeChange",e)},handleCurrentChange:function(e){this.$emit("pageChange",e)},handleButton:function(e,t,a){this.$emit("clickButton",{methods:e,row:t,index:a})},handleSortChange:function(e){this.$emit("sortChange",e)}}}),i=s,c=(a("0eda"),a("2877")),u=Object(c["a"])(i,o,r,!1,null,"48e023e9",null),d=u.exports,p={components:{Eltable:d},data:function(){return{loading:!1,isshow:!0,page:1,rows:20,total:100,form:{name:"",age:"",sex:""},tableLabel:[{label:"姓名",param:"name"},{label:"性别",param:"sex",render:function(e){return 0===e.sex?"女":1===e.sex?"男":void 0}},{label:"地点",param:"address"},{label:"时间",sortable:!0,param:"date"}],tableOption:{label:"操作",options:[{label:"编辑",type:"primary",icon:"el-icon-delete",methods:"del"},{label:"删除",type:"danger",icon:"el-icon-delete",methods:"del"}]},ExtraButton:[{name:"+新增",click:"addGroup"}],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",sex:0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",sex:1},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",sex:0},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",sex:1}]}},methods:{sizeChange:function(e){this.rows=e,console.log("每页 ".concat(e," 条"))},pageChange:function(e){this.page=e,console.log("当前页: ".concat(e))},clickButton:function(e){this[e.methods](e.row)},sortChange:function(e){console.log(e)},del:function(e){console.log(e)}}},f=p,m=Object(c["a"])(f,n,l,!1,null,"b847c334",null);t["default"]=m.exports},ccc2:function(e,t,a){}}]);