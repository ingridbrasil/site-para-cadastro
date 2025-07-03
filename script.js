function showSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  function validarConsumidor() {
    alert("Consumidor cadastrado com sucesso!");
    return false;
  }
  
  function validarVendedor() {
    alert("Vendedor cadastrado com sucesso!");
    return false;
  }
  
  let produtos = [];
  
  function adicionarProduto(event) {
    event.preventDefault();
    const nome = document.getElementById("nomeProduto").value;
    const descricao = document.getElementById("descricaoProduto").value;
    const preco = document.getElementById("precoProduto").value;
    const prazo = document.getElementById("prazoProduto").value;
    const foto = document.getElementById("fotoProduto").value;
    const disponivel = document.getElementById("disponivelProduto").checked;
  
    const produto = { nome, descricao, preco, prazo, foto, disponivel };
    produtos.push(produto);
    atualizarListaProdutos();
    document.getElementById("formProduto").reset();
  }
  
  function atualizarListaProdutos() {
    const lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";
  
    produtos.forEach((produto, index) => {
      const item = document.createElement("div");
      item.innerHTML = `
        <img src="${produto.foto}" alt="${produto.nome}" width="100">
        <p><strong>${produto.nome}</strong> - R$ ${produto.preco}</p>
        <p>${produto.descricao}</p>
        <p>Prazo: ${produto.prazo}</p>
        <p>Status: ${produto.disponivel ? "Disponível" : "Indisponível"}</p>
        <button onclick="editarProduto(${index})">Editar</button>
        <button onclick="excluirProduto(${index})">Excluir</button>
        <hr>
      `;
      lista.appendChild(item);
    });
  }
  
  function editarProduto(index) {
    const p = produtos[index];
    document.getElementById("nomeProduto").value = p.nome;
    document.getElementById("descricaoProduto").value = p.descricao;
    document.getElementById("precoProduto").value = p.preco;
    document.getElementById("prazoProduto").value = p.prazo;
    document.getElementById("fotoProduto").value = p.foto;
    document.getElementById("disponivelProduto").checked = p.disponivel;
    produtos.splice(index, 1);
    atualizarListaProdutos();
  }
  
  function excluirProduto(index) {
    produtos.splice(index, 1);
    atualizarListaProdutos();
  }
  