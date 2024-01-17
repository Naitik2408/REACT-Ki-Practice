const conf={
    appwrite_Url:String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwrite_Project_id:String(import.meta.env.VITE_APP_PRO),
    appwrite_database_id:String(import.meta.env.VITE_APP_DATABASE_ID),
    appwrite_collection_id:String(import.meta.env.VITE_APP_COLLECTION_ID)
}
export default conf;