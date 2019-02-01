var rootPath = "/";
var Footer = React.createClass({
	getInitialState:function(){
		return {
			links:[
				{
					name:"友情链接",
					link:""
				},
				{
					name:"罗麦集团",
					link:"http://www.rolmex.com.cn"
				},
				{
					name:"威客传媒",
					link:"http://www.21wink.com/"
				},
				{
					name:"品质365",
					link:"http://www.pinzhi365.com/"
				},
				{
					name:"品质全球",
					link:"http://www.pinzhiquanqiu.com/"
				},
				{
					name:"HI LIFE 旗舰店",
					link:"http://www.pinzhi365.com/flag2/index.do"
				},
				{
					name:"HI LIFE 社区店",
					link:"http://shop.pinzhi365.com/"
				}
			]
		};
	},
	render:function(){
		
		var links = [];
		
		this.state.links.forEach(function(o,i){
			if(i == 0){
				links.push(<dt>友情链接：</dt>);
			}else{
				links.push(<dd><a href={o.link} target="_blank">{o.name}</a></dd>);
			};
		});
		return (
				<div className="block-1210 clearfix">
						<dl className="links clearfix">
							{links}
						</dl>
						<p className="copy"><a href="http://www.emalltone.com/jobs.html" target="_blank">加入我们</a>|<a href="http://www.emalltone.com/privacy-statement.html" target="_blank">免责声明</a>|<a href="http://www.emalltone.com/privacy.html" target="_blank">隐私政策</a>|版权公告&copy;京ICP备12048015号-2 北京易麦通电子商务有限公司/或其关联公司及特许人。版权所有。</p>
				</div>
		);
	}
});
