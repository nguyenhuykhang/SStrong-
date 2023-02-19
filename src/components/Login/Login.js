import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { authentication, db } from '../../firebase/config';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useNavigate  } from 'react-router-dom'; 
import { collection, addDoc } from "firebase/firestore"; 
import { query, where, getDocs } from 'firebase/firestore';
import './login.css'


const { Title } = Typography;


// const googleProvider = new firebase.auth.GoogleAuthProvider();
const provider = new FacebookAuthProvider();
export default function Login() {
    const [namee, setNamee] = React.useState("")
    const handleLogin = async()=> {
        // const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
        .then ((result) => {
          const user = result.user;
          setNamee(user.displayName)
        })
        
    };

    // let navigate = useNavigate();
    // authentication.onAuthStateChanged((user)=>{
    //     console.log({user});
    //     if (user) {
    //       navigate('/message')
    //     }
    // });

//   const handleLogin = async (provider) => {
//     const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

//     if (additionalUserInfo?.isNewUser) {
//       addDocument('users', {
//         displayName: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//         uid: user.uid,
//         providerId: additionalUserInfo.providerId,
//         keywords: generateKeywords(user.displayName?.toLowerCase()),
//       });
//     }
//   };

  return (
    <>
    <div style={{height: "50px", backgroundColor: "#FEBE10"}}></div>
    <div className='login'>
      
      <h2 style={{ color: "white"}} >Welcome! {namee}</h2> 
      <Row justify='center' style={{ height: 400}}>
        <Col span={8}>
          <Title style={{ textAlign: 'center', color: "white" }} level={3}>
            Log In To Continue
          </Title>
          <Button
            style={{ width: '100%', marginBottom: 5 }}
            // onClick={() => handleLogin(googleProvider)}
          >
            Log in by Google
          </Button>
          <Button
            style={{ width: '100%' }}
            onClick={handleLogin}
          >
            Log in by Facebook
          </Button>
        </Col>
      </Row>
    </div>
    </>
  );
}
