Page({
  data: {
    modalVisible: false,
    modalVisibleOne: false
  },
  handleOpenModal() {
    this.setData({
      modalVisible: true
    });
  },
  handleClose() {
    this.setData({
      modalVisible: false,
      modalVisibleOne: false
    });
  },
  onAcceptButtonTap() {
    console.log("Aceptar");
    this.setData({
      modalVisible: false
    });
  },
  onCancelButtonTap() {
    console.log("Cancelar");
    this.setData({
      modalVisible: false
    });
  },

  handleOpenModalOne() {
    this.setData({
      modalVisibleOne: true
    });
  },

  onAcceptButtonTapOne() {
    console.log("Aceptar");
    this.setData({
      modalVisible: false
    });
  }
});
