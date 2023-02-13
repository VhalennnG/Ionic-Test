import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { loginUser } from "../firebaseConfig";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [present] = useIonToast();

  const toast = (message: string, color: string) => {
    present({
      message: message,
      duration: 10000,
      position: "top",
      color: color,
    });
  };

  async function login() {
    const res = await loginUser(Username, Password);
    if (!res) {
      toast("Failed to login", "danger");
    } else {
      toast("Successfully logged in", "success");
    }
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
          type="password"
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={login}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
