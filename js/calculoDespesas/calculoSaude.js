jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoSaude'){
            return false;
        }

        var planodesaude = $('#planodesaude').maskMoney('unmasked')[0];
        var remedios = $('#remedios').maskMoney('unmasked')[0];
        var academia = $('#academia').maskMoney('unmasked')[0];
        var outrosSaude = $('#outrosSaude').maskMoney('unmasked')[0];

        var despesaSoma = 
        currency(planodesaude).
        add(remedios).
        add(academia).
        add(outrosSaude);

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoSaude').html(formatBRL.format(despesaSoma));
    });
});


$(function() {
    $('#planodesaude').maskMoney();
    $('#remedios').maskMoney();
    $('#academia').maskMoney();
    $('#outrosSaude').maskMoney();
})