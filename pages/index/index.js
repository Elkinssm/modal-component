Page({
  data: {
    modalVisible: false
  },
  handleOpenModal() {
    this.setData({
      modalVisible: true
    });
  },
  handleClose() {
    this.setData({
      modalVisible: false
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
  }
});
