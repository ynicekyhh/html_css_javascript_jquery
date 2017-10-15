/* function을 만들 때, init만 하면 사용할 수 있게 이런식으로 객체지향으로 한다. */
var tabBox = {
	//elLiSelected: null,
	__elLiSelected: null,	// '__'를 붙이면 의미적으로 private으로 사용하겠다는 것. (개발자들끼리 약속한 것)
	init: function(){
		for(var i = 1; i <= 5; i++) {
			var elLi = document.getElementById( "tab-" + i );
			elLi.onclick = this.__onTabClicked;
		}
	},
	__onTabClicked: function(){
		var _this = tabBox;
		var elLi = this;	//이벤트 핸들러 함수의 this는 엘러먼트 : 여기서는 init function안의 elLi
		//if( this.elLiSelected ) => 이렇게 하면 에러. 왜냐면 여기서 this는 init function안의 elLi(이벤트를 호출하는 엘레먼트)니까

		//unselect
		if( _this.__elLiSelected != null ){
			_this.__elLiSelected.className = "";
		}

		//select
		elLi.className = "selected";
		_this.__elLiSelected = elLi;
	}
}

window.onload = function(){
	tabBox.init();
}