import React from "react";

function NewPost() {
  return (
    <div className="new-post">
      <h2>Inserir novo Post: </h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o título"
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
}

export default NewPost;
