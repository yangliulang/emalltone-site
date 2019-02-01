
var Header = React.createClass({
	getInitialState:function(){
		return {
			navItems:[
				{
					menu:"首页",
					link:"http://www.emalltone.com/index.html"
				},
				
				{
					menu:"关于我们",
					link:"javascript:void(0)",
					subMenus:[
						{
							name:"公司介绍",
							link:"http://www.emalltone.com/aboutous.html"
						},
						{
							name:"经营范围",
							link:"http://www.emalltone.com/serve.html"
						}
					]
				},
				{
					menu:"业务板块",
					link:"javascript:void(0)",
					subMenus:[
						{
							name:"品质365",
							link:"http://www.emalltone.com/pinzhi365.html"
						},
						{
							name:"品质全球",
							link:"http://www.emalltone.com/pinzhiquanqiu.html"
						},
						{
							name:"旗舰店",
							link:"http://www.emalltone.com/hilifeStore.html"
						},
						{
							name:"社区店",
							link:"http://www.emalltone.com/hilifeShequ.html"
						}
					]
				},
				{
					menu:"大事件",
					link:"javascript:void(0)",
					subMenus:[
						{
							name:"2016",
							link:"http://www.emalltone.com/news.html?date=2016"
						},
						{
							name:"2015",
							link:"http://www.emalltone.com/news.html?date=2015"
						},
						{
							name:"2014",
							link:"http://www.emalltone.com/news.html?date=2014"
						},
						{
							name:"2013",
							link:"http://www.emalltone.com/news.html?date=2013"
						}
					]
				},
				{
					menu:"加入我们",
					link:"javascript:void(0)",
					subMenus:[
						{
							name:"招聘职位",
							link:"http://www.emalltone.com/jobs.html"
						},
						{
							name:"员工风采",
							link:"http://www.emalltone.com/staff-presence.html"
						},
						{
							name:"联系我们",
							link:"http://www.emalltone.com/concatous.html"
						}
					]
				}	
			]
		};
	},

	render:function(){
		var menus = [];
		this.state.navItems.map(function(item){
			var isSub = item.subMenus?true:false;
			if(isSub){
				menus.push(
							<li className="nav-item" >
								<a className="menu" href={item.link}>{item.menu}</a>
								<ul className="sub-menu">
									{item.subMenus.map(function(subitem){
										return <li><a href={subitem.link} target="_self">{subitem.name}</a></li>;
									})}
								</ul>
							</li>
				);
			}else{
				menus.push(
							<li className="nav-item">
								<a className="menu" href={item.link} target="_self">{item.menu}</a>
							</li>
				);
			};
		});
		return (
				<div className="block-1210 clearfix">
					<h1 className="logo"><a  href="http://www.emalltone.com/index.html">易麦通电子商务有限公司</a></h1>
					<ul className="nav">
						{menus}
					</ul>
				</div>
		);
	}
});
