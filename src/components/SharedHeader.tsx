import { 
  IonButtons, 
  IonHeader, 
  IonMenuButton, 
  IonTitle, 
  IonToolbar, 
} from "@ionic/react";
import React from "react";

interface SharedHeaderProps {
  lab_name: string
}

const SharedHeader: React.FC<SharedHeaderProps> = ({lab_name}) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{lab_name}</IonTitle>
        </IonToolbar>

        <IonToolbar>
          <IonTitle>Виконав студент КН-31 Яцків Максим, Варіант-20</IonTitle>
        </IonToolbar>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton menu="first"></IonMenuButton>
        </IonButtons>
        <IonTitle> Лабораторні роботи</IonTitle>
      </IonToolbar>
      </IonHeader>
    </>
  );
}

export default SharedHeader;
