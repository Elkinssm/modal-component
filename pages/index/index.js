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
  handleCloseModal() {
    this.setData({
      modalVisible: false
    });
  },
  onPrimaryButtonTap() {
    console.log("Aceptar");
    this.setData({
      modalVisible: false
    });
  },
  onSecondaryButtonTap() {
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
  handleCloseModalOne() {
    this.setData({
      modalVisibleOne: false
    });
  },
  onPrimaryButtonTapOne() {
    console.log("Aceptar");
    this.setData({
      modalVisibleOne: false
    });
  }
});
