import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TTR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
Components here      </IonContent>
<IonContent className="ion-padding">
card      </IonContent>
<IonContent className="ion-padding">
Nav     </IonContent>
    </IonApp>
  );
};

export default App;
