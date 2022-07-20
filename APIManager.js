class APIManager {
  constructor() {
    this.data = {};
  }

  fetchIpsum() {
    $.ajax({
      url: `https://baconipsum.com/api/?type=all-meat&paras=1`,
      dataType: "json",
      success: (ipsumData) => {
        ipsumData = ipsumData[0];
        this.data.text = ipsumData;
      },
    });
  }

  fetchPokemon() {
    const id = Math.floor(Math.random() * 1000);
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      dataType: "json",
      success: (pokemonData) => {
        const pokemon = {
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
        };
        this.data.pokemon = pokemon;
      },
    });
  }

  fetchQuote() {
    $.ajax({
      url: "https://api.kanye.rest/",
      dataType: "json",
      success: (quoteData) => {
        this.data.quote = quoteData.quote;
      },
    });
  }

  organizeUserData(userData, i) {
    userData = userData.results[0];
    if (i === 0) {
      userData = {
        picture: userData.picture.large,
        fName: userData.name.first,
        lName: userData.name.last,
        city: userData.location.city,
        state: userData.location.state,
      };
      this.data.user = userData;
      this.data.friends = [];
    } else {
      userData = {
        fName: userData.name.first,
        lName: userData.name.last,
      };
      this.data.friends.push(userData);
    }
  }

  fetchUsers() {
    for (let i = 0; i < 10; i++) {
      $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: (fetchedData) => {
          this.organizeUserData(fetchedData, i);
        },
        error: (err) => {
          console.log(`Couldn't fitch data for the ${i + 1} person`);
          console.log(err);
        },
      });
    }
  }

  generateUser() {
    this.fetchUsers();
    this.fetchQuote();
    this.fetchPokemon();
    this.fetchIpsum();
  }

  getUserData() {
    return this.data;
  }
}
