import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonContent, IonInput, IonButton} from '@ionic/react';
import './Tab2.css';
import SharedHeader from '../components/SharedHeader';
import { useState } from 'react';
import { Task2 } from '../class/Task2';

const Tab2: React.FC = () => {
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);

  const calculate = () => {
    const calc = new Task2(n1, n2);
    setResult([calc.getCount(), calc.getOddDivisibleBy17()]);
  }

  return (
    <IonPage>
      <SharedHeader lab_name="Лабораторна робота №1"></SharedHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Завдання №2</IonCardTitle>
          </IonCardHeader>
            <IonCardContent>
            <IonItem>
              Знайдіть кількість не парних чисел на заданому проміжку чисел [a,b], які діляться без остачі на 17. Потрібно вивести як самі числа так і результати обрахунку.
            </IonItem>
            <IonItem>
              <IonInput label="Введіть перше число" labelPlacement='floating' type="number" value={n1} onIonInput={e => setN1(Number(e.detail.value))}>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Введіть друге число" labelPlacement='floating' type="number" value={n2} onIonInput={e => setN2(Number(e.detail.value))}>
              </IonInput>
            </IonItem>
            <IonButton expand="block" onClick={calculate} className="ion-margin-top">
              Розрахувати
            </IonButton> 
          </IonCardContent>
          {result.length != 0 &&
            <>
              <IonItem>
                Кількість непарних чисел, що діляться на 17: {result[0]}
              </IonItem>
              <IonItem>
                Результат: {result[1]}
              </IonItem>
            </>
          }
        </IonCard>
      </IonContent>
    
    </IonPage>
  );

};

export default Tab2;
