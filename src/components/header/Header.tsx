import React, { useState } from 'react'
import s from './s.module.scss'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
type Messages = {
  id: number
  type:'AI' | 'human'
  message: string
}[]

const Header = () => {

  const [messages, setMessages] = useState<Messages>([
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:`orem1. Never give anyone your login details, seed phrase, or private key. Your wallet address is public knowledge and all anyone would need to know.

      2. Never sign any transaction you are unsure of.
      
      3. Never give out private info over DM. The Web3athon Admin team will never reach out to you asking for crypto, money, or your wallet seed phrase. Anyone that does should be considered an imposter and blocked.
      
      4. Never click any unknown links in your direct message`
    },
    {
      id:1,
      type:'human',
      message: 'how canb  I be pñasd inspd odnf?'
    },
    {
      id:2,
      type:'AI',
      message:"`<section className={s.section} >`"
    },
  ])


  return (
    <section className={s.section} >
      <div className={s.container} >
      {
        messages && messages.map((v, i)=>(
          <div key={v.id} className={[v.type === 'AI' ? s.aiMessage : s.humanMessage, s.message].join(' ') } >
            <ReactMarkdown>
              {v.message}
            </ReactMarkdown>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Header