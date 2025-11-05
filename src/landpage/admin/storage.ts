export type StoredEvent = {
  slug: string
  title: string
  date: string
  time: string
  location: string
  badge?: string
  cover: string
  excerpt: string
}

export type StoredProgram = {
  title: string
  blurb: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  mode: 'Hybrid' | 'Onsite' | 'Remote'
  duration: string
  lessons: number
  starts: string
  image: string
  category: 'Web2' | 'Web3'
  slug: string
}

const EVENTS_KEY = 'ga_events'
const PROGRAMS_KEY = 'ga_programs'
const AUTH_KEY = 'ga_admin_auth'

export function getStoredEvents(): StoredEvent[] {
  try {
    const raw = localStorage.getItem(EVENTS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveStoredEvents(list: StoredEvent[]) {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(list))
}

export function addStoredEvent(ev: StoredEvent) {
  const list = getStoredEvents().filter((e) => e.slug !== ev.slug)
  list.unshift(ev)
  saveStoredEvents(list)
}

export function getStoredPrograms(): StoredProgram[] {
  try {
    const raw = localStorage.getItem(PROGRAMS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveStoredPrograms(list: StoredProgram[]) {
  localStorage.setItem(PROGRAMS_KEY, JSON.stringify(list))
}

export function addStoredProgram(p: StoredProgram) {
  const list = getStoredPrograms().filter((x) => x.slug !== p.slug)
  list.unshift(p)
  saveStoredPrograms(list)
}

export function isAuthed(): boolean {
  return localStorage.getItem(AUTH_KEY) === '1'
}

export function setAuthed(val: boolean) {
  if (val) localStorage.setItem(AUTH_KEY, '1')
  else localStorage.removeItem(AUTH_KEY)
}
