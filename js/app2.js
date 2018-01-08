(function main(){

	// Variable globale
	//**************************************************************************
	var row = 3;
	var col = 3;
	var player = true;

	// Créer le tableau 
	//***************************************************************************
	function createTable(row, col){
		for(var i = 0; i < row; i++){
			for(var j= 0; j < col; j++){
				var ligne = $(".morpion--table").append("<td id="+ i + j +" class='empty'></td>");
			}

			$(".morpion--table").append("<tr>" + ligne + "</tr>");
		}

		$("td").on("click", function(){
			if( player === true && $(this).hasClass("empty")){
				player = false;
				$(this).html("X");

				$(this).removeClass("empty");
				$(this).addClass("full")
			}else if(player === false && $(this).hasClass("empty")){
				player = true;
				$(this).html("O");

				$(this).removeClass("empty");
				$(this).addClass("full")
			}else{
				alert("tricheur");
			}

		});
	}

	createTable(row, col);
})();