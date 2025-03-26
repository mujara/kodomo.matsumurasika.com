



	//ウインドウサイズの横幅によって条件分岐

	var windowSize = window.innerWidth;
	var wrapperIdDiv = document.getElementById("wrapper");
	if (windowSize < 768) {
		// スマホ時の処理
		wrapperIdDiv.classList.add("is-smallScreen");
	} else {
		// スマホ以外の処理
		wrapperIdDiv.classList.add("is-wideScreen");
	}

	var timer = '';
	window.onresize = function () {
		  if (timer) {
		    	clearTimeout(timer);
		  }
		  timer = setTimeout(function(){
		    	var windowSize = window.innerWidth;
			var wrapperIdDiv = document.getElementById("wrapper");
		    	if (windowSize < 768) {
				// スマホ時の処理
		      		wrapperIdDiv.classList.remove("is-wideScreen");
		      		wrapperIdDiv.classList.add("is-smallScreen");
		    	} else {
				// スマホ以外の処理
		      		wrapperIdDiv.classList.add("is-wideScreen");
		      		wrapperIdDiv.classList.remove("is-smallScreen");
		    	}
		  }, 200);
	};


	//最上位置・スクロールで表示・変化させるボタンの処理

	//スマホ用画面固定ボタン
	const btnPageBottom_btn = document.querySelector('#btnPageBottom');

	//クリックイベントを追加
	function scroll_to_top(){
		window.scroll({top: 0, behavior: 'smooth'});
	};

	//スクロール時のイベントを追加
	window.addEventListener( 'scroll' , scroll_event );

	function scroll_event(){
		if(window.pageYOffset > 100){
			btnPageBottom_btn.classList.add("is-active");
		}else if(window.pageYOffset < 100){
			btnPageBottom_btn.classList.remove("is-active");
		}
	};


	
	//ホームでのメインビジュアルの動き
	let mainVisualButton01 = document.getElementById("mainVisualButton01");
	let mainVisualButton02 = document.getElementById("mainVisualButton02");
	let mainVisualButton03 = document.getElementById("mainVisualButton03");
	let mainVisualButton04 = document.getElementById("mainVisualButton04");

	let mainVisualImageBox01 = document.getElementById("mainVisualImageBox01");
	let mainVisualImageBox02 = document.getElementById("mainVisualImageBox02");
	let mainVisualImageBox03 = document.getElementById("mainVisualImageBox03");
	let mainVisualImageBox04 = document.getElementById("mainVisualImageBox04");
	
	if (mainVisualButton01 && mainVisualImageBox01){
		 // マウスオーバー時の処理
		 mainVisualButton01.addEventListener('mouseover', () => {
			mainVisualImageBox01.classList.add('active');
		 });
		 // マウスアウト時の処理
		 mainVisualButton01.addEventListener('mouseout', () => {
			mainVisualImageBox01.classList.remove('active');
		 });
	}
	if (mainVisualButton02 && mainVisualImageBox02){
		 // マウスオーバー時の処理
		 mainVisualButton02.addEventListener('mouseover', () => {
			mainVisualImageBox02.classList.add('active');
		 });
		 // マウスアウト時の処理
		 mainVisualButton02.addEventListener('mouseout', () => {
			mainVisualImageBox02.classList.remove('active');
		 });
	}
	if (mainVisualButton03 && mainVisualImageBox03){
		 // マウスオーバー時の処理
		 mainVisualButton03.addEventListener('mouseover', () => {
			mainVisualImageBox03.classList.add('active');
		 });
		 // マウスアウト時の処理
		 mainVisualButton03.addEventListener('mouseout', () => {
			mainVisualImageBox03.classList.remove('active');
		 });
	}
	if (mainVisualButton04 && mainVisualImageBox04){
		 // マウスオーバー時の処理
		 mainVisualButton04.addEventListener('mouseover', () => {
			mainVisualImageBox04.classList.add('active');
		 });
		 // マウスアウト時の処理
		 mainVisualButton04.addEventListener('mouseout', () => {
			mainVisualImageBox04.classList.remove('active');
		 });
	}






