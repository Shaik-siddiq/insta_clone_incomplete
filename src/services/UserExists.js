import {firebaseApp, FieldValue} from "../lib/Firebase";

export async function doesUsernameExist(username){
    const result = await firebaseApp
    .firestore()
    .collection('users')
    .where('username','==', username)
    .get()
    return result.docs.map((user)=> user.data().length > 0);
}

export async function doesUserIdExist(userId){
    const result = await firebaseApp
    .firestore()
    .collection('user')
    .where('userId', '==', userId)
    .get()
    const user = result.docs.map((item)=>({
        ...item.data(),
        docId:item.id
    }));
    return user;
}

export async function getSuggestedProfiles (userId){
    const result = await firebaseApp.firestore().collection('users').limit(10).get();
    console.log(result);
    return result;
}
