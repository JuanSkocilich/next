import { FC, ReactNode } from 'react'

interface MyComponentProps {
  children: ReactNode;
}

export const DarkLayout: FC<MyComponentProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <div>
        {children}
      </div>
    </div>
  )
}
