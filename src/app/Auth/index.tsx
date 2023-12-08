import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Auth() {
  // use hooks
  const location = useLocation();
  const navigate = useNavigate();

  // constants
  const params = new URLSearchParams(location.hash.substring(1));
  // const all = Object.fromEntries(params);
  const token = params.get('access_token');

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token);
      setTimeout(() => {
        navigate('/');
      }, 100);
    } else {
      navigate('/login');
    }
  }, [navigate, token]);

  return <div>Authoring...</div>;
}

export default Auth;
