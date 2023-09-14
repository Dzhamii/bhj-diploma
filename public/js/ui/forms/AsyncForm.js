class AsyncForm {
  constructor(element) {
    if (!element) {
      throw new Error("Элемент не существует");
    }
    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    this.element.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submit();
    });
  }

  getData() {
    const formData = new FormData(this.element);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }

  onSubmit(options) {
    // Ваш код обработки данных
  }

  submit() {
    const data = this.getData();
    this.onSubmit(data);
  }
}
