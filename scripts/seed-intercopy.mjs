#!/usr/bin/env node
/**
 * InterCopy Sample App — Seed Script
 *
 * Creates the project structure and all i18n content keys in InterCopy
 * using the REST API. Designed to run once against a fresh workspace.
 *
 * Usage:
 *   INTERCOPY_API_URL=https://api.intercopy.co.uk \
 *   INTERCOPY_TOKEN=<bearer-token> \
 *   INTERCOPY_WORKSPACE_ID=<workspace-id> \
 *   node scripts/seed-intercopy.mjs
 *
 * The token can be obtained via:
 *   POST /api/integration-tokens  (admin API token)
 *   or a short-lived bearer from your OIDC session
 */

import https from 'https'
import http from 'http'

const API_URL     = process.env.INTERCOPY_API_URL     ?? 'https://api.intercopy.co.uk'
const TOKEN       = process.env.INTERCOPY_TOKEN
const WORKSPACE   = process.env.INTERCOPY_WORKSPACE_ID

if (!TOKEN || !WORKSPACE) {
  console.error('❌  Set INTERCOPY_TOKEN and INTERCOPY_WORKSPACE_ID')
  process.exit(1)
}

// ── HTTP helper ──────────────────────────────────────────────────
function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const url  = new URL(path, API_URL)
    const data = body ? JSON.stringify(body) : null
    const opts = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
      },
    }
    const lib = url.protocol === 'https:' ? https : http
    const req = lib.request(opts, res => {
      let buf = ''
      res.on('data', c => buf += c)
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(buf) }) }
        catch { resolve({ status: res.statusCode, body: buf }) }
      })
    })
    req.on('error', reject)
    if (data) req.write(data)
    req.end()
  })
}

// ── Content key definitions ──────────────────────────────────────
// Matches src/locales/en.json structure (dot-notation)
const SOURCE_TEXTS = {
  'nav.title':                    'TaskFlow',
  'nav.tagline':                  'Get things done',
  'hero.heading':                 'Manage your tasks,',
  'hero.headingAccent':           'your way.',
  'hero.description':             'A simple, beautiful task manager built to demonstrate InterCopy — the localization platform for modern teams.',
  'hero.cta':                     'Try it now',
  'hero.badge':                   'Powered by InterCopy',
  'features.heading':             'Why TaskFlow?',
  'features.cards.simple.title':  'Simple by design',
  'features.cards.simple.description': 'No noise, no clutter. Just your tasks and the tools you need.',
  'features.cards.fast.title':    'Lightning fast',
  'features.cards.fast.description': 'Add, complete, and delete tasks in an instant. Built for speed.',
  'features.cards.global.title':  'Built for everyone',
  'features.cards.global.description': 'Available in multiple languages. Because great tools should be global.',
  'todo.heading':                 'Your Tasks',
  'todo.placeholder':             'Add a new task…',
  'todo.addButton':               'Add',
  'todo.emptyState':              'No tasks yet. Add one above!',
  'todo.completeLabel':           'Mark complete',
  'todo.deleteLabel':             'Delete task',
  'todo.completedBadge':          'Done',
  'todo.layout.horizontal':       'Row',
  'todo.layout.vertical':         'Stack',
  'todo.counter':                 '{count} task remaining | {count} tasks remaining',
  'footer.madeWith':              'Made with',
  'footer.using':                 'using',
  'footer.link':                  'InterCopy',
  'footer.rights':                '© 2026 TaskFlow. All rights reserved.',
}

const TARGET_TRANSLATIONS = {
  fr: {
    'nav.tagline':                  'Faites avancer les choses',
    'hero.heading':                 'Gérez vos tâches,',
    'hero.headingAccent':           'à votre façon.',
    'hero.description':             'Un gestionnaire de tâches simple et beau, conçu pour démontrer InterCopy.',
    'hero.cta':                     'Essayez maintenant',
    'hero.badge':                   'Propulsé par InterCopy',
    'features.heading':             'Pourquoi TaskFlow ?',
    'features.cards.simple.title':  'Simple par nature',
    'features.cards.simple.description': 'Pas de bruit, pas d\'encombrement.',
    'features.cards.fast.title':    'Ultra rapide',
    'features.cards.fast.description': 'Ajoutez, complétez et supprimez des tâches en un instant.',
    'features.cards.global.title':  'Pour tout le monde',
    'features.cards.global.description': 'Disponible en plusieurs langues.',
    'todo.heading':                 'Vos tâches',
    'todo.placeholder':             'Ajouter une nouvelle tâche…',
    'todo.addButton':               'Ajouter',
    'todo.emptyState':              'Aucune tâche pour l\'instant. Ajoutez-en une !',
    'todo.completeLabel':           'Marquer comme terminé',
    'todo.deleteLabel':             'Supprimer la tâche',
    'todo.completedBadge':          'Terminé',
    'todo.layout.horizontal':       'Ligne',
    'todo.layout.vertical':         'Pile',
    'todo.counter':                 '{count} tâche restante | {count} tâches restantes',
    'footer.madeWith':              'Fait avec',
    'footer.using':                 'en utilisant',
    'footer.rights':                '© 2026 TaskFlow. Tous droits réservés.',
  },
  de: {
    'nav.tagline':                  'Erledigen Sie Dinge',
    'hero.heading':                 'Verwalten Sie Ihre Aufgaben,',
    'hero.headingAccent':           'auf Ihre Art.',
    'hero.description':             'Ein einfacher, schöner Aufgabenmanager, der InterCopy demonstriert.',
    'hero.cta':                     'Jetzt ausprobieren',
    'hero.badge':                   'Unterstützt von InterCopy',
    'features.heading':             'Warum TaskFlow?',
    'features.cards.simple.title':  'Einfach gestaltet',
    'features.cards.simple.description': 'Kein Lärm, kein Durcheinander.',
    'features.cards.fast.title':    'Blitzschnell',
    'features.cards.fast.description': 'Aufgaben sofort hinzufügen, erledigen und löschen.',
    'features.cards.global.title':  'Für alle gebaut',
    'features.cards.global.description': 'Verfügbar in mehreren Sprachen.',
    'todo.heading':                 'Ihre Aufgaben',
    'todo.placeholder':             'Neue Aufgabe hinzufügen…',
    'todo.addButton':               'Hinzufügen',
    'todo.emptyState':              'Noch keine Aufgaben. Fügen Sie eine hinzu!',
    'todo.completeLabel':           'Als erledigt markieren',
    'todo.deleteLabel':             'Aufgabe löschen',
    'todo.completedBadge':          'Erledigt',
    'todo.layout.horizontal':       'Reihe',
    'todo.layout.vertical':         'Stapel',
    'todo.counter':                 '{count} Aufgabe übrig | {count} Aufgaben übrig',
    'footer.madeWith':              'Erstellt mit',
    'footer.using':                 'mit',
    'footer.rights':                '© 2026 TaskFlow. Alle Rechte vorbehalten.',
  },
}

