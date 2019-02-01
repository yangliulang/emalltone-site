var Job = React.createClass({
	getInitialState:function(){
	
		 return {
			hotJobs:[
				{	
					workGroup:"jishuguanli",
					jobId:"001",
					jobName:"Java开发工程师"
				},
				{	
					workGroup:"jishuguanli",
					jobId:"002",
					jobName:"WEB前端开发工程师"
				},
				{	
					workGroup:"zongheguanlizhongxin",
					jobId:"001",
					jobName:"客服专员"
				}

			],
			allGroups:[
				{
					workGroup:"zongheguanlizhongxin",
					groupName:"综合管理中心",
					emaill:"bingyan@pinzhi365.com",
					allJobs:[
						{
							jobId:"001",
							jobName:"客服专员",
							total:2,
							address:"北京",
							zhize:[
								"接听客户对产品及售后问题咨询，并进行解疑；",
								"受理客户的投诉，做好记录，并协助处理；",
								"受理客户对产品或公司的建议或意见，做好登记工作，并及时向领导进行反馈；",
								"协助客户查询快递状态；",
								"受理客户对机票、酒店、话费充值、金融、保险、挂号等增值业务的办理；",
								"维护良好的客户关系，定期电话回访，了解客户需求及服务建议。",
								"注：此岗位无销售任务。"
							],
							yaoqiu:[
								"中专以上学历，有呼叫中心、在线客服等工作经验者优先；",
								"熟悉办公软件的基本操作；",
								"较强的应变、沟通及协调能力，能独立处理紧急问题；",
								"普通话标准，口齿清楚，思维敏捷，表达能力强；",
								"工作积极主动，具备良好的服务意识，耐心和责任心。",
								"朝九晚六，提供班车（1号线四惠东、八通线九棵树/双桥、10号线双井、7号线南楼梓庄）"
							]
						}
					
					]
				},
				{
					workGroup:"jishuguanli",
					groupName:"技术管理部",
					emaill:"bingyan@pinzhi365.com",
					allJobs:[
						{
							jobId:"001",
							jobName:"Java开发工程师",
							total:2,
							address:"北京",
							zhize:[
								"负责网站系统功能的设计、开发、维护，解决遇到的技术问题。"
							],
							yaoqiu:[
								"Java基础扎实，熟练使用Eclipse，熟悉JVM机制，熟练使用多线程、网络、集合等。",
								"熟悉办公软件的基本操作；",
								"2年以上使用Java进行Web开发的经验，熟悉MVC、MyBatis等，熟悉至少一种关系型数据库。",
								"具有抽象设计能力，思路清晰，善于思考，能独立分析和解决问题，责任心强，具备良好的团队合作精神和承受压力的能力。",
								"熟悉Linux下的常用命令，熟悉http协议，Html5者优先。"
							]
						},
						{
							jobId:"002",
							jobName:"WEB前端开发工程师",
							total:1,
							address:"北京",
							zhize:[
								"网站前端开发、维护，对页面进行优化以提升性能和客户体验。",
								"网站通用组件开发，维护，版本更新。",
								"较强的JS逻辑编写。",
								"日常的专题制作。"
							],
							yaoqiu:[
								"2年以上工作经验；",
								"熟悉HTML/CSS/Javascript/jQuery/Ajax/AngularJS等，掌握面向对象设计思想；",
								"精通AngularJS开发移动端网页（手机浏览器、微信浏览器等），熟悉ionic者优先；",
								"持续关注互联网产品动态和前端的趋势，熟悉W3C标准，对前后端分离有实践经验；",
								"会使用grunt构建工具，熟练使用less/ asss，熟悉node.js者优先。"
							]
						},
						{
							jobId:"003",
							jobName:"产品经理",
							total:1,
							address:"北京",
							zhize:[
								"从公司各个部门、用户等各个渠道收集需求，并进行需求过滤、分析；",
								"梳理业务流程，设计系统原型。对用户的交互体验负责；",
								"负责在部门间进行协调，并推动开发落地；",
								"对上线后的效果持续监测，不断改进。"
							],
							yaoqiu:[
								"有互联网产品设计经验，有UE经验，能使用Axure、Xmind、Mindmanager基本工具，至少了解一种原型工具；",
								"有较好的逻辑思维，能够深入理解用户需求，挖掘用户的情感诉求、功能诉求；",
								"精通AngularJS开发移动端网页（手机浏览器、微信浏览器等），熟悉ionic者优先；",
								"有良好的协调、沟通能力。"
							]
						},
						{
							jobId:"004",
							jobName:"安全测试工程师",
							total:1,
							address:"北京",
							zhize:[
								"负责公司产品的web应用及app安全测试，通过黑盒或白盒方式开展安全测试工作，发现安全漏洞，提出技术解决方案，并协助开发人员修复完成；",
								"针对公司Web系统及app制定安全测试方案、编写安全测试用例并执行安全测试等具体工作；",
								"定期对服务器、网站系统进行渗透测试，分析问题并提出解决方案；",
								"负责制定优化研发安全、安全测试流程；"
							],
							yaoqiu:[
								"计算机应用/系统测试相关专业大专及以上学历；1年以上安全测试工作经验；",
								"熟悉常见Web漏洞及其攻击技术，比如SQL注入、XSS、代码执行、文件包含等；",
								"具备软件测试基本知识（软件质量管理基础知识，软件测试概念，软件测试标准，软件测试技术及方法）；",
								"熟悉国内外主流相关渗透、漏扫等工具，如：Nessus、Nmap、AWVS、Burp、Appscan等；",
								"熟悉WEB渗透测试的步骤、方法、流程，能够自行进行安全攻防测试；",
								"熟悉Android或iOS安全系统安全机制和安全测试方法；",
								"具备高度的责任心及良好的职业操守，为人正直、原则性强、优秀的沟通能力。"
							]
						}
					]
				},
				{
					workGroup:"qijiandian",
					groupName:"旗舰店事业部",
					emaill:"bingyan@pinzhi365.com",
					allJobs:[
						{
							jobId:"001",
							jobName:"店长",
							total:2,
							address:"济南",
							zhize:[
								"负责公司旗舰店日常运营管理；",
								"负责店面经营过程中商务合作的开发及洽谈；",
								"全面主持店面的管理工作，配合总部的各项营销策略的实施；",
								"制定并落实各项制度、标准和规范，保障店的服务质量；",
								"拟订店的经营目标，落实店的经营计划，带领团队实现店的经营指标",
								"做好各个员工管理，任务分配工作；",
								"妥善处理顾客投诉和服务工作中所发生的各种矛盾。"
							],
							yaoqiu:[
								"大专及以上学历，三年以上相关工作经验；",
								"有餐饮、酒店及其他实体店铺店长管理工作经验优先；",
								"较好的语言组织、表达能力及洽谈协商能力；",
								"良好的职业道德与职业素养，团队意识强，具有较强的管理能力；",
								"品貌端正，为人正直，做事勤奋负责任；",
								"有优秀的宏观把控、客观分析能力，思维清晰。"
							]
						},
						{
							jobId:"002",
							jobName:"店员",
							total:3,
							address:"济南",
							zhize:[
								"接待顾客的咨询，了解顾客的需求并达成销售；",
								"负责做好货品销售记录、盘点、账目核对等工作，按规定完成各项销售统计工作；",
								"完成商品的来货验收、上架陈列摆放、补货、退货、防损等日常营业工作；",
								"做好所负责区域的卫生清洁工作；",
								"完成上级领导交办的其他任务。"
							],
							yaoqiu:[
								"中专及以上学历；",
								"有相关工作经验者优先；",
								"较好的语言组织、表达能力及洽谈协商能力；",
								"具有较强的沟通能力及服务意识，吃苦耐劳；",
								"年龄18-35岁，身体健康。"
							]
						}
					
					]
				},
			
			













			]
		};
	
	},
	render:function(){
		var hotJobList = [];
		this.state.hotJobs.map(function(o,i){
			hotJobList.push(<li><a href={"#"+o.workGroup+"-"+o.jobId}>{o.jobName}</a></li>);
		});
		var groupList = [];
		var groupJobsList = [];
		this.state.allGroups.map(function(o){
			groupList.push(<li><a href={"#"+o.workGroup}>{o.groupName}</a></li>);
			o.allJobs.map(function(job){
				groupJobsList.push(<dl>
													<dt id={o.workGroup}><span>{o.groupName}</span></dt>
													<dd className="clearfix">
														<div className="job-info">
															<p id={o.workGroup+'-'+job.jobId}>职位：{job.jobName}</p>
															<p>招聘人数：{job.total}人</p>
															<p>工作地点：{job.address}</p>
															<h3>岗位职责：</h3>
															<ul>
																{job.zhize.map(function(o,i){
																	return <li>{i+1}，{o}</li>;
																})}
															</ul>
														</div>
														<div className="job-desc">
															<h4>岗位要求：</h4>
															<ul>
																{job.yaoqiu.map(function(o,i){
																	return <li>{i+1}，{o}</li>;
																})}
															</ul>
														</div>
													</dd>
													<dd className="clearfix"><a className="emaill" href={"mailto:"+o.emaill}>投递</a></dd>
												</dl>);
				});
		});
		return (
					<div id="jobs-container">
								<div className="search-area">
									{/*
									<div className="search-bar">
										<input type="text" placeholder="搜索职位"/><span className="search-icon">c</span>
									</div>
									*/}
								</div>
								<div className="jobs-page">
									<div className="block-1210 clearfix jons-area">
										<div className="aside">
											<h2>招聘职位</h2>
											<ul className="job-list clearfix">
												{hotJobList}
											</ul>
										</div>
										<div className="jobs-main">
											<div className="work-group">
													<ul className="group-list clearfix">
														{groupList}
													</ul>
											</div>
											<div className="group-items">
												{groupJobsList}        
											</div>
										</div>
									</div>
								</div>
						</div>
		);
	}
});

