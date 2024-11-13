import { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  const handleClick = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    // Diese Funktion wird ausgeführt, wenn die Komponente geladen wird.
  }, []);

  return (
    showMessage && (
      <div onClick={handleClick} className="messageBox">
        <h1>Hey :), herzlich willkommen zu diesem Schulprojekt!</h1>
        <p>
          Die Webseite bietet bereits einige Funktionen, befindet sich jedoch
          noch in der Entwicklung und wird kontinuierlich verbessert. Sie wurde
          aus persönlichen Gründen ins Leben gerufen, um eine unkomplizierte und
          werbefreie Nutzung zu ermöglichen. Deshalb genießt du beim Besuch der
          Webseite diese Vorteile:
        </p>
        <ul>
          <li>Keine Anmeldung erforderlich</li>
          <li>Keine Datensammlung</li>
          <li>Und natürlich keine lästige Werbung</li>
        </ul>
        <p>
          Wenn dir die Webseite gefällt und du sie öfter nutzen möchtest, kannst
          du sie einfach auf deinem Bildschirm installieren. So geht's:
          <ol>
            <li>Öffne die Chrome-Einstellungen.</li>
            <li>Wähle "Zum Startbildschirm hinzufügen"</li>
          </ol>
        </p>
        <p>
          Hast du Ideen oder Vorschläge, wie wir die Webseite noch besser machen
          können? Lass es mich wissen.
        </p>
        <p>Klicke auf diese Meldung, um fortzufahren.</p>
      </div>
    )
  );
};

export default WelcomeMessage;