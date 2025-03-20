import { auth, db } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 

// Signup Function
export const signup = async (fullName, email, phone, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      phone,
      uid: user.uid,
      password,
    });

    console.log("✅ Signup Successful for:", email);
    return user;
  } catch (error) {
    console.error("❌ Signup Error:", error.code, error.message);
    alert(`Signup failed: ${error.message}`); // Show detailed error
    return null;
  }
};

// Login Function
export const login = async (email, password) => {
  try {
    console.log("🚀 Attempting login for:", email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Retrieve user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      console.log("✅ User data retrieved:", userDoc.data());
      return userDoc.data(); // Return user data
    } else {
      console.error("⚠️ No user data found in Firestore!");
      return null;
    }
  } catch (error) {
    console.error("❌ Login Error:", error.code, error.message);
    alert(`Login failed: ${error.message}`);
    return null;
  }
};
