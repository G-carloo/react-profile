import MyForm from "./Form";

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalToggle: props.show,
    };
  }
  render() {
    if (this.state.modalToggle) {
      return (
        <div>
          <div className='ModalContainer'>
            <MyForm />
          </div>
        </div>
      );
    }
  }
}
