import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import './welcome.css'

interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

const ThemContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})

export default function Welcome() {
  const [theme, setThem] = useState<ThemeType['theme']>({ color: 'light' })
  const [, forceRender] = useState({})

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setThem((prev) => ({ ...prev, color }))
  }, [])

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])

  const pleaseRender = () => forceRender({})

  return (
    <div className='welcome'>
      <div onClick={pleaseRender}>Please Render Welcome</div>
      <ThemContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemContext.Provider>
    </div>
  )
}

const Label = React.memo(() => {
  console.log('Lable Re-Render')
  const { theme, onChangeTheme } = useContext(ThemContext)
  return (
    <label>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      Use Dark Mode
    </label>
  )
})

const Form = () => {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemContext)
  const className = 'panel-' + theme.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemContext)
  const className = 'button-' + theme.color
  return <button className={className}>{children}</button>
}
