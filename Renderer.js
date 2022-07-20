class Renderer {
  runHandlebar(container, template, data) {
    $(container).empty();
    const source = $(template).html();
    const temp = Handlebars.compile(source);
    const newHTML = temp({ item: data });
    $(container).append(newHTML);
  }

  renderUser() {
    const user = currentUser.getUserData().user;
    this.runHandlebar(".user-container", "#user-template", user);
  }

  renderQuote() {
    const quote = currentUser.getUserData().quote;
    this.runHandlebar(".quote-container", "#quote-template", quote);
  }

  renderPokemon() {
    const pokemon = currentUser.getUserData().pokemon;
    this.runHandlebar(".pokemon-container", "#pokemon-template", pokemon);
  }

  renderText() {
    const text = currentUser.getUserData().text;
    this.runHandlebar(".meat-container", "#meat-template", text);
  }

  renderFriends() {
    const friends = currentUser.getUserData().friends;
    this.runHandlebar(".friends-container", "#friends-template", friends);
  }

  isUserData() {
    if (Object.keys(currentUser.getUserData()).length != 5) {
      return false;
    } else if (currentUser.getUserData().friends.length < 9) {
      return false;
    } else {
      return true;
    }
  }

  renderAgainAfter(time) {
    setTimeout(() => {
      this.render();
    }, time);
  }

  render() {
    if (this.isUserData()) {
      this.renderUser();
      this.renderQuote();
      this.renderPokemon();
      this.renderText();
      this.renderFriends();
    } else {
      this.renderAgainAfter(100);
    }
  }
}
