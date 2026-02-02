import { Redirect, Route } from 'react-router-dom';
import {
  IonPage,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
//import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Lab1 = () => {
  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/lab1/tab1" component={Tab1} />
          <Route exact path="/lab1/tab2" component={Tab2} />
          <Route exact path="/lab1/tab3" component={Tab3} />
          <Route exact path="/lab1">
            <Redirect to="/lab1/tab1" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/lab1/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Завдання 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/lab1/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Завдання 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/lab1/tab3">
            <IonIcon icon={square} />
            <IonLabel>Завдання 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  )
}

export default Lab1