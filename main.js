$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })
    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoDaNovaImagem = $('#url-imagem-nova').val();
        const novoIten = $('<li style="display: none;"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoIten)
        $(`<div class="imagemLink">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoIten)
        $(novoIten).appendTo('ul')
        $(novoIten).fadeIn(500)
        $('#url-imagem-nova').val('')
    })
})