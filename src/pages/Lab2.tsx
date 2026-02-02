import { IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import SharedHeader from '../components/SharedHeader'
import { FacultyList } from '../class/FacultyList';
import { Faculty } from '../class/Faculty';
import ChartLab2 from '../components/ChartLab2';

const Lab2 = () => {
  const [grouped, setGrouped] = useState<Map<string, Faculty[]>>(new Map());

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/6980e86dd0ea881f409ba322"
      );
      const data = await res.json();

      const list = new FacultyList();
      data.record.forEach((f: Faculty) => {
        list.addFaculty(
          new Faculty(f.university, f.faculty, f.dean, f.phone, f.address)
        );
      });

      const groupedData = list.group();
      console.log(groupedData);
      setGrouped(groupedData);
    }

    fetchData();
  }, []);

  const labels = Array.from(grouped.keys());
  const values = Array.from(grouped.values()).map((facs) => facs.length);

  return (
    <IonPage>
      <SharedHeader lab_name="Лабораторна робота №2"></SharedHeader>
      <IonContent>
        <IonToolbar>
          <IonTitle>Факультети, сгруповані по університетам</IonTitle>
        </IonToolbar>
        {[...grouped.entries()].map(([uni, facs]) => (
          <IonCard key={uni} className="ion-margin-bottom">
            <IonCardHeader>
              <IonCardTitle>{uni}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                {facs.map((f) => (
                  <IonItem key={f.faculty}>
                    {f.faculty} - декан: {f.dean}, тел.: {f.phone}, адреса:{" "}
                    {f.address}
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        ))}
          <ChartLab2 labels={labels} values={values}></ChartLab2>
      </IonContent>
    </IonPage>
  );
}

export default Lab2