import { Component, OnInit } from '@angular/core';
import { Produto } from '../Models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

}
export class Tab1Page implements OnInit {

  listaProdutos: Produto[]=[];
  produto?: Produto;
  id: number = 0;
  // para buscar dados da API, depois de criar o serviço,
  //  temos que instanciar em uma variavel o serviço criado
  constructor(private produtoService: ProdutoService) {}

  // Criar os metodos que conversam com a api

  buscarProduto(){
    //Primeiro chamamos o metodo do serviço
    //Depois adicionamos o subscribe para receber
    //a resposta qunado ela chegar

    // adicionamos uma variavel que guarda o retorno
    //e enviamos ela para uma funcão anonima
    // demtrp da fimcap va,ps adicionar o retorno a variavel local
    this.produtoService.getAll().subscribe(retorno =>{
    // "as usuario[]" tenta covnerter o retorno para este tipo
    this.listaProdutos = retorno as Produto[];
    console.log(this.listaProdutos)
    this.produto = undefined;
  });
  }

  buscarPorID(){
    this.produtoService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno)
      this.produto = retorno as Produto;
      this.listaProdutos = [];
    })
  }

ngOnInit(): void {
  this.buscarProduto();
}

}