// jsへのリンクは、main.jsからの相対パスで記述。
// ファイルを呼び出す時は、拡張子[.js]を削除。

require([
  "smoothScroll",			//スムーズスクロール用JS
  "micromodal.min",			//モーダルウィンドウJS
  "luminous.min",			//画像用モーダルウィンドウJS
],function(){ //[ , ]で区切ってfunction文を追記

	//micromodal.min モーダルウィンドウ用
	MicroModal.init({
	  disableScroll: true,
	  awaitOpenAnimation: true,
	  disableFocus: true,
	  awaitCloseAnimation: true
	});

	//スマートフォン用ボタン
	var globalNaviSmallIcon = document.querySelector('#globalNaviSmallIcon');
	globalNaviSmallIcon.addEventListener( 'click' , btn_is_open );
	
	function btn_is_open(){
		if( globalNaviSmallIcon.classList.contains("is-open") == true ){
			globalNaviSmallIcon.classList.remove("is-open");
			MicroModal.close('modal-globalNaviSmall', {
				awaitCloseAnimation: true
     			});
		} else {
			globalNaviSmallIcon.classList.add("is-open");
			MicroModal.show('modal-globalNaviSmall', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
	        }
	};

	//スマートフォン用ボタン ページ内リンクをクリックした時にモーダルウィンドウを外す
	var globalNaviSmallMenuMain = document.querySelector('.globalNaviSmall__menu__main');
	var globalNaviSmallIconPagelinks = [].slice.call(globalNaviSmallMenuMain.querySelectorAll('a[href^="#"]'));

	globalNaviSmallIconPagelinks.forEach(function (globalNaviSmallIconPagelink) {

		globalNaviSmallIconPagelink.addEventListener( 'click' , pagelink_btn_is_open );
		function pagelink_btn_is_open(){
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			} else {
				globalNaviSmallIcon.classList.add("is-open");
				MicroModal.show('modal-globalNaviSmall', {
				       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
				       awaitCloseAnimation: true
				});
		        }
		};
	});

	//URLのパラメータからインラインのモーダルをページを訪れた際に自動に開くようにする
	// URLのパラメータを取得
	var urlParam = location.search.substring(1);
	
	// URLにパラメータが存在する場合
	if(urlParam) {
		// 「&」が含まれている場合は「&」で分割
		var param = urlParam.split('&');

		// パラメータを格納する用の配列を用意
		var paramArray = [];
		 
		// 用意した配列にパラメータを格納
		for (i = 0; i < param.length; i++) {
			var paramItem = param[i].split('=');
			paramArray[paramItem[0]] = paramItem[1];
		}

		// もしパラメータにmodalInlineContentがあれば
		if (paramArray.modalInlineContent) {
			var modalInlineContentName = paramArray.modalInlineContent;
			MicroModal.show( modalInlineContentName , {
				disableScroll: true,
				awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
				awaitCloseAnimation: true
			});
		} 
	}

	//luminous.min用
	//単数用　.luminous
	var luminousOptions = {
		caption: function (trigger) {
	    		return trigger.getAttribute('title');
	  	},
	}
	var luminousTrigger = document.querySelectorAll('.luminous');
	for (var i = 0; i < luminousTrigger.length; i++) {
	  var elem = luminousTrigger[i];
	  new Luminous(elem, luminousOptions);
	}
	//複数用　.luminousGallery
	var luminousGalleryTrigger = document.querySelectorAll('.luminousGallery');
	var luminousGalleryOptions = {
		caption: function (trigger) {
	    		return trigger.getAttribute('title');
	  	},
	}
	if( luminousGalleryTrigger !== null ) {
		new LuminousGallery(luminousGalleryTrigger,{},luminousGalleryOptions);
	}

	
});//end function文 & require


