jQuery(document).ready(function(){
    jQuery('input').on('keyup',function(){
        if(jQuery(this).attr('name') === 'resultadoSaldoXDespesas'){
            return false;
        }
        
        // saldo
        var saldo = $('#saldo').maskMoney('unmasked')[0];
        // saldo

        //CASA/APARTAMENTO
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

        var despesaSoma1 = 
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

        //ALIMENTACAO
        var mercado = $('#mercado').maskMoney('unmasked')[0];
        var foradecasa = $('#foradecasa').maskMoney('unmasked')[0];
        var outrosAlimentacao = $('#outrosAlimentacao').maskMoney('unmasked')[0];

        var despesaSoma2 = 
        currency(mercado).
        add(foradecasa).
        add(outrosAlimentacao);

        //SAUDE
        var planodesaude = $('#planodesaude').maskMoney('unmasked')[0];
        var remedios = $('#remedios').maskMoney('unmasked')[0];
        var academia = $('#academia').maskMoney('unmasked')[0];
        var outrosSaude = $('#outrosSaude').maskMoney('unmasked')[0];

        var despesaSoma3 = 
        currency(planodesaude).
        add(remedios).
        add(academia).
        add(outrosSaude);

        //TRANSPORTE
        var financiamentoCarroMoto = $('#financiamentoCarroMoto').maskMoney('unmasked')[0];
        var seguro = $('#seguro').maskMoney('unmasked')[0];
        var ipva = $('#ipva').maskMoney('unmasked')[0];
        var manutencaoCarro = $('#manutencaoCarro').maskMoney('unmasked')[0];
        var gasolina = $('#gasolina').maskMoney('unmasked')[0];
        var estacionamento = $('#estacionamento').maskMoney('unmasked')[0];
        var transportePublico = $('#transportePublico').maskMoney('unmasked')[0];
        var taxiAppdeTransporte = $('#taxiAppdeTransporte').maskMoney('unmasked')[0];
        var outrosTransporte = $('#outrosTransporte').maskMoney('unmasked')[0];

        var despesaSoma4 = 
        currency(financiamentoCarroMoto).
        add(seguro).
        add(ipva).
        add(manutencaoCarro).
        add(gasolina).
        add(estacionamento).
        add(transportePublico).
        add(taxiAppdeTransporte).
        add(outrosTransporte);

        //EDUCACAO
        var mensalidade = $('#mensalidade').maskMoney('unmasked')[0];
        var cursos = $('#cursos').maskMoney('unmasked')[0];
        var materialLivros = $('#materialLivros').maskMoney('unmasked')[0];
        var outrosEducacao = $('#outrosEducacao').maskMoney('unmasked')[0];

        var despesaSoma5 = 
        currency(mensalidade).
        add(cursos).
        add(materialLivros).
        add(outrosEducacao);

        //LAZER E EXTRAS
        var viagens = $('#viagens').maskMoney('unmasked')[0];
        var roupas = $('#roupas').maskMoney('unmasked')[0];
        var cinema = $('#cinema').maskMoney('unmasked')[0];
        var festas = $('#festas').maskMoney('unmasked')[0];
        var animaisDomesticos = $('#animaisDomesticos').maskMoney('unmasked')[0];
        var outrosLazerExtras = $('#outrosLazerExtras').maskMoney('unmasked')[0];

        var despesaSoma6 = 
        currency(viagens).
        add(roupas).
        add(cinema).
        add(festas).
        add(animaisDomesticos).
        add(outrosLazerExtras);

        var despesaSoma = 
        currency(despesaSoma1).
        add(despesaSoma2).
        add(despesaSoma3).
        add(despesaSoma4).
        add(despesaSoma5).
        add(despesaSoma6);

        var saldoSoma = saldo - despesaSoma;

        var optionBRL = { style: 'currency', currency: 'BRL' };
        var formatBRL = new Intl.NumberFormat('pt-BR', optionBRL);
        $('#resultadoSaldoXDespesas').html(formatBRL.format(saldoSoma));
        $('#despesaSomaTotal').html(formatBRL.format(despesaSoma));

        //adicionar cor dinamica no Saldo
        if(saldoSoma > 0)
        {
            $('.cor-dinamica-saldo').addClass('bg-success');
            $('.cor-dinamica-saldo').removeClass('bg-danger');
        }
        if (saldoSoma < 0)
        {
            $('.cor-dinamica-saldo').addClass('bg-danger');
            $('.cor-dinamica-saldo').removeClass('bg-success');
        }

        // formatar para valores em reais
        $('#despesaSoma1').html(formatBRL.format(despesaSoma1));
        $('#despesaSoma2').html(formatBRL.format(despesaSoma2));
        $('#despesaSoma3').html(formatBRL.format(despesaSoma3));
        $('#despesaSoma4').html(formatBRL.format(despesaSoma4));
        $('#despesaSoma5').html(formatBRL.format(despesaSoma5));
        $('#despesaSoma6').html(formatBRL.format(despesaSoma6));

        //valores de porcentagem por cada grupo de gasto x saldo
        var despesaSomaPorcentagem1 = (despesaSoma1 / saldo) * 100;
        var despesaSomaPorcentagem2 = (despesaSoma2 / saldo) * 100;
        var despesaSomaPorcentagem3 = (despesaSoma3 / saldo) * 100;
        var despesaSomaPorcentagem4 = (despesaSoma4 / saldo) * 100;
        var despesaSomaPorcentagem5 = (despesaSoma5 / saldo) * 100;
        var despesaSomaPorcentagem6 = (despesaSoma6 / saldo) * 100;

        //valor total gasto em porcentagem
        var despesaSomaTotalPorcentagem = 
        despesaSomaPorcentagem1 + despesaSomaPorcentagem2 +
        despesaSomaPorcentagem3 + despesaSomaPorcentagem4 +
        despesaSomaPorcentagem5 + despesaSomaPorcentagem6;

        // verificar o perfil financeiro

        //poupador
        if(despesaSomaTotalPorcentagem <= 69)
        {
            $("#conteudo-perfil-financeiro-p1").empty();
            $("#conteudo-perfil-financeiro-p2").empty();
            $("#conteudo-perfil-financeiro-p1").
            html(`Você gastou equivalente a <span class="cor-dinamica font-weight-bold">${despesaSomaTotalPorcentagem.toFixed(2)+"%"}</span> da sua renda, que representa <span class="cor-dinamica font-weight-bold">${formatBRL.format(despesaSoma)}</span>
            e assim te enquadramos no perfil <h4 class="font-weight-bold">POUPADOR!</h4>`);
            $("#conteudo-perfil-financeiro-p2").
            html("O poupador é alguém que planeja os seus gastos pensando no futuro. Diferentemente do devedor, esse perfil realmente decide praticar dicas de economia e fazer sobrar dinheiro. Com isso, ele adota hábitos de consumo controlado e monta uma reserva com os valores que poupa mensalmente.");
        }
        //gastador
        if(despesaSomaTotalPorcentagem >= 70 && despesaSomaTotalPorcentagem <=99)
        {
            $("#conteudo-perfil-financeiro-p1").empty();
            $("#conteudo-perfil-financeiro-p2").empty();
            $("#conteudo-perfil-financeiro-p1").
            html(`Você gastou equivalente a <span class="cor-dinamica font-weight-bold">${despesaSomaTotalPorcentagem.toFixed(2)+"%"}</span> da sua renda, que representa <span class="cor-dinamica font-weight-bold">${formatBRL.format(despesaSoma)}</span>
            e assim te enquadramos no perfil <h4 class="font-weight-bold">GASTADOR!</h4>`);
            $("#conteudo-perfil-financeiro-p2").
            html("O gastador também tem um custo de vida alto, mas, diferentemente do perfil devedor, ele não contrai dívidas. Isso significa que pessoas com essa característica costumam não ter controle sobre os seus custos mensais, embora mantenham o cuidado de não gastar mais do que recebem.");
        }
        //devedor
        if(despesaSomaTotalPorcentagem >= 100)
        {
            $("#conteudo-perfil-financeiro-p1").empty();
            $("#conteudo-perfil-financeiro-p2").empty();
            $("#conteudo-perfil-financeiro-p1").
            html(`Você gastou equivalente a <span class="cor-dinamica font-weight-bold">${despesaSomaTotalPorcentagem.toFixed(2)+"%"}</span> da sua renda, que representa <span class="cor-dinamica font-weight-bold">${formatBRL.format(despesaSoma)}</span>
            e assim te enquadramos no perfil <h4 class="font-weight-bold">DEVEDOR!</h4>`);
            $("#conteudo-perfil-financeiro-p2").
            html("As pessoas com esse perfil financeiro não vivem uma relação saudável com o dinheiro. Elas não conseguem administrar as suas finanças mensais e acabam constantemente precisando de uma renda extra para custear os gastos. Assim, pedem empréstimos e contraem dívidas com bancos ou familiares.");
        }

        //cor dinamica para a porcentagem
        if(despesaSomaTotalPorcentagem < 100)
        {
            $('.cor-dinamica').addClass('text-success');
            $('.cor-dinamica').removeClass('text-danger');
        }
        if(despesaSomaTotalPorcentagem > 100)
        {
            $('.cor-dinamica').addClass('text-danger');
            $('.cor-dinamica').removeClass('text-success');
        }

        // distribuir os resultados total
        $('#despesaSomaTotalPorcentagem').html(despesaSomaTotalPorcentagem.toFixed(2)+"%");

        $('#despesaSomaPorcentagem1').html(despesaSomaPorcentagem1.toFixed(2)+"%");
        $('#despesaSomaPorcentagem2').html(despesaSomaPorcentagem2.toFixed(2)+"%");
        $('#despesaSomaPorcentagem3').html(despesaSomaPorcentagem3.toFixed(2)+"%");
        $('#despesaSomaPorcentagem4').html(despesaSomaPorcentagem4.toFixed(2)+"%");
        $('#despesaSomaPorcentagem5').html(despesaSomaPorcentagem5.toFixed(2)+"%");
        $('#despesaSomaPorcentagem6').html(despesaSomaPorcentagem6.toFixed(2)+"%");

        $("#despesaSomaPorcentagem1ProgressBar").css("width", despesaSomaPorcentagem1.toFixed(2)+"%");
        $("#despesaSomaPorcentagem2ProgressBar").css("width", despesaSomaPorcentagem2.toFixed(2)+"%");
        $("#despesaSomaPorcentagem3ProgressBar").css("width", despesaSomaPorcentagem3.toFixed(2)+"%");
        $("#despesaSomaPorcentagem4ProgressBar").css("width", despesaSomaPorcentagem4.toFixed(2)+"%");
        $("#despesaSomaPorcentagem5ProgressBar").css("width", despesaSomaPorcentagem5.toFixed(2)+"%");
        $("#despesaSomaPorcentagem6ProgressBar").css("width", despesaSomaPorcentagem6.toFixed(2)+"%");
        
    });
});


$(function() {
    $('#saldo').maskMoney();
})