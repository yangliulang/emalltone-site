(function($){
	/**
	@幻灯片预览插件
	@版权：杨永
	@2014-8-14
	@模仿腾讯图片查看控件
	*/
	function SildeImage(slide){
		var _this_=this;
		this.slide=slide;
		//保存幻灯片主图
		this.slideMainImage=$("#slide-image-change",slide);
		//保存小图列表和父节点
		this.slideBox=$("#slide-box ul",slide);
		this.imagesList=$("li",this.slideBox);
		this.imagesSize=this.imagesList.size();
		//保存加载提示
		this.loadingState=$("#loading-state",slide);
		//alert(this.imagesSize);
		//如果小图列表大于7个，就启动滑块
		if(this.imagesSize>=7){
			if(this.imagesSize!=7){
				//获取滑道和滑块和滑道的偏移
				this.slideTrack=$("#scrollbar-track",slide);
				this.sliderHandle=$(".scrollbar-handle",slide);
				//获取滑道和滑块的差
				this.trackAndHandleWidth=this.slideTrack.width()-this.sliderHandle.width();
				//注册事件
				this.sliderHandle.mousedown(function(e){
					//隐藏掉框选
					_this_.slideSelectedFrame.fadeOut();
					//获取鼠标相对于自身的偏移
					_this_.layerX=e.pageX-$(this).offset().left;
					//注册document事件()
					$(document).bind("mousemove",function(e){_this_.mouseMove(e);});
					$(document).bind("mouseup",function(){_this_.cancelEvents();});;
				});
				//获得小图隐藏部分的宽度
				this.imagesHideWidth=this.imagesSize*126-this.slideBox.parent().width()-10;	
			};
			//设置小图列表的宽度
			this.slideBox.width(this.imagesSize*126);
		};
		//保存框选对象
		this.slideSelectedFrame=$("#slide-selected-frame",slide);
		//绑定小图事件
		this.imagesList.click(function(){
				_this_.goto(this);	
		});
		//保存上下切换按钮和计数器
		this.loop=0;
		this.slideListBtnPrev=$(".slide-list-btn-prev",slide);
		this.slideListBtnNext=$(".slide-list-btn-next",slide);
		this.slideListBtnPrev.click(function(){
			_this_.loop--;
			if(_this_.loop<0){
				_this_.loop=_this_.imagesSize-1;
			};
			_this_.imagesList.eq(_this_.loop).click();
		});
		this.slideListBtnNext.click(function(){
			_this_.loop++;
			if(_this_.loop>_this_.imagesSize-1){
				_this_.loop=0;
			};
			_this_.imagesList.eq(_this_.loop).click();
		});
		//保存大图切换按钮
		this.slideBtnPrev=$(".slide-btn-prev",slide);
		this.slideBtnNext=$(".slide-btn-next",slide);
		this.slideBtnPrev.click(function(){
			_this_.slideListBtnPrev.click();
		});
		this.slideBtnNext.click(function(){
			_this_.slideListBtnNext.click();
		});
		//绑定翻页按钮
		$(document).keyup(function(e){
			if(e.which==37){
				_this_.slideListBtnPrev.click();
			};
		});
		$(document).keyup(function(e){
			if(e.which==39){
				_this_.slideListBtnNext.click();
			};
		});
		//保存查看图片按钮
		this.viewBigImg=$("#slide-origin-url",slide);
		//当页面发生刷新时，定位到锚点当前图片
		this.reloadPageInto();	
		//定义一个自动播放定时器和自动播放的按钮
		this.timer=null;	
		this.autoPlayBtn=$("#slide-auto-play",slide);
		this.autoPlayBtn.click(function(){
			if(!this.isAuto){
				_this_.autoPlay();
				this.isAuto=true;
				$(this).text("暂停播放");
			}else{
				window.clearInterval(_this_.timer);
				this.isAuto=false;
				$(this).text("自动播放");
			};
		});	

	};
	SildeImage.prototype={
		changeBigImg:function(target){
			var _this=this;
			var url=$(target).attr("data-origin");
			this.loadingState.show();
			//加载大图
			this.preLoadImg(url,function(){
				_this.slideMainImage.attr("src",url);
				_this.loadingState.fadeOut();
			});
			
		},
		preLoadImg:function(url,callBack){
			var img=new Image();
			if(!!window.ActiveXObject){
				img.onreadystatechange=function(){
					if(this.readyState=="complete"){
								callBack();
					};
				};
			}else{
				img.onload=function(){
						callBack();
				};
			};
			img.src=url;
		},
		//自动播放幻灯片
		autoPlay:function(){
			var _this=this;
			this.timer=window.setInterval(function(){
				_this.slideBtnNext.click();
			},5000);
		},
		reloadPageInto:function(){
			var url=window.location.href,
				url=url.split("#")[1]||"page1",
				pageIndex=parseInt(url.substr(4));
				this.imagesList.eq(pageIndex-1).click();
				//设置计数器
				this.loop=pageIndex-1;
		},
		goto:function(target){
			var index=$(target).index();
			//切换选中状态
			this.imagesList.eq(index).addClass("selected").siblings().removeClass("selected");
			this.loop=index;

			//设置锚点
			var url=window.location.href.split("#")[0];
			window.location.href=url+"#page"+(index+1);
			//显示框选
			if(this.slideSelectedFrame.is(":hidden")){
				this.slideSelectedFrame.fadeIn();
			};
			//设置查看原图href
			this.viewBigImg.attr("href",this.imagesList.eq(index).attr("data-origin"));
			
			//切换图片
			this.changeBigImg(target);
			if(this.imagesSize<=7){
				if(index==6){
					this.slideSelectedFrame.animate({"left":index*126-3});
				}else{
					this.slideSelectedFrame.animate({"left":index*126});
				};
			}else{
				if(index<=3){
					this.slideSelectedFrame.animate({"left":index*126});
					this.slideBox.animate({marginLeft:0});
					if(this.sliderHandle){
						this.sliderHandle.animate({marginLeft:0});
					};
				}else if(index>3&&index<this.imagesSize-3){
					this.slideSelectedFrame.animate({"left":3*126});
					this.slideBox.animate({marginLeft:-(index-3)*126});
					var bili=(index-3)*126/this.imagesHideWidth;
					this.sliderHandle.animate({marginLeft:bili*this.trackAndHandleWidth});
				}else{
					if(index==this.imagesSize-1){
						this.slideSelectedFrame.animate({"left":(7-(this.imagesSize-index))*126-3});
					}else{
						this.slideSelectedFrame.animate({"left":(7-(this.imagesSize-index))*126});
					};
					this.slideBox.animate({marginLeft:-(this.imagesSize-7)*126});
					this.sliderHandle.animate({marginLeft:this.trackAndHandleWidth});
				};
			};
		},
		mouseMove:function(e){
			var moveLayerX=e.pageX-this.slideTrack.offset().left-this.layerX;
			moveLayerX=moveLayerX<0?0:moveLayerX>this.trackAndHandleWidth?this.trackAndHandleWidth:moveLayerX;
			//设置滑块的位置
			this.sliderHandle.css("marginLeft",moveLayerX);
			//设置隐藏部分的位置
			this.slideBox.css("marginLeft",-((moveLayerX/this.trackAndHandleWidth).toFixed(3)*this.imagesHideWidth));
		},
		cancelEvents:function(){
			$(document).unbind("mousemove");
			$(document).unbind("mouseup");
			//检测鼠标抬起后移动列表位置
			var i=Math.round(Math.abs(parseInt(this.slideBox.css("marginLeft"))/116))>this.imagesSize-7?this.imagesSize-7:Math.round(Math.abs(parseInt(this.slideBox.css("marginLeft"))/116));
			this.slideBox.animate({marginLeft:-i*126});
			//设置滑块的移动
			var bili=i*126/this.imagesHideWidth;
			this.sliderHandle.animate({marginLeft:bili*this.trackAndHandleWidth});
		}
	
	};
	window["SildeImage"]=SildeImage;
})(jQuery);