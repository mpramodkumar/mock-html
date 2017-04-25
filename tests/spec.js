module.exports = {
  tags: [
    'blockchain',
    'bcts',
    'trade',
    'supply chain finance',
    'decentralized app',
  ],

  before: function(browser) {
    console.log('Setting up...');
    browser.url('http://localhost:3000');
  },

  after: function(browser) {
    browser.end();
    console.log('Closing down...');
  },

  'body visible': function(client) {
    client.waitForElementVisible('body', 5000);
  },

  'has all the required links in left nav': function(client) {
    var reqNavLinks = new Array(
      'Overview',
      'Industry Players',
      'Competitive Analysis',
      'Industry Articles',
      'Technical Articles',
      'Glossary',
      'Implementation',
      'Code Spikes'
    );

    reqNavLinks.forEach(function(navLink) {
      client.expect.element(navLink, 'link text').to.be.present;
    });
  },
 
  'Test for Glossary': function (client) {
   client.expect.element('Glossary', 'link text').to.be.present;
  },

  'Test for Glossary tab click': function (client) {
   client.click('link text', 'Glossary');
   client.expect.element('#tab6 h2', 'css selector').text.to.contain('Glossary');
  },

  'Test for Competitive Analysis tab click': function (client) {
    client.click('link text', 'Competitive Analysis');
    client.expect.element('#tab3 h2', 'css selector').text.to.contain('Competitive Analysis');
  },

  'Test for Industry Players tab': function (client) {
    client.expect.element('Industry Players', 'link text').to.be.present;
  },

  'Test for Industry players tab click': function (client) {
    client.click('link text', 'Industry Players');
    client.expect.element('#tab2 h2', 'css selector').text.to.contain('Industry Players');
  },

  'Test for Technical articles tab': function(client) {
   client.expect.element('Technical Articles', 'link text').to.be.present;
  },

 'Test for Technical articles tab click': function(client) {
   client.click('link text', 'Technical Articles');
   client.expect.element('#tab5 h2', 'css selector').text.to.contain('Technical articles');
  },
  
  // Test Case for Industry Articles
 'Test for Industry Articles tab': function (client) {
   client.expect.element('Industry Articles', 'link text').to.be.present;
  },

 'Test for Industry Articles tab click': function (client) {
   client.click('link text', 'Industry Articles');
   client.expect.element('#tab4 h2', 'css selector').text.to.contain('Industry Articles');
  },

  'Test for Overview tab': function (client) {
    client.expect.element('Overview', 'link text').to.be.present;
  },

  'Test for Overview tab click': function (client) {
    client.click('link text', 'Overview');
    client.expect.element('#tab1 h2', 'css selector').text.to.contain('Overview');
  },

  'Test for Implementation link': function(client) {
    client.expect.element('Implementation', 'link text').to.be.present;
  },

  'Test for Implementation link click': function(client) {
    client.click('link text', 'Implementation');
    client.expect.element('#tab7 h2', 'css selector').text.to.contain('Implementation');
  }

}

