const formatarString = (contato) => {
    let {nome, email, telefone} = contato; 
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
  };
  
  
  console.log(formatarString({nome : "eloyza", email: "eloyza.mendonca@gmail.com",telefone: "84988529220"}));