//画面スクロール・遷移でのアニメ用　ScrollMagic用
require([
  "ScrollMagic",			//特定の位置で発火させるJS
  "debug.addIndicators.min",		//デバッグ用JS
  "gsap.min",				//アニメーションJS
],function(){ //[ , ]で区切ってfunction文を追記

	var ScrollMagic = require('ScrollMagic');

	class ScrollFade {
		constructor() {
			this.ANIMATION_CLASS = 'active';

			let $section = document.querySelectorAll('.--typeScrollFadeIn:not(.active)');
			if ($section.length === null) {
				return;
			}
		    	let controller = new ScrollMagic.Controller();
		    	for (let i = 0; i < $section.length; i++) {
		      		let scene = new ScrollMagic.Scene({
		        		triggerElement: $section[i],
		        		triggerHook: 'onEnter',
		        		reverse: false,
		        		offset: 200,
		      		})
		        	.addIndicators()　//デバッグ用
		        	.addTo(controller);
			      	scene.on('enter', () => {
			        	$section[i].classList.toggle(this.ANIMATION_CLASS);
			      	});
		    	}
		}
	}

	new ScrollFade();

	
});//end function文 & require


//メインイメージスライダー　Swiper用
require([
  "swiper-bundle.min",			//スライダーJS
],function(){ //[ , ]で区切ってfunction文を追記
	var Swiper = require('swiper-bundle.min');

	const mySwiper = new Swiper('.sliderBox--typeFullPage .swiper', {
	  	effect: 'fade', //フェードの指定
	  	fadeEffect: {
	    		crossFade: true,
	  	},
	  	loop: true, // ループの指定
	  	loopAdditionalSlides: 1,
	  	speed: 2000, //２秒かけてフェードで切り替わる
	  	autoplay: {
	    		delay: 4000, //4秒後に次のスライドへ
	    		disableOnInteraction: false, //ユーザー側で操作してもスライドを止めない
	    		waitForTransition: false, //スライド切り替え中にも自動再生が止まらない
	  	},
	  	followFinger: false,
	  	pagination: {
	    		el: '.--typeFullPage .swiper-pagination', // ページネーション要素のクラス
	    		clickable: true, //クリックを有効化する
	  	},
	    	navigation: { // 左右のページ送を使うなら書く
	        	nextEl: ".--typeFullPage .swiper-button-next",
	        	prevEl: ".--typeFullPage .swiper-button-prev"
	    	}
	});

	//コンテンツのスライダー
	  let mySwiperTypeChangeSlide = null;
	  const mediaQuery = window.matchMedia('(max-width: 768px)');

	  const checkBreakpoint = (e) => {
	    if (e.matches) {
	      initSwiperTypeChangeSlide();
	    } else if (mySwiperTypeChangeSlide) {
	      mySwiperTypeChangeSlide.destroy(false, true);
	    }
	  }

	  const initSwiperTypeChangeSlide = () => {
	    mySwiperTypeChangeSlide = new Swiper('.sliderBox--typeChangeSlide .swiper', {
	      slidesPerView: 1,
	      spaceBetween: 16,
	      loop: true,
	      loopAdditionalSlides: 1,
	      speed: 1000,
	      grabCursor: true,
	      pagination: {
	        el: '.sliderBox--typeChangeSlide .swiper-pagination', // ページネーション要素のクラス
	        clickable: true, //クリックを有効化する
	      },
	      navigation: {
	        nextEl: '.sliderBox--typeChangeSlide .swiper-button-next',
	        prevEl: '.sliderBox--typeChangeSlide .swiper-button-prev',
	      },
	      breakpoints: {
	        600: {// 画面幅600px以上で適用
	          slidesPerView: 3,
	        }
	      },
	    });
	  };

	  mediaQuery.addListener(checkBreakpoint);
	  checkBreakpoint(mediaQuery);
	
});//end function文 & require







