import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [Input, setInput] = useState<string>("");

  useEffect(() => {
    console.log(Input);
  }, [Input]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonInput
          color="light"
          value={Input}
          onChange={(e: any) => setInput(e.target.value)}
        ></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
