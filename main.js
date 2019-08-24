function chamarAPI(){
	console.log("caiu aqui");
	const endpoint = "https://api.exchangeratesapi.io/latest";
	var oParametros = {
		base: $("#moeda_origem").val()
	};
	$.get(endpoint, oParametros, callback );
}

function callback(resultado){
	console.log(resultado)
	var moeda_destino = $("#moeda_destino").val();
	var fValor = resultado.rates[moeda_destino];
	$("#valor_destino_cel").text(fValor);
	$("#moeda_destino_cel").text( moeda_destino);
}