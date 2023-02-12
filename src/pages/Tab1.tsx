import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemOption,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { trash } from "ionicons/icons";

// import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const arr = [
  {
    name: "Finn",
    desc: "Guild Master",
  },
  {
    name: "Han",
    desc: "Strong Magical Dog",
  },
  {
    name: "Rey",
    desc: "Lady crane...",
  },
];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonList>
          {arr.map((item) => (
            <IonItemSliding key={item.name}>
              <IonItem>
                <IonAvatar>
                  <img
                    src={`https://ionicframework.com/docs/demos/api/list/avatar-${item.name.toLowerCase()}.png`}
                    alt=""
                  />
                </IonAvatar>

                <IonLabel className="ion-margin">
                  <h2>{item.name}</h2>
                  <p>{item.desc}</p>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => alert("Delete this data")}>
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonContent>
          <IonButton
            className="ion-margin-top"
            color="danger"
            onClick={() => alert("Delete this data")}
          >
            <IonIcon slot="end" icon={trash} />
            Delete
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
