# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life "Wikipedia")

####Denne implementasjonen er inspirert av ankr's [fiddle](http://jsfiddle.net/ankr/tgjLA/)

1. Aller først må vi lage rutenettet vårt. Start i `init()`-metoden med å fylle `cells` som en to-dimensjonell array

<details>
  <summary>Spoiler - eksempel</summary>
    
  ```javascript
  for (let x = 0; x < xCount; x++) {
      cells[x] = [];
      for (let y = 0; y < yCount; y++) {
        cells[x][y] = 0;
      }
    }
  ```
  
</details>
