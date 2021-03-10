import * as endPoint from './../envs/env.json';

export const API_URL = {
    login: `${endPoint.API_URL}/api/Member/login`,
    signup: `${endPoint.API_URL}/api/Member/signup`,
    member: `${endPoint.API_URL}/api/Member`,
    carPark: `${endPoint.API_URL}api/Carpark`
};