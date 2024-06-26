import React ,{useState,useRef}from 'react';
import {TextInput,Spinner} from 'flowbite-react';
import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {toast} from 'sonner';
import { useUser } from "../contexts/UserContext";

function EmployerSignInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const[loading,setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { SetUser, currentUserDetail } = useUser();

    //using the AuthContext's Signup function
    const { SignIn, LogOut } = useAuth();

    async function handleSignIn() {
      try {
        setLoading(true);
        const resObj = await SignIn(
          emailRef.current.value,
          passwordRef.current.value
        );
        console.log("response from the signIn", resObj);
        const holdUser = await SetUser(resObj);
          if(currentUserDetail === undefined){
            //try 3 times
            for(let i = 0;i<3;i++){
              if(currentUserDetail !== undefined){
                break;
              }else{
                await SetUser(resObj);
              }
            }
          }
        if (holdUser.type === "employer") {
          toast.success('Logged in Successfully', {
            position: 'top-right',
            style: {
              background: '#4DE318',
              color: '#FFFFFF',
            }});
            console.log("toast missed")
            navigate("/post-job/e-dashboard-jobs-feed", { replace: true });
        } else {
          await LogOut();
          navigate("/find-job", { replace: true });
          toast.error("Login as a Candidate", {
            position: "top-right",
            style: {
              background: "#FF3538",
              color: "#FFFFFF",
            },
          });
        }
      } catch (error) {
        setError("An error occured while login");
        toast.error("Invalid Login Credentials", {
          position: "top-right",
          style: {
            background: "#FF3538",
            color: "#FFFFFF",
          },
        });
        await LogOut();
        console.log(error);
      } finally {
        setLoading(false);
      }
    }


    const containerStyle = {
        width: "30vw",
        // height: "80vh",
        marginTop: "30px",
        borderRadius: `8px`,
        // border: `1px  solid rgba(67,73,85,0.23)`,
        border: `1px  solid rgba(92,101,117,0.23)`,
        boxShadow: "0 0 21px 1px rgba(0, 0, 0, 0.12)",
      };




        //handle error
  if (error) {
    return <div>{error}</div>;
  }

//handle loading

      return (
        <div  data-testid="ESignin" className="flex justify-center place-items-center w-full h-[99vh]">
          {loading && (<div className="flex justify-center place-items-center "><Spinner size="xl" className='fill-[white] text-[#9345ffd5]'></Spinner></div>)}
          {!loading && (
            <div style={containerStyle} className="relative">
            <div className="flex justify-center">
              <h1 className="text-2xl font-semibold mt-4 ">Sign in</h1>
            </div>          
            <div >
              <div >
                {/* Email and Password */}
                <TextInput
                  id="email"
                  placeholder="Email"
                  type="email"
                  required
                  shadow
                  className=" mx-8 mt-12 "
                  ref={emailRef}
                />
               
                <TextInput
                  id="password"
                  placeholder="Password"
                  type='password'
                  required
                  shadow
                  className=" mx-8 mt-12 "
                  ref={passwordRef}
                />
              </div>
            </div>
            {/* SignIn Button */}
            <div className="px-8">
              {/* <Link to={"/post-job/e-dashboard-jobs-feed"}> */}
                <button
                  type="button"
                  className=" mt-9 text-2xl text-white text- w-full h-12 rounded-[5px] bg-[#9445FF]"
                  onClick={handleSignIn}
                  disabled={loading}
                >
                  Sign in
                </button>
              {/* </Link> */}
            </div>
            {/* User Agreement */}
            <div className="justify-center text-center px-8 pt-5">
              <p className=" text-secondary text-opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                luctus quam a nisi interdum.
              </p>
            </div>
            {/* Sign in option */}
            <div className="justify-center text-center px-8 py-5">
              <p className=" text-secondary text-opacity-50">
                No account? <div className="inline-block"><Link to={"/post-job/get-started"}><p className="text-[#9445FF]">Sign up</p></Link></div>
              </p>
            </div>
          </div>
          )}
          
        </div>
      )
}

export default EmployerSignInForm