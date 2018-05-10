import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.scss']
})
export class PokemonDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemon: any) { }

  ngOnInit(): void {
    this.catchParameters(this.pokemon);
  }

  catchParameters(pokemon) {
    const actualParameters = [
      'hp',
      'id',
      'exp',
      'speed',
      'weight',
      'attack',
      'height',
      'pkdx_id',
      'defense',
      'base_experience'
    ];
    pokemon.parameters = [...actualParameters.map(item => (
      {key: item, value: pokemon[Object.keys(pokemon).find(key => key === item )]}
      )
    )];
  }

}
