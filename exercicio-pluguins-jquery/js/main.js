$(document).ready(function() {
    
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00)00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Digite um email valido',
            telefone: 'Digite um telefone valido',
            cpf:'Digite um CPF Válido',
            cep: 'Digite um CEP Válido',
            endereco: 'Digite o Endereço correto'
        }
    })
})