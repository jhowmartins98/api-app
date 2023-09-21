import { Component, OnInit } from '@angular/core';
import { Produto } from '../Models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  produto: Produto = {
    nome: '',
    email: '',
    senha: ''
  };
  confirmaSenha = '';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  salvarUsuario() {
    if (this.confirmaSenha.trim() && this.usuario.senha.trim()) {
      if (this.confirmaSenha == this.usuario.senha) {
        this.userService.salvar(this.usuario).subscribe(retorno =>{
          this.usuario = retorno;
          alert("Sucesso! Usuario:" + this.usuario.id + "foi salvo");
        });
      }
      else {
        alert("As senhas não são iguais!")
      }
    }
    else {
      alert("Os campos de senha devem ser preenchidos!")
    }
  }
}
