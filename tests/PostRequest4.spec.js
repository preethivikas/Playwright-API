import{test,expect} from '@playwright/test';
import testdata from '../test-data/PostRequestDynamicBody.json';

//POST API Request using Dynamic JSON File as Request Body

test('Post using external json file with dynamic data as request body',async({request})=>{
    