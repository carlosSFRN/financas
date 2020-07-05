jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoLazerExtras'){
            return false;
        }

        var viagens = $('#viagens').maskMoney('unmasked')[0];
        var roupas = $('#roupas').maskMoney('unmasked')[0];
        var cinema = $('#cinema').maskMoney('unmasked')[0];
        var festas = $('#festas').maskMoney('unmasked')[0];
        var animaisDomesticos = $('#animaisDomesticos').maskMoney('unmasked')[0];
        var outrosLazerExtras = $('#outrosLazerExtras').maskMoney('unmasked')[0];


        var despesaSoma = 
        currency(viagens).
        add(roupas).
        add(cinema).
        add(festas).
        add(animaisDomesticos).
        add(outrosLazerExtras);

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoLazerExtras').html(formatBRL.format(despesaSoma));
    });
});


$(function() {
    $('#viagens').maskMoney();
    $('#roupas').maskMoney();
    $('#cinema').maskMoney();
    $('#festas').maskMoney();
    $('#animaisDomesticos').maskMoney();
    $('#outrosLazerExtras').maskMoney();
})