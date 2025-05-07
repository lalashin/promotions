// const DOMAIN = 'MY DOMAIN';



// https 로 넘기는 로직
/*
var locationProtocol = location.protocol;
if(locationProtocol.indexOf("https") == -1){
	var refreshUrl = "https://"+location.host+location.pathname+location.search;
	location.href = refreshUrl;
};
*/



// 모바일 환경 input 태그 글입력시 함수 선언
/*
function addEvent(elem,event,fn){
	if(elem.addEventListener){
		elem.addEventListener(event,fn,false);
	}else{
		elem.attachEvent("on" + event,function(){
			return(fn.call(elem, window.event));
		});
	}
};
addEvent(element,'focus',function(){
	var that = this;
	setTimeout(function(){
		that.selectionStart = that.selectionEnd = 10000;
	},0);
});
*/



// 현재 클라이언트가 PC 인지 Mobile 인지 확인하는 함수 선언
function getUserAgent(){
	var filter_pc = "win16|win32|win64|mac";

	if(navigator.platform){
		if(filter_pc.indexOf(navigator.platform.toLowerCase()) < 0){
			return "mobile";
		}else{
			return "pc";
		};
	}else{
		return false;
	};
};



/* @@@@@ closest 대체 함수 선언 @@@@@::START */

/*
function closestFunc(obj,target){
	// 태그, 클래스명, 아이디 값으로 찾기
	var var_i = 0;
	while(obj.tagName != target){
		obj = obj.parentNode;
		var_i++;

		if(!obj){
			return null;
		};
		return obj;
	};
};
*/
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement;
        } while (el !== null);
        return null;
    };

/* @@@@@ closest 대체 함수 선언 @@@@@::CLEAR */



/* @@@@@ trigger 대체 함수 선언 @@@@@::START */

function fireEvent(node,eventName){
	// Make sure we use the ownerDocument from the provided node to avoid cross-window problems
	var doc;
	if(node.ownerDocument){
		doc = node.ownerDocument;
	}else if(node.nodeType == 9){
	// the node may be the document itself, nodeType 9 = DOCUMENT_NODE
		doc = node;
	}else{
		throw new Error("Invalid node passed to fireEvent: " + node.id);
	};

	if(node.dispatchEvent){
		// Gecko-style approach (now the standard) takes more work
		var eventClass = "";

		// Different events have different event classes.
		// If this switch statement can't map an eventName to an eventClass,
		// the event firing is going to fail.
		switch(eventName){
			case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
			case "mousedown":
			case "mouseup":
				eventClass = "MouseEvents";
			break;

			case "focus":
			case "change":
			case "blur":
			case "select":
				eventClass = "HTMLEvents";
			break;

			default:
				throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
			break;
		};
		var event = doc.createEvent(eventClass);
		event.initEvent(eventName,true,true); // All events created as bubbling and cancelable.

		event.synthetic = true; // allow detection of synthetic events
		// The second parameter says go ahead with the default action
		node.dispatchEvent(event,true);
	}else if(node.fireEvent){
		// IE-old school style, you can drop this if you don't need to support IE8 and lower
		var event = doc.createEventObject();
		event.synthetic = true; // allow detection of synthetic events
		node.fireEvent("on" + eventName, event);
	};
};

/* @@@@@ trigger 대체 함수 선언 @@@@@::CLEAR */



/* @@@@@ jQuery > index() 대체 함수 선언 @@@@@::START */

function getElementIndex(node,num){
    var index = 0;
    while((node = node.previousElementSibling)){
        index++;
    };
    return Number(index) + num;
}

/* @@@@@ jQuery > index() 대체 함수 선언 @@@@@::CLEAR */



/* @@@@@ URL - Query String 반환 함수 @@@@@::START */

function getQueryString(param){
	if(location.search != ''){

		var urlSep = location.search.split("?");
		urlSep = urlSep[1].split("&");
		for(var i in urlSep){
			var attr = urlSep[i];
			if(attr.indexOf(param + "=") != -1){
				var attrSep = attr.split("=");
				return attrSep[1];
			};
		};

	}else{

		return false;

	};
};

function getQueryObj(){
	var url = document.location.href;
	var qs = url.substring(url.indexOf('?') + 1).split('&');
	for(var i=0, result={} ; i < qs.length ; i++){
		qs[i] = qs[i].split('=');
		result[qs[i][0]] = decodeURIComponent(qs[i][1]);
	};
	return result;
};

/* @@@@@ URL - Query String 반환 함수 @@@@@::CLEAR */



