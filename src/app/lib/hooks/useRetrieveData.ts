"use client";

import { useQuery } from "@tanstack/react-query";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/app/lib/config/firebaseConfig";
import type { FirebaseStorage } from "@firebase/storage";
import { getStorage } from "@firebase/storage";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app); // Ensure correct type

export const fetchFirestoreDocument = async (
  collectionPath: string,
  documentId: string,
) => {
  const docRef = doc(db, collectionPath, documentId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error(
      `Document "${documentId}" not found in "${collectionPath}"`,
    );
  }

  return docSnap.data();
};

export function useFirestoreQuery(
  collectionPath: string,
  documentId: string,
  queryKey: string,
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchFirestoreDocument(collectionPath, documentId),
    staleTime: Infinity,
    gcTime: 30 * 60 * 1000,
  });
}
