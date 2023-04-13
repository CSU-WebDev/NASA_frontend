beforeEach(() => {
  cy.intercept('https://nasa-backend.onrender.com/npod' , {fixture: 'poddata.json'})
  cy.visit('http://localhost:3000/pod')
})
it('testing pod elements', () => {    
 cy.url().should('include', '/pod')
 //Since data changes daily, test cases would change too
 cy.get('.App-header h1').should('have.text', "NGC 206 and the Star Clouds of Andromeda")
 //cy.fixture('http://localhost:3000/pod').as(poddata.json)
 cy.get('p').should('have.text', '2023-04-12The large stellar association cataloged as NGC 206 is nestled within the dusty arms of the neighboring Andromeda galaxy along with the galaxy\'s pinkish star-forming regions. Also known as M31, the spiral galaxy is a mere 2.5 million light-years away. NGC 206 is found right of center in this sharp and detailed close-up of the southwestern extent of Andromeda\'s disk. The bright, blue stars of NGC 206 indicate its youth. In fact, its youngest massive stars are less than 10 million years old. Much larger than the open or galactic clusters of young stars in the disk of our Milky Way galaxy, NGC 206 spans about 4,000 light-years. That\'s comparable in size to the giant stellar nurseries NGC 604 in nearby spiral M33 and the Tarantula Nebula in the Large Magellanic Cloud.©')
 //cy.get('img').find()
})