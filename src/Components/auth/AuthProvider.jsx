import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { http } from './http';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;
 
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await http.get("/auth/user/dashboard"); // must exist and return { statusCode, data: user }
        if (!mounted) return;

        // normalize user from different possible shapes
        const u = res.data?.data || res.data?.user || null;
        setUser(u);
      } catch {
        if (mounted) setUser(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const login = async (credentials) => {
    const res = await axios.post('/auth/user/login', credentials, { withCredentials: true });
    const u = res.data?.data?.user || res.data?.user || null;
    setUser(u);
    return u;
  };

  const logout = async () => {
  try {
    await axios.post('/auth/user/logout', {}, { withCredentials: true });
  } catch (err) {
    // Optionally log:
    console.warn('Logout failed (ignored):', err);
  }
  setUser(null);
};

  const isLoggedIn = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext};