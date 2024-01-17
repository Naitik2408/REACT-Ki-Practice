import conf from "../appwrite";
import { Client, Databases } from "appwrite";

export class Services {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_Url)
      .setProject(conf.appwrite_Project_id); 
      this.databases = new Databases(this.client);
  }

  async getAllDocuments(){
    try {
        return await this.databases.listDocuments(conf.appwrite_database_id,conf.appwrite_collection_id)
    } catch (error) {
        console.log('getAllDocument erros: ', error)
    }
  }
}

const services = new Services();
export default services;
