webpackJsonp([4],{31:function(e,r,t){function l(e){t(781)}var a=t(29)(t(610),t(878),l,null,null);e.exports=a.exports},610:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{ruleForm:{type:"",name:"",contacts:"",tel:"",email:"",fax:"",province:"",city:"",district:"",address:"",desc:""},rules:{type:[{required:!0,message:"请选择客户类型",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:6,max:30,message:"长度在 6 到 30 个字符",trigger:"blur"}],contacts:[{required:!0,message:"请输入联系人",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],tel:[{required:!0,message:"请输入联系电话",trigger:"blur"},{validator:function(e,r,t){""!==r&&((/^((\+86)|(86))?(13)\d{9}$/.test(r)||/^0\d{2,3}-?\d{7,8}$/.test(r))&&t(),t(new Error("请输入正确的联系电话")))},trigger:"change"}],email:[{type:"email",message:"请输入正确的邮箱",trigger:"blur,change"}],province:[{required:!0,message:"请选择省份",trigger:"change"}],address:[{required:!0,message:"请输入详细地址",trigger:"blur"},{min:1,max:30,message:"长度在 1 到 30 个字符",trigger:"blur,change"}],desc:[{min:0,max:200,message:"长度在 0 到 200 个字符",trigger:"change"}]}}},activated:function(){console.log(this.$route.params)},deactivated:function(){this.$refs.ruleForm.resetFields()},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}}},714:function(e,r,t){r=e.exports=t(94)(!0),r.push([e.i,".form-container{height:auto;overflow:hidden}.form-container .form-content{height:auto;overflow:hidden;padding:15px;background:#fff}.form-container .form-content .form-wraper{width:500px}.form-container .form-content .form-wraper .line{text-align:center}","",{version:3,sources:["E:/wmsAdmin/src/components/baseinfo/customer/customerEdite.vue"],names:[],mappings:"AACA,gBACE,YAAa,AACb,eAAiB,CAClB,AACD,8BACE,YAAa,AACb,gBAAiB,AACjB,aAAc,AACd,eAAiB,CAClB,AACD,2CACE,WAAa,CACd,AACD,iDACE,iBAAmB,CACpB",file:"customerEdite.vue",sourcesContent:["\n.form-container {\n  height: auto;\n  overflow: hidden;\n}\n.form-container .form-content {\n  height: auto;\n  overflow: hidden;\n  padding: 15px;\n  background: #fff;\n}\n.form-container .form-content .form-wraper {\n  width: 500px;\n}\n.form-container .form-content .form-wraper .line {\n  text-align: center;\n}\n"],sourceRoot:""}])},781:function(e,r,t){var l=t(714);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t(95)("6c712e2e",l,!0)},878:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-container"},[t("div",{staticClass:"page-bread"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/baseinfo/customer_manage"}}},[e._v("客户管理")]),e._v(" "),t("el-breadcrumb-item",[e._v(e._s(this.$route.params.customerid?"编辑客户":"新增客户"))])],1)],1),e._v(" "),t("div",{staticClass:"form-content"},[t("el-form",{ref:"ruleForm",staticClass:"form-wraper",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[this.$route.params.customerid?t("el-form-item",{attrs:{label:"客户编号"}},[t("span",[e._v(e._s(this.$route.params.customerid))])]):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"客户类型",prop:"type"}},[t("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择客户类型"},model:{value:e.ruleForm.type,callback:function(r){e.ruleForm.type=r},expression:"ruleForm.type"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.ruleForm.name=r},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人",prop:"contacts"}},[t("el-input",{model:{value:e.ruleForm.contacts,callback:function(r){e.ruleForm.contacts=r},expression:"ruleForm.contacts"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系电话",prop:"tel"}},[t("el-input",{model:{value:e.ruleForm.tel,callback:function(r){e.ruleForm.tel=r},expression:"ruleForm.tel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.ruleForm.email,callback:function(r){e.ruleForm.email=r},expression:"ruleForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"传真",prop:"fax"}},[t("el-input",{model:{value:e.ruleForm.fax,callback:function(r){e.ruleForm.fax=r},expression:"ruleForm.fax"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系地址",prop:"province"}},[t("el-col",{attrs:{span:7}},[t("el-select",{attrs:{placeholder:"选择省份"},model:{value:e.ruleForm.province,callback:function(r){e.ruleForm.province=r},expression:"ruleForm.province"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:7}},[t("el-select",{attrs:{placeholder:"选择城市"},model:{value:e.ruleForm.city,callback:function(r){e.ruleForm.city=r},expression:"ruleForm.city"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-select",{attrs:{placeholder:"选择区/县"},model:{value:e.ruleForm.district,callback:function(r){e.ruleForm.district=r},expression:"ruleForm.district"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"address"}},[t("el-input",{model:{value:e.ruleForm.address,callback:function(r){e.ruleForm.address=r},expression:"ruleForm.address"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.ruleForm.desc=r},expression:"ruleForm.desc"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=4.7a1ee603953545a766d6.js.map