jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoEducacao'){
            return false;
        }

        var mensalidade = $('#mensalidade').maskMoney('unmasked')[0];
        var cursos = $('#cursos').maskMoney('unmasked')[0];
        var materialLivros = $('#materialLivros').maskMoney('unmasked')[0];
        var outrosEducacao = $('#outrosEducacao').maskMoney('unmasked')[0];

        var despesaSoma = 
        currency(mensalidade).
        add(cursos).
        add(materialLivros).
        add(outrosEducacao);

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoEducacao').html(formatBRL.format(despesaSoma));
    });
});


$(function() {
    $('#mensalidade').maskMoney();
    $('#cursos').maskMoney();
    $('#materialLivros').maskMoney();
    $('#outrosEducacao').maskMoney();
})