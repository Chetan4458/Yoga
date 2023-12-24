import React, { Component } from "react";
// importing all of these classes from reactstrap module
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

// build a class base component
class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  // changes handler to check if a checkbox is checed or not
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  // rendering modal in the custommodal class received toggle and on save as props,
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Task Item </ModalHeader>
        <ModalBody>
        
          <Form>

            {/* 3 formgroups
            1 title label */}
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Name"
              />
            </FormGroup>

            {/* 2 description label */}
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="integer"
                name="age"
                value={this.state.activeItem.age}
                onChange={this.handleChange}
                placeholder="Enter Age"
              />
            </FormGroup>
            {/* 3 formgroups batch */}
            <FormGroup>
              <Label for="batch">Batch</Label>
              <Input type="select" name="batch" id="exampleSelect" value={this.state.activeItem.batch}
                onChange={this.handleChange}
                placeholder="Select Batch">
                <option>6-7AM</option>
                <option>7-8AM</option>
                <option>8-9AM</option>
                <option>5-6PM</option>
                </Input>
            </FormGroup>
            {/* 3 completed label */}
            <FormGroup check>
              <Label for="paid">
                <Input
                  type="checkbox"
                  name="paid"
                  checked={this.state.activeItem.paid}
                  onChange={this.handleChange}
                />
                Paid
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        {/* create a modal footer */}
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default CustomModal