/* @@@@@ 특정 쿼리변수를 포함하는 URL 반환 함수 @@@@@::START */

function getTargetURL(keys,values,rem,state){
	// 목표 URL 변수
	var targetUrl = '';
	var targetArr = [];
	var targetKey = [];
	var targetValue = [];

	// 쿼리변수가 존재한다면,
	if(location.search != ""){
		var urlQuery = location.search.split("?");
		urlQuery = urlQuery[1];

		// 쿼리변수가 복수개수라면,
		if(urlQuery.indexOf("&")){
			var queryArr = urlQuery.split("&");

		// 쿼리변수가 한개라면,
		}else{
			var queryArr = [urlQuery];
		};


		// URL 교체형식이 업데이트라면,
		if(state == "update"){

			for(var j=0 ; j<queryArr.length ; j++){
				var queryAttr = queryArr[j].split("=");

				var delState = false;
				for(var r=0 ; r<rem.length ; r++){
					if(queryAttr[0] == rem[r]) delState = true;
				};

				if(delState == false){
					targetArr[queryAttr[0]] = queryAttr[1];
					targetKey.push(queryAttr[0]);
					targetValue.push(queryAttr[1]);

					for(var i=0 ; i<keys.length ; i++){
						if(queryAttr[0] == keys[i]){
							targetArr[queryAttr[0]] = values[i];
							targetValue[j] = values[i];
						};
					};
				};
			};

			for(var i=0 ; i<keys.length ; i++){
				if(!targetArr[keys[i]]){
					targetArr[keys[i]] = values[i];
					targetKey.push(keys[i]);
					targetValue.push(values[i]);
				};
			};

		// URL 교체형식이 변경이라면,
		}else if(state == "change"){

			for(var i=0 ; i<keys.length ; i++){
				if(!targetArr[keys[i]]){
					targetArr[keys[i]] = values[i];
					targetKey.push(keys[i]);
					targetValue.push(values[i]);
				};
			};

		};

	// 쿼리변수가 존재하지 않는다면,
	}else{
		for(var i=0 ; i<keys.length ; i++){
			targetArr[keys[i]] = values[i];
			targetKey.push(keys[i]);
			targetValue.push(values[i]);
		};
	};

	for(var key in targetArr){
		if(key == "page"){
			targetUrl += key + "=1&";
		}else{
			targetUrl += key + "=" + targetArr[key] + "&";
		};
	};

	// 마지막 & 제거 로직
	var targetUrl_new = '';
	var targetUrlSep = targetUrl.split("&");
	for(var i=0 ; i<targetUrlSep.length ; i++){
		targetUrl_new += targetUrlSep[i];
		if(i < (targetUrlSep.length-2)) targetUrl_new += "&";
	};

	return targetUrl_new;
};

/* @@@@@ 특정 쿼리변수를 포함하는 URL 반환 함수 @@@@@::CLEAR */



/* @@@@@ focus 및 click 초기화용 어그로 함수 선언 @@@@@::START */

function callUgro(){
	fireEvent(document.getElementById('ugroEle'),'click');
};

/* @@@@@ focus 및 click 초기화용 어그로 함수 선언 @@@@@::CLEAR */



/* @@@@@ 업로드 파일의 확장자 얻는 함수 선언 @@@@@::START */

function getFileExtension(fileName){
	var parts = fileName.split(".");
	return parts[parts.length-1];
}

/* @@@@@ 업로드 파일의 확장자 얻는 함수 선언 @@@@@::CLEAR */



/* @@@@@ A 라는 접속사 여부에 따라 A or B 접속사 추가 함수 선언 @@@@@::START */

function setConjunction(txt,a,b){
	if(txt.indexOf(a) == -1){
		txt += a;
	}else{
		txt += b;
	};

	return txt;
};

/* @@@@@ A 라는 접속사 여부에 따라 A or B 접속사 추가 함수 선언 @@@@@::CLEAR */



/* @@@@@ 세자리 콤마(,) 삽입하거나 제외하는 함수 @@@@@::START */

function number_format(num){
	var nArr = String(num).split('').join(',').split('');
	for( var i=nArr.length-1, j=1; i>=0; i--, j++)  if( j%6 != 0 && j%2 == 0) nArr[i] = '';
	return nArr.join('');
};

function format_numbering(num){
	return num.replace(/,/ig,"");
};

