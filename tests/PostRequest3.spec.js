import {test, expect} from '@playwright/test';
import {faker} from '@faker-js/faker'; 
//import { DateTime } from 'luxon';

// POST API Request using Dynamic Request Body
test('POST API Request using Dynamic Request Body', async ({request}) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const phone = faker.phone.number();
    const fullName = faker.person.fullName();
   // const currentDateTime = DateTime.now().toISO(); // Get current date and time in ISO format

    const postresponse=await request.post('user',{
       data : {
          "id": 0,
          "username": fullName,
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
          "phone": phone,
          "userStatus": 0
        

    }
}
    
)})



