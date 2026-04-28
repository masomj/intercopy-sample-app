# InterCopy Sample App — Manual Setup Guide

Use this guide to populate the InterCopy dev environment with the content keys for the TaskFlow sample app. Once done, export the locale files and the CI pipeline handles the rest.

---

## 1. Create an Account & Workspace

1. Go to <https://intercopy.co.uk/register>
2. Fill in: **First:** `Demo`, **Last:** `User`, **Email:** `demo@intercopy.co.uk`, **Password:** `Demo1234!`, **Company:** `InterCopy Demo`
3. Sign in via Keycloak — you'll land on the dashboard

---

## 2. Create the Project

1. Go to **Projects → New Project**
2. **Name:** `TaskFlow Sample App`
3. **Description:** `Demo project for the InterCopy sample Vue.js todo app`
4. Save — note the **Project ID** from the URL (UUID format)

---

## 3. Add Languages

In the project → **Settings → Languages**, add:
- `fr` — French
- `de` — German

(English `en` is the default source language)

---

## 4. Add Content Keys

Go to **Content** and create the following keys with the given source text. Use the dot-notation path as the **Key** field.

### Navigation
| Key | Source Text (EN) |
|-----|-----------------|
| `nav.title` | `TaskFlow` |
| `nav.tagline` | `Get things done` |

### Hero Section
| Key | Source Text (EN) |
|-----|-----------------|
| `hero.heading` | `Manage your tasks,` |
| `hero.headingAccent` | `your way.` |
| `hero.description` | `A simple, beautiful task manager built to demonstrate InterCopy — the localization platform for modern teams.` |
| `hero.cta` | `Try it now` |
| `hero.badge` | `Powered by InterCopy` |

### Features Section
| Key | Source Text (EN) |
|-----|-----------------|
| `features.heading` | `Why TaskFlow?` |
| `features.cards.simple.title` | `Simple by design` |
| `features.cards.simple.description` | `No noise, no clutter. Just your tasks and the tools you need.` |
| `features.cards.fast.title` | `Lightning fast` |
| `features.cards.fast.description` | `Add, complete, and delete tasks in an instant. Built for speed.` |
| `features.cards.global.title` | `Built for everyone` |
| `features.cards.global.description` | `Available in multiple languages. Because great tools should be global.` |

### Todo App
| Key | Source Text (EN) |
|-----|-----------------|
| `todo.heading` | `Your Tasks` |
| `todo.placeholder` | `Add a new task…` |
| `todo.addButton` | `Add` |
| `todo.emptyState` | `No tasks yet. Add one above!` |
| `todo.completeLabel` | `Mark complete` |
| `todo.deleteLabel` | `Delete task` |
| `todo.completedBadge` | `Done` |
| `todo.layout.horizontal` | `Row` |
| `todo.layout.vertical` | `Stack` |
| `todo.counter` | `{count} task remaining \| {count} tasks remaining` |

### Footer
| Key | Source Text (EN) |
|-----|-----------------|
| `footer.madeWith` | `Made with` |
| `footer.using` | `using` |
| `footer.link` | `InterCopy` |
| `footer.rights` | `© 2026 TaskFlow. All rights reserved.` |

---

## 5. Add French Translations

In **Content → Localization Grid**, select **French (fr)** and enter:

| Key | French (fr) |
|-----|------------|
| `nav.tagline` | `Faites avancer les choses` |
| `hero.heading` | `Gérez vos tâches,` |
| `hero.headingAccent` | `à votre façon.` |
| `hero.description` | `Un gestionnaire de tâches simple et beau, conçu pour démontrer InterCopy — la plateforme de localisation pour les équipes modernes.` |
| `hero.cta` | `Essayez maintenant` |
| `hero.badge` | `Propulsé par InterCopy` |
| `features.heading` | `Pourquoi TaskFlow ?` |
| `features.cards.simple.title` | `Simple par nature` |
| `features.cards.simple.description` | `Pas de bruit, pas d'encombrement. Juste vos tâches et les outils nécessaires.` |
| `features.cards.fast.title` | `Ultra rapide` |
| `features.cards.fast.description` | `Ajoutez, complétez et supprimez des tâches en un instant. Conçu pour la vitesse.` |
| `features.cards.global.title` | `Pour tout le monde` |
| `features.cards.global.description` | `Disponible en plusieurs langues. Parce que les bons outils doivent être universels.` |
| `todo.heading` | `Vos tâches` |
| `todo.placeholder` | `Ajouter une nouvelle tâche…` |
| `todo.addButton` | `Ajouter` |
| `todo.emptyState` | `Aucune tâche pour l'instant. Ajoutez-en une ci-dessus !` |
| `todo.completeLabel` | `Marquer comme terminé` |
| `todo.deleteLabel` | `Supprimer la tâche` |
| `todo.completedBadge` | `Terminé` |
| `todo.layout.horizontal` | `Ligne` |
| `todo.layout.vertical` | `Pile` |
| `todo.counter` | `{count} tâche restante \| {count} tâches restantes` |
| `footer.madeWith` | `Fait avec` |
| `footer.using` | `en utilisant` |
| `footer.rights` | `© 2026 TaskFlow. Tous droits réservés.` |

