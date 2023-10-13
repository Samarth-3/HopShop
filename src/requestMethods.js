import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN="myJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjI4MjIwNTNjYzZjOTlmODdlMzU2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTc1NjU4MiwiZXhwIjoxNjkwMTg4NTgyfQ.nUgrH4wnaaz_C22qolur6pCgQznIvIK29DLipJJYpiw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
