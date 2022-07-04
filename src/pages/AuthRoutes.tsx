import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export interface IAuthRoute {}

const AuthRoutes: React.FunctionComponent<IAuthRoute> = (props: any) => {
  const { children } = props;
  const auth = getAuth();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      navigate("/");
    }
  });

  useEffect(() => {
    AuthCheck();

    return () => {
      AuthCheck();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  return <>{children}</>;
};

export default AuthRoutes;
