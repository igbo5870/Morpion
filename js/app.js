(function main(){ 

	// Variable générale pour le projet 
	//*****************************************************
	var col = 3;				// Colonne du tableau
	var row = 3;				// Ligne du tableau 
	var id; 				    // ID de la case 
	var player = true; 		    // Player 1 ou player 2
	var full = 0;			    // Le nombre de case rempli par un caractère.
	var totalFull = col * row;  // Nombre de case dans le tableau
	var arrayMorpion =[];
	
	// Création d'un tableau avec des ids pour chaque cases
	//*****************************************************
	function createTable(row, col){
		for(var i=0; i < row; i++){ 
			var line = "";
			for(var a=0; a<col; a++){
				line = line + "<td id="+i+a+" class="+"empty"+"></td>";
			}
			$(".morpion--table").append("<tr>"+line+"</tr>");
		}
	}

	createTable(row, col);

	// Ajout d'un x ou d'un o dans une case suivant où on clique 
	//********************************************************

	$("td").click(function(){								
		//id = $(this).attr('id'); 							 
		if($(this).hasClass("empty") && player === true){			// si class empty et joueur 1 ?	
			$(this).html("X")   						
			player = false;								
			$(this).removeClass("empty"); 				
			$(this).addClass("full"); 
			$(this).addClass("cross")
			full += 1;
		}else if($(this).hasClass("empty")&& player === false){ 	// sinon class empty et joeur 2 ?
			$(this).html("O")   						
			player = true;								
			$(this).removeClass("empty"); 				
			$(this).addClass("full"); 
			$(this).addClass("circle");	
			full +=1								 
		}else if(full === totalFull){
			alert("Game Over : Type F5 to start new game !")
			
		}else{
			alert("Cheater!"); 								
		}

		// Ligne 0
		if($("#00").hasClass("cross") && $("#01").hasClass("cross") && $("#02").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#00").hasClass("circle") && $("#01").hasClass("circle") && $("#02").hasClass("circle")){
			alert("Player 2 Win");
		}else if(full === totalFull){
			alert("Game Over : Type F5 to start new game !")
		}

		// Ligne1 
		if($("#10").hasClass("cross") && $("#11").hasClass("cross") && $("#12").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#10").hasClass("circle") && $("#11").hasClass("circle") && $("#12").hasClass("circle")){
			alert("Player 2 Win");
		}	
		// Ligne 2
		if($("#20").hasClass("cross") && $("#21").hasClass("cross") && $("#22").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#20").hasClass("circle") && $("#21").hasClass("circle") && $("#22").hasClass("circle")){
			alert("Player 2 Win");
		}	
		// Colonne 0 
		if($("#00").hasClass("cross") && $("#10").hasClass("cross") && $("#20").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#00").hasClass("circle") && $("#10").hasClass("circle") && $("#20").hasClass("circle")){
			alert("Player 2 Win");
		}	
		// Colonne 1
		if($("#01").hasClass("cross") && $("#11").hasClass("cross") && $("#21").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#01").hasClass("circle") && $("#11").hasClass("circle") && $("#21").hasClass("circle")){
			alert("Player 2 Win");
		}	
		// Colonne 2 
		if($("#02").hasClass("cross") && $("#12").hasClass("cross") && $("#22").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#02").hasClass("circle") && $("#12").hasClass("circle") && $("#22").hasClass("circle")){
			alert("Player 2 Win");
		}	
		// Diagonale 1
		if($("#20").hasClass("cross") && $("#11").hasClass("cross") && $("#02").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#20").hasClass("circle") && $("#11").hasClass("circle") && $("#02").hasClass("circle")){
			alert("Player 2 Win");
		}	
		// Diagonale 2
		if($("#O0").hasClass("cross") && $("#11").hasClass("cross") && $("#22").hasClass("cross")){
			alert("Player 1 Win");
		}else if($("#00").hasClass("circle") && $("#11").hasClass("circle") && $("#22").hasClass("circle")){
			alert("Player 2 Win");
		}
	});

})();
