
/**
 * @desc - Sample App shows fectching Contact from Data API and shows on Ticket
 * sidebar
 */

$(document).ready(() => {
  app.initialized().then((_client) => { 
    const client = _client;
    client.events.on('app.activated', () => {
      getContactData(client);
    });
  }, err);

  function getContactData(client) {
    client.data.get('contact').then((data) => {
      $('#apptext').text(`Ticket created by ${data.contact.name}`);
      congratulations();
    });
  }

  function congratulations() {
    $('.content').text(`Congratulations on creating your first app`);
  }
});
