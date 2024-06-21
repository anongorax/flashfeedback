import { NextResponse } from 'next/server';
import db from '../../../lib/firebase-admin';

export async function GET() {
  const sitesRef = db.collection('sites');
  const snapshot = await sitesRef.get();
  if (snapshot.empty) {
    console.log('No such document!');
  }
  const sites = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return NextResponse.json({ sites });
}
