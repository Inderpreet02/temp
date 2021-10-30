import { auth, provider } from '../firebase';


function Main() {

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInwithPopup(provider)
        .catch((err)=>{
            alert(err);
        })
    }
    return (
        <div className="main">
            <h1>Website Demo</h1>            

            <button className="logIn" onSubmit={signIn}>Log In</button>
        </div>
    )
}

export default Main
