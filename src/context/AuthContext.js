import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../database/supabaseClient';

// context that will carry data
const AuthContext = createContext();

// anything inside children can read authorisation data
export function AuthProvider({ children }) {

  // state to hold current user object
  const [user, setUser] = useState(null);

  // state for if we are figuring out authorisation
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // ask supabase for the current session
    const session = supabase.auth.getSession().then(({ data }) => {

      // store the user or store null
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // check to see if user logs in or out
    // a subscription - if an event happens, supabase gives a new session
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // unsubscribe when useEffect is done
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);


  return (
    // user/null and whether authorisation state is still being determined
    <AuthContext.Provider value={{ user, loading }}> 
      {children}
    </AuthContext.Provider> // comes from createContest()
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
