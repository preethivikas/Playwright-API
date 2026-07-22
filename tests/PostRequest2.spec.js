import{test,expect} from '@playwright/test';
import testdata from '../test-data/PostRequestBody.json';
//const testdata = require('../test-data/PostRequestBody.json');

//POST API Request using Static JSON File as Request Body

test('Post using external json file as request body',async({request})=>{
    const postresponse=await request.post('store/order',
    {
      data:testdata
    }
)
    
  expect(postresponse.status()).toBe(200);
  expect(postresponse.ok()).toBeTruthy();
  const postresponsebody=await postresponse.json();
  console.log(postresponsebody)
 expect(postresponsebody).toHaveProperty("petId",1);
 expect(postresponsebody).toHaveProperty("status","placed");

})