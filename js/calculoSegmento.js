jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoCasaApartamento'){
            return false;
        }

        var aluguelFinanciamento = $('#aluguelFinanciamento').maskMoney('unmasked')[0];
        var condominio = $('#condominio').maskMoney('unmasked')[0];
        var iptu = $('#iptu').maskMoney('unmasked')[0];
        var agua = $('#agua').maskMoney('unmasked')[0];
        var luz = $('#luz').maskMoney('unmasked')[0];
        var gas = $('#gas').maskMoney('unmasked')[0];
        var internet = $('#internet').maskMoney('unmasked')[0];
        var telefone = $('#telefone').maskMoney('unmasked')[0];
        var tvacabo = $('#tvacabo').maskMoney('unmasked')[0];
        var outrosCasaApartamento = $('#outrosCasaApartamento').maskMoney('unmasked')[0];

        var despesaSoma = 
        currency(aluguelFinanciamento).
        add(condominio).
        add(iptu).
        add(agua).
        add(luz).
        add(gas).
        add(internet).
        add(telefone).
        add(tvacabo).
        add(outrosCasaApartamento);

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoCasaApartamento').html(formatBRL.format(despesaSoma));
    });
});

$(function() {
    $('#aluguelFinanciamento').maskMoney();
    $('#condominio').maskMoney();
    $('#iptu').maskMoney();
    $('#agua').maskMoney();
    $('#luz').maskMoney();
    $('#gas').maskMoney();
    $('#internet').maskMoney();
    $('#telefone').maskMoney();
    $('#tvacabo').maskMoney();
    $('#outrosCasaApartamento').maskMoney();
})
