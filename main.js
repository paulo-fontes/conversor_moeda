const ovly = { };

ovly.conversor = {
	versao: "1",
	chamarAPI: function(){
			console.log("caiu aqui");
			const endpoint = "api/latest"; 
			var oParametros = {
				base: $("#moeda_origem").val()
			};
		$.get(endpoint, oParametros, this.callback );
	},
	callback: function(resultado){
			var moeda_destino = $("#moeda_destino").val();
			var fValor = resultado.rates[moeda_destino];
			$("#valor_destino_cel").text(fValor);
			$("#moeda_destino_cel").text( moeda_destino);
	}
}