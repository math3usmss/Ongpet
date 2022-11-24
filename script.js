/*chat*/
function digitar(){
    var tela = document.getElementById('area_mensagem')
    var mensagem = document.getElementById("barra_texto").value;
    var elemento = document.createElement('p');
    elemento.textContent = mensagem;
    tela.appendChild(elemento);
    document.getElementById('barra_texto').value = " "
  }
  function abrir_chat(){
    var campo = document.getElementById('campo');
    campo.style.display = 'inline-block'
    var botao = document.getElementById("abrir");
    botao.style.display = 'none'
  }
  function fechar(){
     var campo = document.getElementById('campo');
      campo.style.display = 'none'
      var botao = document.getElementById("abrir");
        botao.style.display = 'inline-block'
  }

/*detalhes consulta*/
function consulta(){
    var doutor = document.getElementById('detalhes');
    doutor.style.display = 'inline-block'
}
function sairConsulta(){
    var doutor = document.getElementById('detalhes');
    doutor.style.display = 'none'
}

/*marcar consulta*/
    function aparecerConsulta(){
        var perfil = document.getElementById('perfil');
        perfil.style.display = 'none'
        
        var marcar = document.getElementById('marcacao');
        marcar.style.display = 'inline-block'
        
        var botao = document.getElementById('botao_voltar');
        botao.style.display = 'inline-block' 
    }
    function marcar_consulta(){
        var resposta_endereco = document.getElementById('endereco_marcar').value;
        var endereco = document.getElementById('endereco').innerHTML = 'Endereço: ' + resposta_endereco;
        
        var resposta_data = document.getElementById('data_marcar').value;
        var data = document.getElementById('data').innerHTML = resposta_data;
     
        var resposta_descricao = document.getElementById('descricao_marcar').value;
        var descricao = document.getElementById('descricao').innerHTML = 'Descrição: ' + resposta_descricao;

        var resposta_doutor = document.getElementById('doutor_marcar');
        var selecionado = resposta_doutor.options[resposta_doutor.selectedIndex].text;
        var doutor = document.getElementById('doutor').innerHTML = selecionado;

        var ja_marcada = document.getElementById('consulta_ja_marcada');
        ja_marcada.style.display = 'inline-block'

        var area_marcar = document.getElementById('marcacao');
        area_marcar.style.display = 'none'

        var perfil = document.getElementById('perfil');
        perfil.style.display = 'inline-block'

        var botao = document.getElementById('botao_voltar');
        botao.style.display = 'none' 
    }
    function voltar_normal(){
        var area_marcar = document.getElementById('marcacao');
        area_marcar.style.display = 'none'

        var perfil = document.getElementById('perfil');
        perfil.style.display = 'inline-block'

        var botao = document.getElementById('botao_voltar');
        botao.style.display = 'none' 
    }