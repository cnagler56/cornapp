import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap'
import {auth} from './Slices/loginslice'
import Register from './Register.js'


const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const { status, error, user } = useSelector((state) => state.auth);
 

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(auth({ email, password })).unwrap();
      if (result.token) navigate('/');
    } catch (err) {
      setErrMsg(err || 'Login failed.');
    }
  };

  return (
    <div className="contain">
      <Form onSubmit={handleSubmit}>
        <Form.Group style={{ marginBottom: '40px' }}>
          <Form.Label style={{ fontWeight: 'bold', marginTop: '40px' }}>Email</Form.Label>
          <Form.Control
            style={{ minWidth: '100%' }}
            ref={userRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="boxsize"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
          <Form.Control
            className="boxsize"
            style={{ minWidth: '100%' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="buttons" style={{ padding: '5px', marginTop: '25px' }}>
          <Button
            disabled={!email || !password || status === 'loading'}
            style={{ marginBottom: '25px' }}
            type="submit"
            className="btn btn-success"
          >
            {status === 'loading' ? 'Logging in...' : 'Submit'}
          </Button>
          <Register></Register>
        </div>
        {errMsg && <div style={{ color: 'red' }}>{errMsg}</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {user && <div>Welcome, {user.name}!</div>}
      </Form>
    </div>
  );
};

export default Signin;
