"use client";
import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInputs';
import useAuth from '../../../hooks/useAuth';
import { AuthenticationContext } from '../context/AuthContext';
import { Alert, CircularProgress } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}: {isSignin: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {signin}= useAuth();
  const{loading,data,error}=useContext(AuthenticationContext);

  const renderContent = (signinContent : string , signupContent :string) => {
    return isSignin? signinContent : signupContent
  }
  const handleChangeInput=(e:React.ChangeEvent<HTMLInputElement>) =>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })
  }
  const [inputs,setInputs]= useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    city:"",
    password:""
  });
  const [disabled,setDisabled]=useState(true);
  useEffect(() => {
    if(isSignin){
      if(inputs.password && inputs.email){
        return setDisabled(false);
      }
      else{
        if(inputs.firstName && inputs.lastName && inputs.email && inputs.city && inputs.password && inputs.phone){
          return setDisabled(false);
          
        }
      }
    }
    setDisabled(true);
  }, [inputs]);
  const handleClick= ()=>{
    if(isSignin){
      signin({email:inputs.email,password:inputs.password})
    }
  }
  return (
    <div>
      <button onClick={handleOpen} className={`${renderContent("bg-blue-400 text-white", "text-black")} border p-1 px-4 rounded mr-3`}>
      {renderContent("Sign in" , "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? <div className='py-24 px-2 h-[600] flex justify-center'> 
            (<CircularProgress/>)
            </div>: <div className="p-2 h-[600px]">
           {error ? (<Alert severity="error" className='mb-4'>{error}</Alert>) :null}
            <div className="uppercase font-bold text-center pb-2 mb-2 border-b text-black">
                <p className="text-sm">
                    {renderContent("Sign In" , "Create Account")}
                    
                </p>
            </div>
            <div className='m-auto'>
                <h2 className='text-2xl font-light text-center text-black'>
                {renderContent("Log Into Your Account" , "Create Account Your OpenTable Account")}
                </h2>
                <AuthModalInputs inputs={inputs} handleChangeInput={handleChangeInput} isSignin={isSignin}/>
                <button className='uppercase bg-red-600 p-3 w-full text-white rounded text-sm mb-10 disabled:bg--gray-400'
                disabled={disabled}
                onClick={handleClick}
                >{renderContent("Sign In" , "Create Account")}</button>
            </div>
          </div>}
        </Box>
      </Modal>
    </div>
  );
}
