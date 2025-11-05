import { useState } from 'react'
import { useTheme } from '../../theme/ThemeProvider'
import { addStoredEvent, addStoredProgram, isAuthed, setAuthed, type StoredEvent, type StoredProgram } from './storage'

export default function AdminPage() {
  const { isDark } = useTheme()
  const [authed, setAuthState] = useState<boolean>(isAuthed())
  const [password, setPassword] = useState('')
  const [tab, setTab] = useState<'event' | 'program'>('event')
  const [msg, setMsg] = useState<string | null>(null)

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Simple password gate. Replace with real auth later.
    if (password.trim() === 'guild-admin') {
      setAuthed(true)
      setAuthState(true)
      setMsg(null)
    } else {
      setMsg('Invalid password')
    }
  }

  function handleLogout() {
    setAuthed(false)
    setAuthState(false)
  }

  function handleCreateEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const ev: StoredEvent = {
      slug: String(form.get('slug') || ''),
      title: String(form.get('title') || ''),
      date: String(form.get('date') || ''),
      time: String(form.get('time') || ''),
      location: String(form.get('location') || ''),
      badge: String(form.get('badge') || '') || undefined,
      cover: String(form.get('cover') || ''),
      excerpt: String(form.get('excerpt') || ''),
    }
    if (!ev.slug || !ev.title) {
      setMsg('Please provide at least a slug and title for the event')
      return
    }
    addStoredEvent(ev)
    ;(e.currentTarget as HTMLFormElement).reset()
    setMsg('Event saved. View it on the Events page.')
  }

  function handleCreateProgram(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const prog: StoredProgram = {
      title: String(form.get('title') || ''),
      blurb: String(form.get('blurb') || ''),
      level: (String(form.get('level') || 'Beginner') as StoredProgram['level']),
      mode: (String(form.get('mode') || 'Hybrid') as StoredProgram['mode']),
      duration: String(form.get('duration') || ''),
      lessons: Number(form.get('lessons') || 0),
      starts: String(form.get('starts') || ''),
      image: String(form.get('image') || ''),
      category: (String(form.get('category') || 'Web3') as StoredProgram['category']),
      slug: String(form.get('slug') || ''),
    }
    if (!prog.slug || !prog.title) {
      setMsg('Please provide at least a slug and title for the program')
      return
    }
    addStoredProgram(prog)
    ;(e.currentTarget as HTMLFormElement).reset()
    setMsg('Program saved. View it on the Bootcamps page.')
  }

  if (!authed) {
    return (
      <section className={`w-full ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        <div className="mx-auto max-w-md px-6 py-14">
          <h1 className="font-syne text-3xl font-bold mb-4">Admin Login</h1>
          <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mb-6 text-sm`}>Restricted area. Enter admin password.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`w-full px-4 py-3 rounded-full border ${isDark ? 'bg-black border-neutral-800 text-white placeholder:text-neutral-500' : 'bg-white border-neutral-200 placeholder:text-neutral-400'}`}
              required
            />
            <button type="submit" className="w-full rounded-full bg-green-600 text-white font-semibold px-5 py-3">Login</button>
          </form>
          {msg && <p className="mt-3 text-sm text-red-500">{msg}</p>}
          <p className="mt-6 text-xs text-neutral-500">Default password: <span className="font-mono">guild-admin</span></p>
        </div>
      </section>
    )
  }

  return (
    <section className={`w-full ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <div className="flex items-center justify-between">
          <h1 className="font-syne text-3xl font-bold">Admin Dashboard</h1>
          <button type="button" onClick={handleLogout} className={`rounded-full px-4 py-2 text-sm ${isDark ? 'border border-neutral-700' : 'border border-neutral-300'}`}>Logout</button>
        </div>

        <div className="mt-6 flex gap-2">
          <button type="button" onClick={() => setTab('event')} className={`rounded-full px-4 py-2 text-sm font-semibold ${tab==='event' ? 'bg-green-600 text-white' : (isDark ? 'border border-neutral-700' : 'border border-neutral-300')}`}>Add Event</button>
          <button type="button" onClick={() => setTab('program')} className={`rounded-full px-4 py-2 text-sm font-semibold ${tab==='program' ? 'bg-green-600 text-white' : (isDark ? 'border border-neutral-700' : 'border border-neutral-300')}`}>Add Bootcamp</button>
        </div>

        {msg && <p className="mt-4 text-sm text-green-500">{msg}</p>}

        {tab === 'event' ? (
          <form onSubmit={handleCreateEvent} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="slug" placeholder="slug e.g. solidity-beginner-workshop" className="input" />
            <input name="title" placeholder="title" className="input" />
            <input name="date" placeholder="date e.g. Fri, Dec 5, 2025" className="input" />
            <input name="time" placeholder="time e.g. 12:00pm WAT" className="input" />
            <input name="location" placeholder="location e.g. Online · Zoom" className="input" />
            <input name="badge" placeholder="badge e.g. Featured" className="input" />
            <input name="cover" placeholder="cover image URL or path" className="input md:col-span-2" />
            <textarea name="excerpt" placeholder="short excerpt" className="textarea md:col-span-2" />
            <div className="md:col-span-2">
              <button type="submit" className="rounded-full bg-green-600 text-white font-semibold px-5 py-3">Save Event</button>
              <button type="button" onClick={() => (window.location.hash = '#/events')} className="ml-3 rounded-full px-5 py-3 border">View Events</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleCreateProgram} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="slug" placeholder="slug e.g. product-design" className="input" />
            <input name="title" placeholder="title" className="input" />
            <input name="blurb" placeholder="short blurb" className="input md:col-span-2" />
            <select name="level" className="input">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select name="mode" className="input">
              <option>Hybrid</option>
              <option>Onsite</option>
              <option>Remote</option>
            </select>
            <input name="duration" placeholder="duration e.g. 12 weeks" className="input" />
            <input name="lessons" placeholder="lessons e.g. 36" type="number" className="input" />
            <input name="starts" placeholder="starts e.g. Nov 4, 2025" className="input" />
            <select name="category" className="input">
              <option>Web2</option>
              <option>Web3</option>
            </select>
            <input name="image" placeholder="image URL or path" className="input md:col-span-2" />
            <div className="md:col-span-2">
              <button type="submit" className="rounded-full bg-green-600 text-white font-semibold px-5 py-3">Save Bootcamp</button>
              <button type="button" onClick={() => (window.location.hash = '#/bootcamps')} className="ml-3 rounded-full px-5 py-3 border">View Bootcamps</button>
            </div>
          </form>
        )}
      </div>

      {/* Inline minimal styles for inputs */}
      <style>{`
        .input { padding: 0.75rem 1rem; border-radius: 9999px; border-width: 1px; }
        .textarea { padding: 0.75rem 1rem; border-radius: 1rem; border-width: 1px; min-height: 120px; }
        body.dark .input, body.dark .textarea { background: black; border-color: #262626; color: white; }
      `}</style>
    </section>
  )
}
