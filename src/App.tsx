import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonMenu,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';

setupIonicReact();

const App: React.FC = () => (
<IonApp>
  <IonReactRouter>
      
      {/* Бокове меню */}
      <IonMenu side="start" menuId="first" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Меню</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button routerLink="/lab1/tab1">Лабораторна 1</IonItem>
            <IonItem button routerLink="/lab2">Лабораторна 2</IonItem>
            <IonItem button routerLink="/lab3">Лабораторна 3</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Основний */}
      <IonRouterOutlet id="main">
        <Route path="/lab1" component={Lab1} />
        <Route exact path="/lab2" component={Lab2} />
        <Route exact path="/lab3" component={Lab3} />
        <Route exact path="/">
          <Redirect to="/lab1/tab1" />
        </Route>
      </IonRouterOutlet>

  </IonReactRouter>
</IonApp>
);
export default App;
