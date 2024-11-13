# Rezept-Suche App

## Projektplanung

### Idee und Zielsetzung:
Die Idee war es, eine einfache, benutzerfreundliche Rezept-Suche App zu erstellen. Das Ziel war es, den Benutzern die Möglichkeit zu geben, nach Rezepten zu suchen und Details zu den gefundenen Rezepten anzuzeigen.

### Technologieauswahl:
Für dieses Projekt wurde  Axios wurde für die Durchführung von HTTP-Anfragen verwendet, da es eine einfache und effiziente Bibliothek für diese Aufgabe ist.

## Entwicklung
### Erstellung der React-Komponenten:
Zuerst wurden die grundlegenden React-Komponenten erstellt. Dazu gehören die RecipeApp und WelcomeMessage Komponenten.
### Implementierung des Zustandsmanagements:
Mit Hilfe der useState Hook wurde der Zustand für die Rezepte, die Suchanfrage und das ausgewählte Rezept implementiert.
### Implementierung der API-Anfragen:
Mit Axios wurden Funktionen für die Durchführung von API-Anfragen erstellt. Diese Funktionen holen die Rezepte basierend auf der Suchanfrage und die Details eines ausgewählten Rezepts.
### Erstellung der Benutzeroberfläche:
Die Benutzeroberfläche beinhaltet ein Eingabefeld für die Suchanfrage, einen Button zum Auslösen der Rezeptsuche, eine Liste der abgerufenen Rezepte und eine Detailansicht für das ausgewählte Rezept.

## Herausforderungen
### Asynchrone Programmierung:
Eine der Herausforderungen bei der Erstellung dieser App war das Verständnis und die korrekte Anwendung der asynchronen Programmierung. Die fetchRecipes und handleRecipeClick Funktionen sind asynchrone Funktionen, die auf die Antwort einer API-Anfrage warten müssen, bevor sie fortfahren können. Dies erfordert ein gutes Verständnis von Promises und der async/await Syntax.
### Fehlerbehandlung:
Eine weitere Herausforderung war die korrekte Behandlung von Fehlern, die während der Kommunikation mit der API auftreten können. In den catch Blöcken der fetchRecipes und handleRecipeClick Funktionen werden solche Fehler abgefangen und eine Fehlermeldung wird in der Konsole ausgegeben.
### Zustandsmanagement:
Das Verständnis und die korrekte Anwendung des Zustandsmanagements in React war eine weitere Herausforderung. Die useState Hook wurde verwendet, um den Zustand für die Rezepte, die Suchanfrage und das ausgewählte Rezept zu verwalten.