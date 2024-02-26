import { LightningElement, api } from 'lwc';

export default class ContactSearchResult extends LightningElement {
  @api contact

  get name() {
    return `${this.contact.FirstName} ${this.contact.LastName}`;
  }

  get phone() {
    return `${this.contact.Phone}`;
  }

  get email() {
    return `${this.contact.Email}`;
  }

  onClickSelect() {
    // TODO: When the icon button is clicked,
    // publish an event that selectedContact can subscribe to.
    // The payload for the event is contact.Id.
    // Hint: You will need to import a saleforce module to do this
  }
}
