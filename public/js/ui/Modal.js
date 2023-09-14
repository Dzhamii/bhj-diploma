class Modal {
  constructor(element) {
    if (!element) {
      throw new Error("Элемент не передан");
    }
    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    const dismissButtons = this.element.querySelectorAll('[data-dismiss="modal"]');

    dismissButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.onClose();
      });
    });
  }

  onClose() {
    this.close();
  }

  open() {
    this.element.style.display = "block";
  }

  close() {
    this.element.style.display = '';
  }
}
