import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import { FormattedUser } from '@/lib/auth';

export function createUser(uid: string, data: FormattedUser) {
  return setDoc(doc(db, 'user', uid), { ...data, uid }, { merge: true });
}
