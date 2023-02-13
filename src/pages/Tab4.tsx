import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Tab4: React.FC = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  function register() {
    var msg = "Register failed";
    if (Password === cPassword) msg = "Register successful";
    console.log(msg);
    console.log(Username, Password, cPassword);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="dark">
        <IonInput
          placeholder="Username"
          onIonChange={(e: any) => setUsername(e.target.value)}
        ></IonInput>
        <IonInput
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonInput
          placeholder="Confirm Password"
          onIonChange={(e: any) => setcPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={register}>Register</IonButton>
        <p className="ion-margin">
          Already have an account? <Link to="/Tab3">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
