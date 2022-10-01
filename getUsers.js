import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp();
const storage = getFirestore(app);

const usersCollection = collection(storage, "Users");
const usernameKey = "name";
const emailKey = "email";
const bioKey = "bio";
const pronounKey = "pronouns";
const typeKey = "type";
const photoKey = "photo";
const classesKey = "classes";

class UserInfoItem
{
    constructor(name, email, bio, pronouns, type, profilePic, classes);
}

async function getUsers()
{
    userItems = [];
    



    return userItems;
}