jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoCasaApartamento'){
        return false;
        }
        
        const aluguelFinanciamento = (jQuery('#aluguelFinanciamento').val() == '' ? 0 : jQuery('#aluguelFinanciamento').val().replace(',', '.'));
        const condominio = (jQuery('#condominio').val() == '' ? 0 : jQuery('#condominio').val().replace(',', '.'));
        const iptu = (jQuery('#iptu').val() == '' ? 0 : jQuery('#iptu').val().replace(',', '.'));
        const agua = (jQuery('#agua').val() == '' ? 0 : jQuery('#agua').val().replace(',', '.'));
        const luz = (jQuery('#luz').val() == '' ? 0 : jQuery('#luz').val().replace(',', '.'));
        const gas = (jQuery('#gas').val() == '' ? 0 : jQuery('#gas').val().replace(',', '.'));
        const internet = (jQuery('#internet').val() == '' ? 0 : jQuery('#internet').val().replace(',', '.'));
        const telefone = (jQuery('#telefone').val() == '' ? 0 : jQuery('#telefone').val().replace(',', '.'));
        const tvacabo = (jQuery('#tvacabo').val() == '' ? 0 : jQuery('#tvacabo').val().replace(',', '.'));
        const outrosCasaApartamento = (jQuery('#outrosCasaApartamento').val() == '' ? 0 : jQuery('#outrosCasaApartamento').val().replace(',', '.'));
        
        var resultadoCasaApartamento = 
        (
            parseFloat(aluguelFinanciamento) + parseFloat(condominio) +
            parseFloat(iptu) + parseFloat(agua) +
            parseFloat(luz) + parseFloat(gas) +
            parseFloat(internet) + parseFloat(telefone) + 
            parseFloat(tvacabo) + parseFloat(outrosCasaApartamento)
        );
        debugger;
        
        $('#resultadoCasaApartamento').html(
            resultadoCasaApartamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    });
});