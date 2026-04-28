<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { t } = useI18n()

interface Task {
  id: number
  text: string
  done: boolean
}

const tasks = ref<Task[]>([
  { id: 1, text: 'Set up InterCopy project',    done: true  },
  { id: 2, text: 'Add i18n content keys',        done: true  },
  { id: 3, text: 'Export locale JSON files',     done: false },
  { id: 4, text: 'Integrate into sample app',    done: false },
])
let nextId = 5

const newTask = ref('')
const layout = ref<'vertical' | 'horizontal'>('vertical')

const remaining = computed(() => tasks.value.filter(t => !t.done).length)

function addTask() {
  const text = newTask.value.trim()
  if (!text) return
  tasks.value.push({ id: nextId++, text, done: false })
  newTask.value = ''
}

function toggleTask(id: number) {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.done = !task.done
}

function deleteTask(id: number) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <section class="todo-section" id="todo">
    <div class="todo__inner">
      <div class="todo__header">
        <h2 class="todo__heading">{{ t('todo.heading') }}</h2>
        <div class="todo__layout-toggle" role="group" :aria-label="t('todo.heading')">
          <button
            class="layout-btn"
            :class="{ 'layout-btn--active': layout === 'vertical' }"
            @click="layout = 'vertical'"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="14" height="4" rx="1.5" fill="currentColor"/>
              <rect x="1" y="7" width="14" height="4" rx="1.5" fill="currentColor" opacity=".6"/>
              <rect x="1" y="11" width="14" height="4" rx="1.5" fill="currentColor" opacity=".3"/>
            </svg>
            {{ t('todo.layout.vertical') }}
          </button>
          <button
            class="layout-btn"
            :class="{ 'layout-btn--active': layout === 'horizontal' }"
            @click="layout = 'horizontal'"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="4" height="14" rx="1.5" fill="currentColor"/>
              <rect x="7" y="1" width="4" height="14" rx="1.5" fill="currentColor" opacity=".6"/>
              <rect x="11" y="1" width="4" height="14" rx="1.5" fill="currentColor" opacity=".3"/>
            </svg>
            {{ t('todo.layout.horizontal') }}
          </button>
        </div>
      </div>

      <!-- Add task form -->
      <form class="todo__form" @submit.prevent="addTask">
        <input
          v-model="newTask"
          class="todo__input"
          type="text"
          :placeholder="t('todo.placeholder')"
          maxlength="120"
          autocomplete="off"
        />
        <button type="submit" class="todo__add-btn">{{ t('todo.addButton') }}</button>
      </form>

      <!-- Counter -->
      <p v-if="tasks.length" class="todo__counter">
        {{ t('todo.counter', remaining) }}
      </p>

      <!-- Task list -->
      <p v-if="tasks.length === 0" class="todo__empty">{{ t('todo.emptyState') }}</p>
      <ul
        v-else
        class="todo__list"
        :class="layout === 'horizontal' ? 'todo__list--horizontal' : 'todo__list--vertical'"
      >
        <li
          v-for="task in tasks"
          :key="task.id"
          class="task-card"
          :class="{ 'task-card--done': task.done }"
        >
          <button
            class="task-card__check"
            :aria-label="t('todo.completeLabel')"
            :aria-pressed="task.done"
            @click="toggleTask(task.id)"
          >
            <svg v-if="task.done" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="task-card__text">{{ task.text }}</span>
          <span v-if="task.done" class="task-card__badge">{{ t('todo.completedBadge') }}</span>
          <button
            class="task-card__delete"
            :aria-label="t('todo.deleteLabel')"
            @click="deleteTask(task.id)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.todo-section {
  padding: 4rem 1.5rem;
}
.todo__inner { max-width: 900px; margin: 0 auto; }

.todo__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
}
.todo__heading {
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
}

.todo__layout-toggle {
  display: flex;
  gap: 0.4rem;
}
.layout-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.9rem;
  font-size: 0.82rem;
  background: var(--color-surface);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}
.layout-btn:hover { color: var(--color-text); }
.layout-btn--active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

.todo__form {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.todo__input {
  flex: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  color: var(--color-text);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.15s;
}
.todo__input:focus { border-color: var(--color-primary); }
.todo__add-btn {
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  border-radius: var(--radius-sm);
}
.todo__add-btn:hover { background: var(--color-primary-hover); }

.todo__counter {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
}
.todo__empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: 3rem;
  background: var(--color-surface);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius);
}

/* List layouts */
.todo__list { list-style: none; }
.todo__list--vertical {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.todo__list--horizontal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.todo__list--horizontal .task-card {
  width: 220px;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
}
.todo__list--horizontal .task-card__delete {
  margin-top: 0.75rem;
  margin-left: auto;
}

/* Task card */
.task-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  transition: border-color 0.2s, opacity 0.2s;
}
.task-card:hover { border-color: rgba(99,102,241,0.3); }
.task-card--done { opacity: 0.65; }
.task-card--done .task-card__text { text-decoration: line-through; color: var(--color-text-muted); }

.task-card__check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  background: transparent;
  color: var(--color-success);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  transition: border-color 0.15s, background 0.15s;
}
.task-card--done .task-card__check {
  background: var(--color-success);
  border-color: var(--color-success);
}
.task-card__check:hover { border-color: var(--color-success); }

.task-card__text {
  flex: 1;
  font-size: 0.95rem;
}
.task-card__badge {
  font-size: 0.72rem;
  padding: 0.2rem 0.55rem;
  background: rgba(34,197,94,0.15);
  color: var(--color-success);
  border-radius: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.task-card__delete {
  background: transparent;
  color: var(--color-text-muted);
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s, color 0.15s;
}
.task-card:hover .task-card__delete { opacity: 1; }
.task-card__delete:hover { color: var(--color-danger); }
</style>
