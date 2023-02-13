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
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  function loginUser() {
    console.log(Username, Password);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
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
        <IonButton onClick={loginUser}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
