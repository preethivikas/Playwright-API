import{test,expect} from '@playwright/test';

test('Get Request', async ({request})=>{
    const getResponse=await request.get('https://petstore.swagger.io/v2/store/inventory')
    await expect(getResponse.status()).toBe(200);
})