// ── Main ─────────────────────────────────────────────────────────
async function main() {
  console.log('🚀  InterCopy Sample App — Seed Script')
  console.log(`    API:       ${API_URL}`)
  console.log(`    Workspace: ${WORKSPACE}`)
  console.log()

  // 1. Create project
  console.log('📁  Creating project "TaskFlow Sample App"…')
  const projectRes = await request('POST', '/api/projects', {
    workspaceId: WORKSPACE,
    name: 'TaskFlow Sample App',
    description: 'Demo project for the InterCopy sample Vue.js todo app',
  })
  if (projectRes.status !== 200 && projectRes.status !== 201) {
    console.error('   Failed to create project:', projectRes.body)
    process.exit(1)
  }
  const projectId = projectRes.body.id
  console.log(`   ✅  Project created: ${projectId}`)

  // 2. Add languages (fr, de — en is default source)
  for (const lang of ['fr', 'de']) {
    console.log(`🌍  Adding language: ${lang}`)
    const r = await request('POST', `/api/projects/${projectId}/languages`, {
      bcp47Code: lang,
      displayName: lang === 'fr' ? 'French' : 'German',
    })
    if (r.status !== 200 && r.status !== 201) {
      console.warn(`   ⚠️  Language ${lang}: ${r.status}`, r.body)
    } else {
      console.log(`   ✅  ${lang} added`)
    }
  }

  // 3. Create content keys + source text
  const keyIds = {}
  const entries = Object.entries(SOURCE_TEXTS)
  console.log(`\n📝  Creating ${entries.length} content keys…`)
  for (const [key, sourceText] of entries) {
    const r = await request('POST', `/api/projects/${projectId}/content-items`, {
      key,
      sourceText,
    })
    if (r.status !== 200 && r.status !== 201) {
      console.warn(`   ⚠️  ${key}: ${r.status}`)
    } else {
      keyIds[key] = r.body.id
      process.stdout.write('.')
    }
  }
  console.log('\n   ✅  All keys created')

  // 4. Add translations
  for (const [lang, translations] of Object.entries(TARGET_TRANSLATIONS)) {
    console.log(`\n🔤  Adding ${lang} translations…`)
    for (const [key, text] of Object.entries(translations)) {
      const itemId = keyIds[key]
      if (!itemId) { console.warn(`   ⚠️  No id for key: ${key}`); continue }
      const r = await request('PUT', `/api/projects/${projectId}/language-tasks/${itemId}/${lang}`, {
        translatedText: text,
        status: 'translated',
      })
      if (r.status !== 200 && r.status !== 201 && r.status !== 204) {
        console.warn(`   ⚠️  ${key} [${lang}]: ${r.status}`)
      } else {
        process.stdout.write('.')
      }
    }
    console.log(`\n   ✅  ${lang} done`)
  }

  // 5. Create a live version snapshot
  console.log('\n📦  Creating live version snapshot…')
  const versionRes = await request('POST', `/api/projects/${projectId}/versions`, {
    name: 'v1.0.0 — Initial seed',
    description: 'Auto-created by seed script',
  })
  if (versionRes.status === 200 || versionRes.status === 201) {
    const versionId = versionRes.body.id
    // Promote to live
    await request('POST', `/api/projects/${projectId}/versions/${versionId}/promote`)
    console.log('   ✅  v1.0.0 created and set as live')
  } else {
    console.warn('   ⚠️  Could not create version:', versionRes.body)
  }

  console.log(`
✨  Done! Your project is seeded.

Next steps:
  1. Note your Project ID: ${projectId}
  2. Set INTERCOPY_PROJECT_ID=${projectId} in your GitHub repo secrets
  3. Run: curl "${API_URL}/api/exports/neutral?projectId=${projectId}&version=live"
     to verify the export
  4. Push to main to trigger the GitHub Pages deployment
`)
}

main().catch(err => { console.error(err); process.exit(1) })
