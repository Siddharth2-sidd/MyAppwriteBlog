
import {Client, Account, ID } from 'appwrite';
import conf from '../conf/conf.js';
class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client);
    }

    async createAccount({email, password}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password);
            if(userAccount){
                return this.login({email, password});
            }else{
                return userAccount
            }
        }catch(error){
            throw error;
        }  
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }catch(error){
            throw error;
        }
    }

    async getUser(){
        try{
            return await this.account.get();
        }catch(error){
            throw error;
        }
    }

    async logout() {
        try {
           return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }


}

const auth  = new AuthService();
export default auth;
