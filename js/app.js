const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square'),
  },

  state: {
    currentPlayer: 1,

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
        console.log(`Square with id ${e.target.id} was clicked`);
        console.log(`Current player is ${App.state.currentPlayer}`);
        const icon = document.createElement("i");
        const currentPlayer = App.state.currentPlayer
        if(currentPlayer == 1){

            icon.classList.add("fa-solid", "fa-x", "yellow");
        }
        else{
            icon.classList.add("fa-solid", "fa-o", "turquoise");
            
        }
        
        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;
        event.target.replaceChildren(icon);
      });
    });
  },
};

window.addEventListener("load", App.init);
