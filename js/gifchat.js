$(function(){
	var rate = 5000
	var running = false
	randomColor = function(){
		return Math.floor(Math.random()*256) + ""
	}
	rungoya = function(){
		running = setInterval(function(el){
			$(".bubble").each(function(i, el){
				$(el).css("background-color", "rgb(" + 	randomColor() 	+", "+ randomColor() +", "+ 	randomColor() + ")")
			})
		}, rate);
	}
	runstopno = function(){
		clearInterval(running)
		running = false
	}

	$(".newbubble").click(function(){
		runstopno();
		$("#record_overlay").toggle()
	})
	$("button.no").click(function(){
		$("#record_overlay").toggle()
	})
	var transition = 200
	$("#txt").focus(function(){
		$("#offstate").animate({"top":-216}, transition)
		$("#keyboard").animate({"bottom":0}, transition)
	})
	$("#txt").blur(function(){
		$("#offstate").animate({"top":0}, transition)
		$("#keyboard").animate({"bottom":-216}, transition)
	})
	$("#txt").submit(function(){
		// add to chat stage on input submit
	})
})