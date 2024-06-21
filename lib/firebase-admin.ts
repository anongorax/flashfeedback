import admin, { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = {
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    '\n'
  ),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

export default admin.firestore();
