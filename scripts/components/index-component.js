
var Index = React.createClass({
	getInitialState:function(){
		return {
			frameOneHeight:$(window).height()-85,
			frameTwoHeight:$(window).height()-155
		};
	},
	componentDidMount:function(){
		$(window).resize(function(){
			this.setState({
								frameOneHeight:$(window).height()-85,
								frameTwoHeight:$(window).height()-155
								});
		}.bind(this));
		window.setTimeout(function(){
			$(this.refs.focusText.getDOMNode()).addClass("transform");
		}.bind(this),100);
		
	},
	render:function(){
		return (
				<div className="scrollPages">
						<div className="fp-section" style={{height:this.state.frameOneHeight}}>
								<div className="bg-section" style={{height:this.state.frameOneHeight*0.75}}>
									<div className="block-1210">
										<div className="focus-txt" ref="focusText">
											<p>品生活&middot;智未来</p>
											<span>Enjoy life smart future</span>
										</div>
									</div>
								</div>
								<ul className="cate-nav">
									<li>
										<a className="f" target="_blank" href="http://www.pinzhi365.com">
											<h2>品质365</h2>
											<h3>B2C电商业务</h3>
											<div></div>
										</a>
									</li>
									<li>
										<a className="f" target="_blank" href="http://www.pinzhi365.com/flag2/index.do">
											<h2>HILIFE旗舰店</h2>
											<h3>O2O线下店铺</h3>
											<div></div>
										</a>
									</li>
									<li>
										<a className="f" href="#none">
											<h2>指麦优品</h2>
											<h3>O2O社群电商</h3>
											<div></div>
										</a>
									</li>
									<li>
										<a className="f" target="_blank" href="http://shop.pinzhi365.com/">
											<h2>HILIFE社区店</h2>
											<h3>MS手机微店</h3>
											<div></div>
										</a>
									</li>
								</ul>
						</div>
						<div className="fp-section">
							<div className="video" style={{height:this.state.frameTwoHeight}}>
								<div className="video-text" ref="videoText"></div>
								<div className="video-play" ref="videoPlay" onClick={this.props.openVideo}></div>
							</div>
						</div>
				</div>
		);
	}
});