jQuery(document).ready(function(e){
	jQuery(".numberingInput").on("focus",function(e){
		jQuery(this).val(format_numbering(jQuery(this).val()));
	});
	jQuery(".numberingInput").on("focusout",function(e){
		var prcNumber = number_format(jQuery(this).val());
		jQuery(this).val(prcNumber);
	});
});

/* @@@@@ 세자리 콤마(,) 삽입하거나 제외하는 함수 @@@@@::CLEAR */



/* @@@@@ 특수문자 입력 방지 함수 @@@@@::START */

function preventSpecialCharacter(event){
	//정규식 구문
	var RegExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

	// var obj = document.getElementsByName("cmtTxt")[0];
	var obj = event.target;

	// 특수문자를 지우는 구문
	if (RegExp.test(obj.value)) {
		alert("특수문자는 입력하실 수 없습니다.");
		obj.value = obj.value.substring(0, obj.value.length - 1);
	}
};

/* @@@@@ 특수문자 입력 방지 함수 @@@@@::CLEAR */



/* @@@@@ 상위 엘리먼트 삭제 버튼 클릭 함수 @@@@@::START */

function delParentObj(event,obj){
	var thisEle = event.target;
	var delTarget = thisEle.closest(obj);

	delTarget.parentNode.removeChild(delTarget);
};

/* @@@@@ 상위 엘리먼트 삭제 버튼 클릭 함수 @@@@@::CLEAR */



