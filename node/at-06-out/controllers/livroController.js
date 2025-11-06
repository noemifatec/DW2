// controllers/livroController.js

// Array central de livros
export const livros = [
  { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', editora: 'HarperCollins' },
  { id: 2, titulo: '1984', autor: 'George Orwell', editora: 'Companhia das Letras' },
  { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', editora: 'Geração Editorial' },
  { id: 4, titulo: 'Harry Potter', autor: 'J.K. Rowling', editora: 'Rocco' },
  { id: 5, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', editora: 'Agir' }
];

// Página inicial (home/index)
export const home = (req, res) => {
  res.render('index', { 
    livros,
    title: 'Bem-vindo à Biblioteca'
  });
};

// Catálogo de livros
export const catalogo = (req, res) => {
  res.render('catalogo', { 
    livros,
    title: 'Catálogo de Livros'
  });
};

// Lista de autores
export const autores = (req, res) => {
  const listaAutores = livros.map(l => l.autor);
  res.render('autores', { 
    listaAutores,
    livros, // caso queira mostrar informações completas
    title: 'Autores'
  });
};

// Lista de editoras
export const editoras = (req, res) => {
  const listaEditoras = livros.map(l => l.editora);
  res.render('editoras', { 
    listaEditoras,
    livros, // caso queira mostrar informações completas
    title: 'Editoras'
  });
};

export function novoLivro(req, res) {
  res.render("novoLivro"); // crie o arquivo views/novoLivro.ejs
}

export function editarLivro(req, res) {
  const livro = livros.find(l => l.id == req.params.id);
  res.render("editarLivro", { livro });
}

export function atualizarLivro(req, res) {
  const { id, titulo, autor, editora } = req.body;
  const livro = livros.find(l => l.id == id);
  if (livro) {
    livro.titulo = titulo;
    livro.autor = autor;
    livro.editora = editora;
  }
  res.redirect("/catalogo");
}

export function excluirLivro(req, res) {
  const { id } = req.params;
  const index = livros.findIndex(l => l.id == id);
  if (index !== -1) livros.splice(index, 1);
  res.redirect("/catalogo");
}




