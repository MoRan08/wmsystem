webpackJsonp([27],{145:function(a,t,e){function i(a){e(792)}var o=e(29)(e(669),e(889),i,null,null);a.exports=o.exports},669:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loading:!0,tableData:[]}},mounted:function(){console.log(this.$route.params),this.loadData()},methods:{loadData:function(){var a=this;this.loading=!0,this.tableData=[{goodsId:"1",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"2",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"3",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"4",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"5",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"6",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"7",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"8",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"9",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"},{goodsId:"10",goodsBarCode:"SP2017984",supplier:"杭州化工集团有限公司",classify:"手机",brand:"华为",batchNo:"白色",productName:"荣耀",specification:"40*70",unit:"部",boxOrBag:"箱",singleNum:"60",purchaseNum:"90",spareNum:"100",handoverNum:"80"}],setTimeout(function(){a.loading=!1},100)}}}},725:function(a,t,e){t=a.exports=e(94)(!0),t.push([a.i,".grid-container{height:auto;overflow:hidden}.grid-container .detail-content{height:auto;overflow:hidden;padding:22px 15px;background:#fff}.grid-container .detail-content .detail-item{height:auto;overflow:hidden;line-height:30px;font-size:14px;padding-left:30px}.grid-container .detail-content .detail-item>span{display:inline-block;width:110px;float:left;color:#333}.grid-container .detail-content .detail-item>div{margin-left:110px;color:#999}.grid-container .action-column{text-align:right}.grid-container .color-gred{color:#999}","",{version:3,sources:["E:/wmsAdmin/src/components/storageaction/inventoryadjustment/detail.vue"],names:[],mappings:"AACA,gBACE,YAAa,AACb,eAAiB,CAClB,AACD,gCACE,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,eAAiB,CAClB,AACD,6CACE,YAAa,AACb,gBAAiB,AACjB,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB,AACD,kDACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,iDACE,kBAAmB,AACnB,UAAY,CACb,AACD,+BACE,gBAAkB,CACnB,AACD,4BACE,UAAY,CACb",file:"detail.vue",sourcesContent:["\n.grid-container {\n  height: auto;\n  overflow: hidden;\n}\n.grid-container .detail-content {\n  height: auto;\n  overflow: hidden;\n  padding: 22px 15px;\n  background: #fff;\n}\n.grid-container .detail-content .detail-item {\n  height: auto;\n  overflow: hidden;\n  line-height: 30px;\n  font-size: 14px;\n  padding-left: 30px;\n}\n.grid-container .detail-content .detail-item > span {\n  display: inline-block;\n  width: 110px;\n  float: left;\n  color: #333;\n}\n.grid-container .detail-content .detail-item > div {\n  margin-left: 110px;\n  color: #999;\n}\n.grid-container .action-column {\n  text-align: right;\n}\n.grid-container .color-gred {\n  color: #999;\n}\n"],sourceRoot:""}])},792:function(a,t,e){var i=e(725);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(95)("67a756b0",i,!0)},889:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"grid-container"},[e("div",{staticClass:"page-bread"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/storage_action/inventory_adjustment"}}},[a._v("库存调整")]),a._v(" "),e("el-breadcrumb-item",[a._v("库存调整详情")])],1)],1),a._v(" "),e("div",{staticClass:"detail-content"},[e("el-tabs",{attrs:{activeName:"detail"}},[e("el-tab-pane",{attrs:{label:"库存调整详情",name:"detail"}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("库存调整单号")]),a._v(" "),e("div",[a._v("CKTZ439028409")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("所属库位")]),a._v(" "),e("div",[a._v("A3-12-3-9")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("类型")]),a._v(" "),e("div",[a._v("损")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("调整数量")]),a._v(" "),e("div",[a._v("10")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("创建人")]),a._v(" "),e("div",[a._v("墨染")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("创建时间")]),a._v(" "),e("div",[a._v("2017-06-20 11：22：56")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("审核人")]),a._v(" "),e("div",[a._v("墨染")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("审核时间")]),a._v(" "),e("div",[a._v("2017-06-20 11：22：56")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("备注")]),a._v(" "),e("div",[a._v("备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注")])])]),a._v(" "),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"detail-item"},[e("span",[a._v("状态")]),a._v(" "),e("div",[a._v("审核通过")])])])],1)],1)],1)],1),a._v(" "),e("div",{staticClass:"detail-content"},[e("el-tabs",{attrs:{activeName:"table"}},[e("el-tab-pane",{attrs:{label:"商品信息",name:"table"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:a.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""}},[e("el-table-column",{attrs:{prop:"",label:"商品条码",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"货主",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"供应商",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"产品编号",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"产品分类",width:"250"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"品牌",width:"250"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"批号/型号/货号",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"产品名称",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"规格",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"单位",width:"150"}}),a._v(" "),e("el-table-column",{attrs:{prop:"",label:"库存数量",width:"150"}})],1)],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=27.59f00c27af61bf48eb0c.js.map