let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá ${userLogado.nome} `

function insert(num)
    {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
    function clean()
    {
        document.getElementById('resultado').innerHTML = "";
    }
    function back()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    function calcular()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
  }


if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'https://cdpn.io/zeibarg1/debug/MWoOZOg/wQMPoGdYNdek'
}

function sair(){
  localStorage.removeItem('token')
  window.location.href = 'https://cdpn.io/zeibarg1/debug/MWoOZOg/wQMPoGdYNdek'
}