Component({
  props: {
    title: "",
    content: "",
    visible: false,
    onClose: () => {},
    primaryButtonText: "",
    secondaryButtonText: "",
    onPrimaryButtonTap: () => {},
    onSecondaryButtonTap: () => {},
 
  },
  methods: {
    handleClose() {
      this.props.onClose();
    },
    onPrimaryButtonTap() {
      this.handleClose();
      this.props.onPrimaryButtonTap();
    },
    onSecondaryButtonTap() {
      this.handleClose();
      this.props.onSecondaryButtonTap();
    }
  }
});
