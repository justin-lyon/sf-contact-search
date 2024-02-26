import { LightningElement, api } from 'lwc';

export default class SelectedContact extends LightningElement {
  @api contact;

  get name() {
    return `${this.contact?.FirstName} ${this.contact?.LastName}`;
  }
}