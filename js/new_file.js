!function(){

	var seting = {
		view: {
			dblClickExpand: false,
			showLine: false,
			showIcon: false
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			onClick: onClick
		}
	};
	
	var zNodes =[
	 			{ id:1, pId:0, name:"平台概述", open:true},
	 			{ id:11, pId:1, name:"平台简介", open:true},
	 			{ id:12, pId:1, name:"开放业务", open:true},
	 			{ id:13, pId:1, name:"平台公约", open:true},
	 			 
	 			{ id:3, pId:0, name:"政策规范", open:true},
	 			{ id:31, pId:3, name:"用户服务协议"},
	 			{ id:32, pId:3, name:"隐私权政策"},
	 			{ id:33, pId:3, name:"开发者协议"},
	 			{ id:34, pId:3, name:"企业开放数据协议"},
	
	 			
	 			{ id:4, pId:0, name:"开发文档", open:true},
	 			{ id:41, pId:4, name:"开发者入门"},
	 			{ id:42, pId:4, name:"开发常用场景"},
	 			{ id:43, pId:4, name:"API中心"},
	 			
	 			{ id:5, pId:0, name:"常见问题"},
	 			{ id:6, pId:0, name:"联系我们"},
	];
	
	function onClick(e,treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		zTree.expandNode(treeNode);
	}
	
	$(document).ready(function(){
		$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		
	});
	
}();

//选择节点，改变节点颜色
$.fn.zTree.selectUrlNode = function(zTreeObj,url){
	if (typeof url != 'string'){
		return;
	}
	//初始化某个节点的颜色
	var nodeURL = url;
	var node = zTreeObj.getNodeByParam("url", nodeURL, null);
	if (node == null){
		return;
	}
	$('#'+node.tId).find('a').addClass('nav_active');
}
