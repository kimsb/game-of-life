# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life "Wikipedia")

###### Denne workshoppen er inspirert av implementasjonen i ankr's [jsfiddle](http://jsfiddle.net/ankr/tgjLA/)

## Lets go!

- Åpne filen `index.html` i en nettleser.

- Aller først må vi lage rutenettet vårt. Start i `init()`-metoden med å fylle `cells` som en to-dimensjonell array av verdien `0`.

<details>
  <summary>eksempel</summary>
    
  ```javascript
  for (let x = 0; x < xCount; x++) {
      cells[x] = [];
      for (let y = 0; y < yCount; y++) {
        cells[x][y] = 0;
      }
    }
  ```
  
</details>

- Deretter må vi gi noen celler liv, så vi har et utgangspunkt for spillet vårt. 
Fortsett i init()`-metoden`med å gi celler liv, ved å gi dem verdien `1`.

<details>
  <summary>eksempel med en <i>Gosper glider gun<i></summary>
    
  ```javascript
  [
      // Gosper glider gun
      [1, 5], [1, 6], [2, 5], [2, 6], [11, 5], [11, 6], [11, 7], [12, 4], [12, 8], [13, 3], [13, 9], [14, 3], [14, 9], [15, 6], [16, 4], [16, 8], [17, 5], [17, 6], [17, 7], [18, 6], [21, 3], [21, 4], [21, 5], [22, 3], [22, 4], [22, 5], [23, 2], [23, 6], [25, 1], [25, 2], [25, 6], [25, 7], [35, 3], [35, 4], [36, 3], [36, 4],
  ]
      .forEach(function (point) {
        cells[point[0]][point[1]] = 1;
      });
  ```
  
</details>

- Neste steg blir å finne ut hvor mange levende naboer hver enkelt celle har. 
Dette kan implementeres i metoden `countNeighbours(x, y)`

<details>
  <summary>eksempel</summary>
    
  ```javascript
  let amount = 0;

  function isFilled(x, y) {
        return cells[x] && cells[x][y];
      }
  
  if (isFilled(x - 1, y - 1)) amount++;
  if (isFilled(x, y - 1)) amount++;
  if (isFilled(x + 1, y - 1)) amount++;
  if (isFilled(x - 1, y)) amount++;
  if (isFilled(x + 1, y)) amount++;
  if (isFilled(x - 1, y + 1)) amount++;
  if (isFilled(x, y + 1)) amount++;
  if (isFilled(x + 1, y + 1)) amount++;

  return amount;
  ```
  
</details>

#### **Conway's game of life** har fire enkle regler:

1. Hver levende celle med mindre enn to levende naboer dør, som ved underbefolkning.
2. Hver levende celle med to eller tre levende naboer, overlever til neste generasjon.
3. Hver levende celle med mer enn tre levende naboer dør, som ved overbefolkning.
4. Hver døde celle med akkurat tre levende naboer blir levende, som ved reproduksjon.

- Nå som vi har en startkonfigurasjon, må vi implementere disse reglene for hvilke celler som skal leve i neste generasjon.
Sagt på en enkel måte vil alle levende celler som har to eller tre levende naboer overleve, 
og hver døde celle med akkurat tre levende celler vil bli levende. Alle andre celler dør.
I metoden `update()` må vi gå gjennom alle cellene og oppdatere dem, basert på hvor mange levende naboer de har.
Husk å ikke oppdatere `cells` før du har gått gjennom alle cellene.

<details>
  <summary>eksempel</summary>
    
  ```javascript
  let result = [];

  cells.forEach(function (row, x) {
      result[x] = [];
      row.forEach(function (cell, y) {
        let alive,
        count = countNeighbours(x, y);
  
        if (cell > 0) {
          alive = count === 2 || count === 3 ? 1 : 0;
        } else {
          alive = count === 3 ? 1 : 0;
        }
  
        result[x][y] = alive;
      });
    });
  
    cells = result;
  ```
  
</details>

## Voilá!
#### Nå har du en kjørende versjon av *Conway's Game of Life! Her er noen eksempler på hvordan du kan leke deg videre:

- Legg til flere elementer i startkonfigurasjonen.
- Øk størrelsen på brettet. (Om du gjør brettet tilstrekkelig stort må du begynne å tenke litt smartere på hvordan hver celle representeres...)
- Knytt sammen brettets venstre/høyre side og oppe/nede, slik at celler som går utenfor brettet dukker opp på andre siden av brettet.

## Annen moro:

- [Click-&-Play-variant](https://bitstorm.org/gameoflife/) hvor du kan trykke på hvilke celler som skal være levende
- [Chrome extension](https://github.com/yuanchuan/game-of-life) som lar deg spille Game of Life på Githubs contribution board
- [YouTube-video](https://www.youtube.com/watch?v=68nEX5CEmZE) av en implementasjon som printer ut primtall fra 2 - 37
- [YouTube-video](https://www.youtube.com/watch?v=vGWGeund3eA) som viser Game of Life som logiske porter
