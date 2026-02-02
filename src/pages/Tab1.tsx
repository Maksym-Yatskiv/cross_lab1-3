import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonContent, IonInput, IonButton} from '@ionic/react';
import './Tab1.css';
import SharedHeader from '../components/SharedHeader';
import { useState } from 'react';
import { Task1 } from '../class/Task1';

const Tab1: React.FC = () => {
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);
  const [n3, setN3] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const calculate = () => {
    const calc = new Task1(n1, n2, n3);

    setResult(calc.calculate());
  }

  return (
    <IonPage>
      <SharedHeader lab_name="Лабораторна робота №1"></SharedHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Завдання №1</IonCardTitle>
          </IonCardHeader>
            <IonCardContent>
            <IonItem>
              Задано три числа.  Якщо всі вони від’ємні та парні, то знайти їх добуток. В іншому випадку – квадрат добутку
            </IonItem>
            <IonItem>
              <IonInput label="Введіть перше число" labelPlacement='floating' type="number" value={n1} onIonInput={e => setN1(Number(e.detail.value))}>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Введіть друге число" labelPlacement='floating' type="number" value={n2} onIonInput={e => setN2(Number(e.detail.value))}>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Введіть третє число" labelPlacement='floating' type="number" value={n3} onIonInput={e => setN3(Number(e.detail.value))}>
              </IonInput>
            </IonItem>
            <IonButton expand="block" onClick={calculate} className="ion-margin-top">
              Розрахувати
            </IonButton> 
          </IonCardContent>
          {result != "" &&
            <IonItem>
              Результат: {result}
            </IonItem>
          }
        </IonCard>
      </IonContent>
    
    </IonPage>
  );
};

export default Tab1;
