class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initAuthLinks() {
    const registerButton = document.querySelector(".sidebar-menu .menu-item-register");
    const loginButton = document.querySelector(".sidebar-menu .menu-item-login");
    const logoutButton = document.querySelector(".sidebar-menu .menu-item-logout");

    registerButton.addEventListener("click", (event) => {
      event.preventDefault();
      const registerModal = App.getModal("#modal-register");
      registerModal.open();
    });

    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      const loginModal = App.getModal("#modal-login");
      loginModal.open();
    });

    logoutButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const response = await User.logout();
      if (response && response.success) {
        App.setState("init");
      }
    });
  }

  static initToggleButton() {
    const sidebarToggle = document.querySelector(".sidebar-toggle");

    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sidebar-open");
      document.body.classList.toggle("sidebar-collapse");
    });
  }
}

Sidebar.init();
