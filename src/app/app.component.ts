import { Component, OnInit } from '@angular/core';
import { WebAPI } from './services/api.service';
import { MatDialog } from '@angular/material';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [WebAPI]
})
export class AppComponent implements OnInit {
  pokemons = [];
  pokemonPictureLink = `https://veekun.com/dex/media/pokemon/dream-world/`;
  searchQuery = '';
  limit = 12;
  offset = 0;
  activeProgress = false;
  error = null;

  constructor(private webAPI: WebAPI, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemon(search) {
    this.activeProgress = true;
    this.webAPI.getPokemon(search)
      .subscribe(pokemon => {
        this.activeProgress = false;
        pokemon['picture'] = `${this.pokemonPictureLink}${pokemon['id']}.svg`;
        this.showPokemonInfo(pokemon);
        this.searchQuery = '';
        this.error = null;
      }, error => {
        this.activeProgress = false;
        this.searchQuery = '';
        this.error = error;
      });
  }

  getPokemons(offset?) {
    this.activeProgress = true;
    this.error = null;
    const options = {
      limit: 12,
      offset: offset ? offset : 0
    };
    return this.webAPI.getPokemonsList(options)
      .subscribe(items => {
        console.log(items);
        items['objects'].map((pokemon) => {
          pokemon.picture = `${this.pokemonPictureLink}${pokemon.national_id}.svg`;
          this.pokemons.push(pokemon);
        });
        this.offset += this.limit;
      },
        () => { },
        () => {
          this.activeProgress = false;
        });
  }

  showPokemonInfo(pokemon) {
    this.error = null;
    this.dialog.open(PokemonDialogComponent, {minWidth: '400px', data: pokemon});
  }

  loadMore() {
    this.getPokemons(this.offset);
  }

  closeAlert() {
    this.error = null;
  }
}
