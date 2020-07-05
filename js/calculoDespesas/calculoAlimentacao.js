jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoAlimentacao'){
            return false;
        }

        var mercado = $('#mercado').maskMoney('unmasked')[0];
        var foradecasa = $('#foradecasa').maskMoney('unmasked')[0];
        var outrosAlimentacao = $('#outrosAlimentacao').maskMoney('unmasked')[0];

        var despesaSoma = 
        currency(mercado).
        add(foradecasa).
        add(outrosAlimentacao);

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoAlimentacao').html(formatBRL.format(despesaSoma));
    });
});


$(function() {
    $('#mercado').maskMoney();
    $('#foradecasa').maskMoney();
    $('#outrosAlimentacao').maskMoney();
    $('#resultadoAlimentacao').maskMoney();
})