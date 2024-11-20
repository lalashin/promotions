function urlCopy(addr){

	var addrTxt = "";

	var isIE = (document.all)?true:false;
	var isIE = false;
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { isIE = true; }

	if(isIE){
		if(confirm("이 글의 주소를 클립보드에 복사하시겠습니까?"))
			window.clipboardData.setData("Text",addrTxt);
		}else{
		//temp = prompt("Ctrl+C를 눌러 주소를 클립보드로 복사하세요.",addrTxt);
		  const t = document.createElement("textarea");
		  document.body.appendChild(t);
		  t.value = addr
		  t.select();
		  document.execCommand('copy');
		  document.body.removeChild(t);
		  alert('링크가 복사되었습니다.');
	}
}