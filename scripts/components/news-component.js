var News = React.createClass({
	getInitialState:function(){
		
		return {
			currentCate:"pinzhi365",
			allNewsList:"",
			currentNewsList:[]
		
		};
	
	},
	componentDidUpdate:function(){
		var _selfCom = this;
		$(this.refs.years.getDOMNode()).children().click(function(){
				$(this).addClass("current").siblings().removeClass("current");
				if($(this).attr("data-time") != "start"){
					$("html,body").stop().animate({scrollTop:$(_selfCom.refs.newsWrap.getDOMNode()).find("li[data-time="+$(this).attr('data-time')+"]").offset().top});
				}else{
					$("html,body").stop().animate({scrollTop:$(document).height()-$(window).height()});
				};
		});
	},
	componentDidMount:function(){
		$.get(this.props.url+"?time="+Math.random(),null,function(newsList){
			var _selfCom = this;
			//把所有新闻数据绑定到状态中
			this.setState({allNewsList:newsList});
			//根据url是否有日期查询来设置不同的查询
			var urlDate = window.location.href.indexOf("date");
			//设置当前分类的新闻列表
			if(urlDate == -1){
				this.setState({currentNewsList:newsList[this.state.currentCate].newsItem});
			}else{
				//根据日期进行检索后不分类别设置
				this.searchDateNews();
			};
			$(this.refs.years.getDOMNode()).children().click(function(){
				$(this).addClass("current").siblings().removeClass("current");
				if($(this).attr("data-time") != "start"){
					$("html,body").stop().animate({scrollTop:$(_selfCom.refs.newsWrap.getDOMNode()).find("li[data-time="+$(this).attr('data-time')+"]").offset().top});
				}else{
					$("html,body").stop().animate({scrollTop:$(document).height()-$(window).height()});
				};
			});
		}.bind(this),"json");
	},
	searchDateNews:function(){
		var date = window.location.href.slice(window.location.href.indexOf("date")+5);
		var searchNews = [];
		for(var name in this.state.allNewsList){
			//newsItem
			this.state.allNewsList[name].newsItem.map(function(item){
				if(item.time.indexOf(date) != -1){
					searchNews.push(item);
				};
			});
		};
		this.setState({currentCate:""});
		this.setState({currentNewsList:searchNews});
	},
	tabChangeHandler:function(cateName){
		this.setState({currentCate:cateName});
		this.setState({currentNewsList:this.state.allNewsList[cateName].newsItem});
	},
	goTop:function(){
		$("html,body").stop().animate({scrollTop:0});
	},
	render:function(){
		//对分类切换的tab控制
		var cateTabs = [];
		for(var name in this.state.allNewsList){
			if(this.state.currentCate != name){
				cateTabs.push(<li onClick={this.tabChangeHandler.bind(this,name)}>{this.state.allNewsList[name].newsCate}</li>);
			}else{
				cateTabs.push(<li className="selected" onClick={this.tabChangeHandler.bind(this,name)}>{this.state.allNewsList[name].newsCate}</li>);
			};
		};
		//新闻列表
		var newsList = [];
		var years = '',
			yearsList = [];
		this.state.currentNewsList.forEach(function(o,i){
			var timeSplit =o.time.split("-");
			var link = null;
			if(o.isDetial){
				link = <a href={"newsDetial/"+o.cate+"/"+o.time+".html"} target="_blank" className={o.cate}>[详情]</a>;
			}else{
				 link = null;
			};
			newsList.push(<li className="clearfix" data-time={timeSplit[0]}>
								<div className={"time "+o.cate}>
									<span>{timeSplit[0].slice(-2)}</span>
									<span>{timeSplit[1]+"-"+timeSplit[2]}</span>
								</div>
								<div className="news">
									<h2>{o.title}</h2>
									<p>{o.desc}{link}</p>
								</div>
							</li>);
			
			if(timeSplit[0]!=years){
				if(i == 0){
					yearsList.push(<li className="current" data-time={timeSplit[0]}>{timeSplit[0]}</li>);
				}else{
					yearsList.push(<li data-time={timeSplit[0]}>{timeSplit[0]}</li>);
				};
			};
			years = timeSplit[0];
		}.bind(this));
		//控制上下切换按钮
		return (
		        <div className="news-container">
					<div className="new-list">
						<ul className="year-nav clearfix">
							{cateTabs}
						</ul>
						<ol className="news-item" ref="newsWrap">
							{newsList}
						</ol>
						{
							/*
						<div className="page-btn">
							<button className="disabled">上一页</button><button>下一页</button>
						</div>
						*/
						}
					</div>
					<ol className="time-line" ref="years">
						{yearsList}
						<li data-time="start">开始</li>
					</ol>
					<div className="gotop" onClick={this.goTop}>
						<span></span>
						<span>置顶</span>
					</div>
				</div>
		);
	}

});