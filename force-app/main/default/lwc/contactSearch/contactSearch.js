import { LightningElement } from 'lwc';

export default class ContactSearch extends LightningElement {
  searchResults = [];

  onClickSearch() {
    const searchTerm = this.refs.input.value;

    if (typeof searchTerm !== 'string') return;
    if (searchTerm.length < 2) return;

    // TODO: Call your AuraEnabled Method to execute a search and store the results
  }

  // Bonus: Disable the Search button when the input is less than 2 characters
}