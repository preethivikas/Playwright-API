import{test,expect} from '@playwright/test';

//POST API Request using Static Request Body

test('Post using static request body',async({request})=>{
   
//const postresponse=await request.post('https://petstore.swagger.io/v2/store/order',
const postresponse=await request.post('/store/order',
    {
      data: {
         "id": 0,
  "petId": 1,
  "quantity": 1,
  "shipDate": "2026-02-09T16:37:10.663Z",
  "status": "placed",
  "complete": true
        
      }
    }
)
    
  expect(postresponse.status()).toBe(200);
  expect(postresponse.ok()).toBeTruthy();
  const postresponsebody=await postresponse.json();
  console.log(postresponsebody);
 expect(postresponsebody).toHaveProperty("petId",1);
 expect(postresponsebody).toHaveProperty("status","placed");

})