---

## 6. Add German Translations

| Key | German (de) |
|-----|------------|
| `nav.tagline` | `Erledigen Sie Dinge` |
| `hero.heading` | `Verwalten Sie Ihre Aufgaben,` |
| `hero.headingAccent` | `auf Ihre Art.` |
| `hero.description` | `Ein einfacher, schöner Aufgabenmanager, der InterCopy demonstriert — die Lokalisierungsplattform für moderne Teams.` |
| `hero.cta` | `Jetzt ausprobieren` |
| `hero.badge` | `Unterstützt von InterCopy` |
| `features.heading` | `Warum TaskFlow?` |
| `features.cards.simple.title` | `Einfach gestaltet` |
| `features.cards.simple.description` | `Kein Lärm, kein Durcheinander. Nur Ihre Aufgaben und die nötigen Werkzeuge.` |
| `features.cards.fast.title` | `Blitzschnell` |
| `features.cards.fast.description` | `Fügen Sie Aufgaben hinzu, erledigen und löschen Sie sie sofort. Für Geschwindigkeit gemacht.` |
| `features.cards.global.title` | `Für alle gebaut` |
| `features.cards.global.description` | `Verfügbar in mehreren Sprachen. Weil großartige Tools global sein sollten.` |
| `todo.heading` | `Ihre Aufgaben` |
| `todo.placeholder` | `Neue Aufgabe hinzufügen…` |
| `todo.addButton` | `Hinzufügen` |
| `todo.emptyState` | `Noch keine Aufgaben. Fügen Sie eine oben hinzu!` |
| `todo.completeLabel` | `Als erledigt markieren` |
| `todo.deleteLabel` | `Aufgabe löschen` |
| `todo.completedBadge` | `Erledigt` |
| `todo.layout.horizontal` | `Reihe` |
| `todo.layout.vertical` | `Stapel` |
| `todo.counter` | `{count} Aufgabe übrig \| {count} Aufgaben übrig` |
| `footer.madeWith` | `Erstellt mit` |
| `footer.using` | `mit` |
| `footer.rights` | `© 2026 TaskFlow. Alle Rechte vorbehalten.` |

---

## 7. Create a Live Version

1. Go to **Versions → New Version**
2. Name: `v1.0.0 — Initial seed`
3. Create snapshot → **Promote to Live**

This is what the CI pipeline exports from.

---

## 8. Export & Verify

Test the export manually:

```bash
curl "https://api.intercopy.co.uk/api/exports/neutral?projectId=<YOUR_PROJECT_ID>&version=live" \
  | jq keys
# should output: ["de", "fr", "source"]
```

Extract individual files:
```bash
EXPORT=$(curl -sf "https://api.intercopy.co.uk/api/exports/neutral?projectId=<YOUR_PROJECT_ID>&version=live")
echo $EXPORT | jq '.source'   > en.json
echo $EXPORT | jq '.fr'       > fr.json
echo $EXPORT | jq '.de'       > de.json
```

---

## 9. GitHub Pages Setup

1. Create GitHub repo: `masomj/intercopy-sample-app`
2. **Settings → Pages**: Source = `GitHub Actions`
3. **Settings → Secrets → Actions**, add:
   - `INTERCOPY_PROJECT_ID` = your project UUID from step 2
4. Push the code — the `deploy.yml` workflow handles everything:
   - Fetches fresh locales from InterCopy on every push
   - Builds the Vite app
   - Deploys to GitHub Pages

The live URL will be: `https://masomj.github.io/intercopy-sample-app/`

---

## 10. Automated Updates (CI Flow)

Once the pipeline is running, any translation update in InterCopy → push to `main` → fresh locale files fetched → rebuilt app deployed. To trigger a locale-only refresh without a code change, use **workflow_dispatch** from the GitHub Actions tab.

> **Next step:** Add an InterCopy webhook → GitHub Actions trigger so locale changes in InterCopy auto-redeploy the sample app.
