jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoTransporte'){
            return false;
        }

        var financiamentoCarroMoto = $('#financiamentoCarroMoto').maskMoney('unmasked')[0];
        var seguro = $('#seguro').maskMoney('unmasked')[0];
        var ipva = $('#ipva').maskMoney('unmasked')[0];
        var manutencaoCarro = $('#manutencaoCarro').maskMoney('unmasked')[0];
        var gasolina = $('#gasolina').maskMoney('unmasked')[0];
        var estacionamento = $('#estacionamento').maskMoney('unmasked')[0];
        var transportePublico = $('#transportePublico').maskMoney('unmasked')[0];
        var taxiAppdeTransporte = $('#taxiAppdeTransporte').maskMoney('unmasked')[0];
        var outrosTransporte = $('#outrosTransporte').maskMoney('unmasked')[0];

        var despesaSoma = 
        currency(financiamentoCarroMoto).
        add(seguro).
        add(ipva).
        add(manutencaoCarro).
        add(gasolina).
        add(estacionamento).
        add(transportePublico).
        add(taxiAppdeTransporte).
        add(outrosTransporte);

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoTransporte').html(formatBRL.format(despesaSoma));
    });
});


$(function() {
    $('#financiamentoCarroMoto').maskMoney();
    $('#seguro').maskMoney();
    $('#ipva').maskMoney();
    $('#manutencaoCarro').maskMoney();
    $('#gasolina').maskMoney();
    $('#estacionamento').maskMoney();
    $('#transportePublico').maskMoney();
    $('#taxiAppdeTransporte').maskMoney();
    $('#outrosTransporte').maskMoney();
})