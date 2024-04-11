const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square'),
  },

  state: {
    moves: [],
  },

  getGameStatus(moves) {
    const p1Moves = moves.filter((move) => move.playerId === 1);
    const p2Moves = moves.filter((move) => move.playerId === 2);

    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];
    return {
      status: "in-progress ",
      winner: 1, //in-progress | complete
    };
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    //DONE
    App.$.menu.addEventListener("click", (e) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    //TODO
    App.$.resetBtn.addEventListener("click", (e) => {
      console.log("Reset the game");
    });

    //TODO
    App.$.newRoundBtn.addEventListener("click", (e) => {
      console.log("Add a new round");
    });

    //TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (e) => {
        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squaredId === squareId
          );
          return existingMove !== undefined;
        };
        if (hasMove(+square.id)) {
          return;
        }

        //Determine which player icon to add to the square
        const lastMove = App.state.moves.at(-1);
        const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
        const currentPlayer =
          App.state.moves.length === 0
            ? 1
            : getOppositePlayer(lastMove.playerId);

        const icon = document.createElement("i");

        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        App.state.moves.push({
          squaredId: +square.id,
          playerId: currentPlayer,
        });

        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;
        console.log(App.state);
        square.replaceChildren(icon);
      });
    });
  },
};

window.addEventListener("load", App.init);
