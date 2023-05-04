Page({
  data: {
    customVisible: false,
    switchValue: false
  },
  handleOpen(e) {
    const { field } = e.target.dataset;
    this.setData({ [field]: true });
  },
  handleChange({ detail }) {
    this.setData({
      customVisible: detail.value
    });
  },
  handleClose() {
    this.setData({
      customVisible: false,
      switchValue: false
    });
  },
  handlePrimaryButtonTap() {
    this.handleClose();
    my.showToast({
      content: "Haga clic en Aceptar",
      duration: 1000
    });
    this.setData({
      switchValue: true
    });
  },
  handleSecondaryButtonTap() {
    this.handleClose();
    my.showToast({
      content: "Haga clic en Cancelar",
      duration: 1000
    });
    this.setData({
      switchValue: false,
      customVisible: false
    });
  }
});
