import firebase from './config';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot){
   if(!snapshot.exists) return undefined;
   const data = snapshot.data();
   return {
      ...data,
      id : snapshot.id
   }
}

export function getEventsFromFirestore(observer){
   return db.collection('shopItems').onSnapshot(observer);
}