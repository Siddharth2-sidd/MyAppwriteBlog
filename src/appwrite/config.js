import conf from "../conf/conf";
import { Client, Databases, Storage, ID, Query } from "appwrite";
class Services{
    client  = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases  = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

     async createPost({title, slug,  featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title, content, featuredImage, status}
            );
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug
            )
            return true;
        } catch (error) {
            console.log("App write database deletePost error: "+error);
            
        }
    }

    async getPost(slug) {
    try {
        const response = await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        );
        return response; // ✅ return the actual document data
    } catch (error) {
        console.log("Appwrite getPost error:", error);
        return null; // ❌ return null, not false (more conventional)
    }
}

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
            
        } catch (error) {
            console.log("App write database getPosts error:"+error)
            return false;
        }
    }


    async uploadFile(file){
         //await this.bucket.createStorage(conf.appwriteBuketId, ID.unique(), file)
            try{
                 return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
            }catch(err){
                console.log("appwrite uploadFile error: "+err);
                return false;
            }
    }


    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        }catch(err){
            console.log("Appwrite deleteFile error: "+err);
            return false;
        }
    }

    getFilePrev(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }
}

const services = new Services();
export default services;