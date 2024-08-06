var oPointer = document.getElementsByTagName("img")[0];
        var oTurntable = document.getElementsByTagName("img")[1];
        var oResult = document.getElementsByTagName("img")[2];
        var cat = 36; //總共10個扇形區域，每個區域約36度
        var num = 0; //轉圈結束後停留的度數
        var offOn = true; //是否正在抽獎
        var i = 0;
        var x = 0;
        var sound = document.getElementById('Audio');
        var beep = document.getElementById('beep');
        var bom = document.getElementById('bom');
        var boo = document.getElementById('boo');
        var shuuu = document.getElementById('shuuu');
        var yaaa = document.getElementById('yaaa');
        oPointer.onclick = function () {
            if (offOn) {
                sound.play();
                oTurntable.style.transform = "rotate(0deg)";
                offOn = !offOn;
                ratating();
                
                setTimeout(function (){
                    if(i%3 == 1){
                        document.getElementById("r1").innerHTML=x;
                        beep.play();
                    }
                    if(i%3 == 2){
                        document.getElementById("r2").innerHTML=x;
                        bom.play();
                    }
                    if(i%3 == 0){
                        document.getElementById("r3").innerHTML=x;
                        boo.play();
                        confettiFalling();
                        yaaa.play();
                        document.getElementById("r1").style.color = "red";
                        document.getElementById("r2").style.color = "red";
                        document.getElementById("r3").style.color = "red";
                    }
                }, 5600);
            }
        }
        
        function res(){
            document.getElementById("r1").innerHTML=null;
            document.getElementById("r2").innerHTML=null;
            document.getElementById("r3").innerHTML=null;
            document.getElementById("r1").style.color = "";
            document.getElementById("r2").style.color = "";
            document.getElementById("r3").style.color = "";
            if(i != 0)
                shuuu.play();
            i = 0;
        }
        
        //旋轉
        function ratating() {
            var timer = null;
            var rdm = 360; //隨機度數
            
            clearInterval(timer);
            timer = setInterval(function () {
                if (Math.floor(rdm / 360) < 3) { 
                    rdm = Math.floor(Math.random() * 10000); 
                }else {
                    oTurntable.style.transform = "rotate(" + rdm + "deg)";
                    clearInterval(timer);
                    setTimeout(function () {
                        offOn = !offOn;
                        num = rdm % 360;
                        if (num <= cat * 1) { 
                            x = 1;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "1"); }
                        else if (num <= cat * 2) { 
                            x = 2;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "2"); }
                        else if (num <= cat * 3) { 
                            x = 3;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "3"); }
                        else if (num <= cat * 4) { 
                            x = 4;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "4"); }
                        else if (num <= cat * 5) { 
                            x = 5;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "5"); }
                        else if (num <= cat * 6) { 
                            x = 6;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "6"); }
                        else if (num <= cat * 7) { 
                            x = 7;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "7"); }
                        else if (num <= cat * 8) { 
                            x = 8;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "8"); }
                        else if (num <= cat * 9) { 
                            x = 9;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "9"); }
                        else if (num <= cat * 10) { 
                            x = 0;
                            i++;
                            console.log("rdm=" + rdm + "，num=" + num + "，" + "0"); }
                    
                    }, 5500);
                }
                
            }, 30);
        }


function confettiFalling() {

	var box = document.getElementById("box");
	var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

	for (var i = 0; i < 1000; i++) {
		
		// Create 1000 DIV elements for confetti
		var div = document.createElement("div");
		div.classList.add("confetti");
		box.appendChild(div);
	}

	var confetti = document.querySelectorAll('.confetti');

	for (var i = 0; i < confetti.length; i++) {
		
		var size = Math.random() * 0.01 * [i];

		confetti[i].style.width = 5 + size + 'px';
		confetti[i].style.height = 16 + size + 'px';
		confetti[i].style.left = Math.random() * innerWidth + 'px';

		var background = colors[Math.floor(Math.random() * colors.length)];
		confetti[i].style.backgroundColor = background;

		box.children[i].style.transform = "rotate("+ size*[i] +"deg)";
	}
}
