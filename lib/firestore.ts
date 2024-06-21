import { setDoc, doc, addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { FormattedUser } from '@/lib/auth';
import { Site } from '@/components/Modal';

export function createUser(uid: string, data: FormattedUser) {
  return setDoc(doc(db, 'user', uid), { ...data, uid }, { merge: true });
}

export function createSite(data: Site) {
  return addDoc(collection(db, 'sites'), data);
}
