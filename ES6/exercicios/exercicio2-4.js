const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   var arr = usuarios.map(function(item){
        return item.idade;
   });
   
//   Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

    const maiores= usuarios.filter(function(item){
         return item.idade>18;
    });

//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

    const busca = usuarios.find(function(item){
        return item.empresa==='Google';
    });

    const operacao=usuarios
        .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))

        .filter((item)=>item.idade<=50);

        console.log(operacao);