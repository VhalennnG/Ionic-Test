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
import { Link } from "react-router-dom";
import { registerUser } from "../firebaseConfig";

const Tab4: React.FC = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const [present] = useIonToast();

  const toast = (message: string, color: string) => {
    present({
      message: message,
      duration: 10000,
      position: "top",
      color: color,
    });
  };

  async function register() {
    if (Password !== cPassword) {
      return toast("Password does not match", "danger");
    }
    if (Password === "" || Username === "") {
      return toast("Username and Password are required", "danger");
    }
    if (Password.length < 6) {
      return toast("Password at least 6 characters", "danger");
    }

    const res = await registerUser(Username, Password);
    if (res) {
      toast("Registered successfully", "success");
    } else {
      toast("Registered failed", "danger");
    }
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
          type="password"
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonInput
          type="password"
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
