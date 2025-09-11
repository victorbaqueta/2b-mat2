function criaCartao(categoria, pergunta, resposta) {

    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `   
     <div class="cartao__conteudo">
                    <h3>Animais</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Qual a principal diferença entre um Camelo e o Dromedário?</p>
                    <div class="cartao__conteudo__resposta">
                       <p>A principal diferença é o número de corcovas: o camelo tem duas corcovas, enquanto o dromedário tem apenas uma. </p>
                    </div>
                </div>`



                container.appendChild(cartao)
}