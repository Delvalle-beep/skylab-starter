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

    console.log(maiores);