// 정규표현식 선언
// [정규표현식 변수].test([테스트할 변수]) ==> 형태로 사용
var regTest_cname = /^[가-힇A-Za-z0-9]+$/;
var regTest_name = /^[가-힇A-Za-z]+$/;
var regTest_id = /^[a-zA-Z0-9_]*$/;
var regTest_pw = /^[a-z0-9_]{8,20}$/;
var regTest_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
var regTest_Daddr = /^[A-Za-z가-힇ㄱ-ㅎㅏ-ㅣ0-9\s-_\._]*$/;
var regTest_num = /^[0-9]{0,100}$/;
var regTest_numLimit6 = /^[0-9]{6}$/;
var regTest_numLimit7 = /^[0-9]{7}$/;
var regTest_numLimit8 = /^[0-9]{8}$/;
var regTest_numUnlimit = /^[0-9]{0,15}$/;
var regTest_allStr = /[가-힇A-Za-z0-9\[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"\\\'\\]/g;



// 강좌의 관련 컨텐츠정보 불러오는 함수 선언
function viewRelated(event,code,type){
  var btn = event.target;

  var ajaxUrl = "/police/classes/viewRelated.php?code=" + code + "&type=" + type;
  jQuery.ajax({
		url:ajaxUrl,
		method:"GET",
		cache:false,
		success:function(data){
			// console.log(data);
			var data_var = data.replace(/\s/gi,"");

			// 교재인 경우,
			if(type == 'textbook'){
				var _li = btn.closest("li");
				var _list = _li.getElementsByClassName("textbook_info_list")[0];
				_list.innerHTML = data;

			};

		},
		error:function(error){
			console.log(error);
		}
	});
};



// 타입별 컨텐츠정보 불러오는 함수 선언
function viewDetail(event,code,type){
  var btn = event.target;

  var ajaxUrl = "/police/classes/viewDetail.php?code=" + code + "&type=" + type;
	// console.log(ajaxUrl);

  jQuery.ajax({
		url:ajaxUrl,
		method:"GET",
		cache:false,
		success:function(data){
			// console.log(data);
			var data_var = data.replace(/\s/gi,"");
			var json_data = JSON.parse(data);
			console.log(json_data);

			// 1. 교재인 경우,
			if(type == 'textbook'){
				document.getElementById("pop_textbook_image_1").style.backgroundImage = "url('" + json_data.imagename + "')";
				document.getElementById("pop_textbook_image_2").setAttribute("src",json_data.imagename);
				document.getElementById("pop_textbook_title").innerHTML = json_data.title;
				document.getElementById("pop_textbook_major").innerHTML = json_data.major_code;
				document.getElementById("pop_textbook_title").innerHTML = json_data.title;
				document.getElementById("pop_textbook_writer").innerHTML = json_data.writer;
				document.getElementById("pop_textbook_publisher").innerHTML = json_data.publisher;
				document.getElementById("pop_textbook_plate").innerHTML = json_data.plate;
				document.getElementById("pop_textbook_pages").innerHTML = json_data.pages;
				document.getElementById("pop_textbook_publish_date").innerHTML = json_data.publish_date;
				document.getElementById("pop_textbook_saledisplay").innerHTML = json_data.saledisplay;
				document.getElementById("pop_textbook_price_1").innerHTML = json_data.price_1;
				document.getElementById("pop_textbook_percent").innerHTML = json_data.percent;
				document.getElementById("pop_textbook_price_2").innerHTML = json_data.price_2;
				document.getElementById("pop_textbook_content_1").innerHTML = json_data.content_1;
				document.getElementById("pop_textbook_content_2").innerHTML = json_data.content_2;
				document.getElementById("pop_textbook_content_3").innerHTML = json_data.content_1;
				document.getElementById("pop_textbook_content_4").innerHTML = json_data.content_2;

			// 2. 강좌인 경우,
			}
			
			/*else if(type == 'classes'){
				document.getElementById("pop_classes_grade").innerHTML = json_data.grade;
				document.getElementById("pop_classes_description").innerHTML = json_data.description;
				document.getElementById("pop_classes_exam_code").innerHTML = json_data.exam_code;
				document.getElementById("pop_classes_title").innerHTML = json_data.title;
				document.getElementById("pop_classes_teacher").innerHTML = json_data.teacher_title;
				document.getElementById("pop_classes_count_1").innerHTML = json_data.count_1;
				document.getElementById("pop_classes_class_date").innerHTML = json_data.class_date;
				document.getElementById("pop_classes_status_badge").innerHTML = json_data.status_badge;
				document.getElementById("pop_classes_content_1").innerHTML = json_data.content_1;
				document.getElementById("pop_classes_content_2").innerHTML = json_data.content_2;
				document.getElementById("pop_classes_content_3").innerHTML = json_data.content_3;
				document.getElementById("pop_classes_content_4").innerHTML = json_data.content_4;

			};
			*/

		},
		error:function(error){
			console.log(error);
		}
	});
};



// 체크박스 토글링 함수 선언
function togglePrdChk(event,from,to){
	var thisChk = event.target;

	// 강좌 > 교재인 경우,
	if(from == 'classes' && to == 'textbook'){
		var wrapper = thisChk.closest("li");
		var container = wrapper.children[1];
		var chkCnt = container.getElementsByClassName("chk_textbook").length;
	};

	if(thisChk.checked == true){

		// 강좌 > 교재인 경우,
		if(from == 'classes' && to == 'textbook'){
			for(var i=0 ; i<chkCnt ; i++){
				var chk = container.getElementsByClassName("chk_textbook")[i];
				chk.checked = true;
			};
		};

	}else{

		// 강좌 > 교재인 경우,
		if(from == 'classes' && to == 'textbook'){
			for(var i=0 ; i<chkCnt ; i++){
				var chk = container.getElementsByClassName("chk_textbook")[i];
				chk.checked = false;
			};
		};

	};
};
// 체크박스 장바구니에 추가하는 함수 선언
/*
function addToCart(){
	var chk_classes = '|';
	var chk_textbook = '|';
	var chkCnt = document.getElementsByClassName("prdChk").length;
	for(var i=0 ; i<chkCnt ; i++){
		var chk = document.getElementsByClassName("prdChk")[i];
		if(chk.checked == true){
			if(chk.className.indexOf("chk_classes") != -1){
				chk_classes += chk.value + '|';

			}else if(chk.className.indexOf("chk_textbook") != -1){
				chk_textbook += chk.value + '|';

			};
		};
	};

	if(chk_classes == '|' && chk_textbook == '|'){
		alert("장바구니에 담을 강좌/교재를 선택해주세요.");
		return false;

	}else{
		document.getElementById("addToCartForm_classes").value = chk_classes;
		document.getElementById("addToCartForm_textbook").value = chk_textbook;
		document.getElementById("addToCartForm").submit();
	};
	
};
*/
// 아이템 개수 및 금액 계산하는 함수 선언
function calcToCart(){
	var total_count = 0;
	var total_price = 0;

	var rowCnt = document.getElementsByClassName("row_classes").length;
	for(var i=0 ; i<rowCnt ; i++){
		var row = document.getElementsByClassName("row_classes")[i];
		var price = row.getAttribute("data-price");
		price = parseInt(price);

		total_count++;
		total_price += price;
	};

	document.getElementById("total_count").innerText = total_count;
	document.getElementById("total_price_1").innerText = number_format(total_price);
	document.getElementById("total_price_2").innerText = number_format(total_price);
};
jQuery(document).ready(function(e){
	if(
		document.getElementById("total_count")
		&&
		document.getElementById("total_price_1")
		&&
		document.getElementById("total_price_2")
	){
		calcToCart();
	};
});
// 장바구니에서 삭제하는 함수 선언
/*
function deleteToCart(event,code,type){
	var _btn = event.target;
	var _tr = _btn.closest("tr");
	var _chk = _tr.getElementsByClassName("chk_classes")[0];
	var _code = _chk.value;

	var delConfirm = confirm("해당 아이템을 장바구니에서 제거하시겠습니까?");
	if(delConfirm == true){

		// 강좌인 경우,
		if(type == 'classes'){
			var val_new = '|';
			var val_org = document.getElementById("addToCartForm_classes").value.split("|");
			for(var i=0 ; i<val_org.length ; i++){
				if(val_org[i] != '' && val_org[i] != _code){
					val_new += val_org[i] + '|';
				};
			};

			document.getElementById("addToCartForm_classes").value = val_new;
			_tr.parentNode.removeChild(_tr);

		// 교재인 경우,
		}else if(type == 'textbook'){

		};

	};

};
function deleteToCart(type){
	var checkedCode = '|';
	var checkedChk = [];

	// 강좌인 경우,
	if(type == 'classes'){
		var chkCnt = document.getElementsByClassName("chk_classes").length;
		for(var i=0 ; i<chkCnt ; i++){
			var chk = document.getElementsByClassName("chk_classes")[i];
			if(chk.checked == true){
				checkedCode += chk.value + '|';
				checkedChk.push(chk);
			};
		};

		if(checkedCode == '|'){
			alert("삭제할 강좌를 선택해주세요.");
			return false;

		}else{
			var delConfirm = confirm("선택한 아이템을 장바구니에서 제거하시겠습니까?");
			if(delConfirm == true){

				// 코드값 비교해서 제거 후 저장
				var val_del = '|';
				var val_new = '|';
				var val_org = document.getElementById("addToCartForm_classes").value.split("|");
				for(var i=0 ; i<val_org.length ; i++){
					if(val_org[i] != '' && checkedCode.indexOf('|'+val_org[i]+'|') == -1){
						val_new += val_org[i] + '|';
					}else if(val_org[i] != '' && checkedCode.indexOf('|'+val_org[i]+'|') != -1){
						val_del += val_org[i] + '|';
					};
				};
				document.getElementById("addToCartForm_classes").value = val_new;

				// 체크된 행 삭제처리
				for(var i=checkedChk.length ; i>0 ; i--){
					var _tr = checkedChk[(i-1)].closest("tr");
					_tr.parentNode.removeChild(_tr);
				};

				var ajaxUrl = "/police/shop/cart/delete.php";
				ajaxUrl += "?code=" + val_del;
				ajaxUrl += "&member=" + document.getElementById("member_id").value;
				ajaxUrl += "&kind=" + document.getElementById("cart_kind").value;
				ajaxUrl += "&type=" + document.getElementById("cart_type").value;
				console.log(ajaxUrl);
			  jQuery.ajax({
					url:ajaxUrl,
					method:"GET",
					cache:false,
					success:function(data){
						console.log(data);
						var data_var = data.replace(/\s/gi,"");

						// location.reload();
						// document.getElementById("frm").submit();

					},
					error:function(error){
						console.log(error);
					}
				});

			};

		};

	// 교재인 경우,
	}else if(type == 'textbook'){

	};

	// 아이템 개수 및 금액 재계산
	calcToCart();

};
*/
function deleteToCart(type){
	var checkedCode = '|';
	var checkedChk = [];

	// 강좌인 경우,
	if(type == 'classes'){
		var chkCnt = document.getElementsByClassName("chk_classes").length;
		for(var i=0 ; i<chkCnt ; i++){
			var chk = document.getElementsByClassName("chk_classes")[i];
			if(chk.checked == true){
				checkedCode += chk.value + '|';
				checkedChk.push(chk);
			};
		};

		if(checkedCode == '|'){
			alert("삭제할 강좌를 선택해주세요.");
			return false;

		}else{
			var delConfirm = confirm("선택한 아이템을 장바구니에서 제거하시겠습니까?");
			if(delConfirm == true){

				console.log(checkedCode);

				var ajaxUrl = "/police/shop/cart/delete.php";
				ajaxUrl += "?code=" + checkedCode;
				ajaxUrl += "&member=" + document.getElementById("member_id").value;
				ajaxUrl += "&kind=" + document.getElementById("cart_kind").value;
				ajaxUrl += "&type=" + document.getElementById("cart_type").value;
				console.log(ajaxUrl);
			  jQuery.ajax({
					url:ajaxUrl,
					method:"GET",
					cache:false,
					success:function(data){
						console.log(data);
						var data_var = data.replace(/\s/gi,"");

						if(data_var == 'N'){
							alert("삭제 도중 에러가 발생헀습니다. 재시도바랍니다.");
							location.reload();

						}else if(data_var == 'Y'){
							alert("삭제가 완료되었습니다.");
							document.getElementById("frm").submit();

						};

					},
					error:function(error){
						console.log(error);
					}
				});

			};

		};

	// 교재인 경우,
	}else if(type == 'textbook'){

	};

	// 아이템 개수 및 금액 재계산
	calcToCart();

};
function deleteToCart_inp(event,type){
	var thisChk = event.target;
	var row = thisChk.closest("tr");
	var chk = row.children[0].children[0];

	chk.checked = true;

	deleteToCart(type);
};
// 장바구니 체크박스 전체 토글링 함수 선언
function toggleChkAll(event,target){
	var thisChk = event.target;
	var thisParent = thisChk.closest(".chkParent");
	var chkCnt = thisParent.getElementsByClassName(target).length;

	if(thisChk.checked == true){
		for(var i=0 ; i<chkCnt ; i++){
			var chk = thisParent.getElementsByClassName(target)[i];
			chk.checked = true;
		};

	}else{
		for(var i=0 ; i<chkCnt ; i++){
			var chk = thisParent.getElementsByClassName(target)[i];
			chk.checked = false;
		};

	};
};



// 장바구니 > 선택된 강좌 결제하는 함수 선언
function addToOrder(type=null){

	var chkValue = '|';
	var chkCnt = document.getElementsByClassName("prdChk").length;
	for(var i=0 ; i<chkCnt ; i++){
		var chk = document.getElementsByClassName("prdChk")[i];
		if(type == 'all') chk.checked = true;
		if(chk.checked == true){
			chkValue += chk.value + '|';
		};
	};


	if(chkValue == '|'){
		alert("결제할 아이템을 선택해주세요.");
		return false;

	}else{

		var ajaxUrl = "/police/classes/checkOrdered.php?member_id=" + document.getElementById("member_id").value + "&code=" + chkValue;
		// console.log(ajaxUrl);
	  jQuery.ajax({
			url:ajaxUrl,
			method:"GET",
			cache:false,
			success:function(data){
				// console.log(data);
				var data_var = data.replace(/\s/gi,"");

				if(data_var == ''){
					document.getElementById("addToOrderForm_classes").value = chkValue;
					document.getElementById("frm").setAttribute("action","/police/shop/order/online/");
					document.getElementById("frm").submit();

				}else{
					alert("이미 결제한 강좌가 포함되어 있습니다\r\n" + data);
					return false;
				};

			},
			error:function(error){
				console.log(error);
			}
		});

	};

};



// 리스트 > 체크박스 주문서작성에 추가하는 함수 선언
/*
function addToOrderDirect(){
	var chk_classes = '|';
	var chk_textbook = '|';
	var chkCnt = document.getElementsByClassName("prdChk").length;
	for(var i=0 ; i<chkCnt ; i++){
		var chk = document.getElementsByClassName("prdChk")[i];
		if(chk.checked == true){
			if(chk.className.indexOf("chk_classes") != -1){
				chk_classes += chk.value + '|';

			}else if(chk.className.indexOf("chk_textbook") != -1){
				chk_textbook += chk.value + '|';

			};
		};
	};

	if(chk_classes == '|' && chk_textbook == '|'){
		alert("주문할 강좌/교재를 선택해주세요.");
		return false;

	}else{
		document.getElementById("addToOrderForm_classes").value = chk_classes;
		document.getElementById("addToOrderForm_textbook").value = chk_textbook;
		// document.getElementById("frm").setAttribute("action","/police/shop/order/online/");
		document.getElementById("addToOrderForm").submit();
	};
};
*/


// 주문서작성 > 결제하기 함수 선언
function checkToPay(){

	// 구매금액
	document.getElementById("price").value = "1000";
	// 구매상품명
	document.getElementById("goodname").value = "test goods";
	// 구매자 이름
	document.getElementById("buyername").value = document.getElementById("o_name").value;
	// 구매자 연락처
	document.getElementById("buyertel").value = document.getElementById("o_cell").value;
	// 구매자 이메일
	document.getElementById("buyeremail").value = '';

	// document.getElementById("frm").submit();
	INIStdPay.pay('SendPayForm_id');
};
