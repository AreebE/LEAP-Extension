import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp();
const storage = getFirestore(app);



const discussionsCollection = collection(storage, "Discussions");
const discussionNameKey = "name";

const messagesCollection = collection(storage, "Messages");
const contentKey = "content";
const senderIDKey = "senderID";
console.print(messagesCollection);

async function onPromote()
{
    
}

async function getConvo()