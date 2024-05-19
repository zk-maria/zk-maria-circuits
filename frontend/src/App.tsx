import './App.css';
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { Button } from 'react-bootstrap';

import RsaChallengeComponent from './RsaChallengeComponent';
import FileUpload from './components/FileUpload';
import NewRequest from './components/NewRequest';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL as string,
  process.env.REACT_APP_SUPABASE_ANON_KEY as string
);

function App() {
  const [session, setSession] = useState(null as unknown);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Welcome to zk-Maria</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
          />
        </div>

      </div>
    );
  } else {

    return (
      <div className='container'>
        <div>Logged in!</div>
        <Button onClick={() => supabase.auth.signOut()}>Sign out</Button>
        <FileUpload />
        <NewRequest props={session} />
      </div>
    );
  }

  // return (
  //   <RsaChallengeComponent />
  // );
}

export default App;
