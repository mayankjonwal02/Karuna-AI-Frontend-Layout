import { create } from 'zustand';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  PhoneAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  // Add your Firebase config here
};

initializeApp(firebaseConfig);
const auth = getAuth();

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithPhone: (phoneNumber: string) => Promise<void>;
  signInAsGuest: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  signIn: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  signOut: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  signInWithPhone: async (phoneNumber: string) => {
    try {
      set({ isLoading: true, error: null });
      const provider = new PhoneAuthProvider(auth);
      // Handle phone authentication flow
      set({ isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  signInAsGuest: async () => {
    try {
      set({ isLoading: true, error: null });
      const userCredential = await signInAnonymously(auth);
      set({ user: userCredential.user, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));