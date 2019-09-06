const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

var client_id = '1839dedb5bf743759b95209fa90c7382'; // Your client id
var client_secret = '05a7bf37b614492790b3c679944b5cce'; // Your secret
var redirect_uri = 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'; // Your redirect uri

const expect = chai.expect;

describe('First Api Tests', () => {
});

it('Consume GET Service', async () => {
    const query = {
        client_id = '1839dedb5bf743759b95209fa90c7382',
        response_type='code',
        redirect_uri = 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'
      };
    const response = await agent.get('https://accounts.spotify.com/authorize').query(query);
  
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  });

