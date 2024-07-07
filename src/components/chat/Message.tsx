'use client'

import { cn } from '@/lib/utils'
import { ExtendedMessage } from '@/types/message'
import { Icons } from '../Icons'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'
import { forwardRef, useEffect, useState } from 'react'
import Questions from "./Questions"

interface MessageProps {
  message: ExtendedMessage
  isNextMessageSamePerson: boolean
}

const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ message, isNextMessageSamePerson }, ref) => {
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
      // Set a timeout to update the state after 3 seconds
      const timer = setTimeout(() => {
        setShowQuestions(true);
      }, 6000);
  
      // Cleanup the timer if the component unmounts before the timeout completes
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <div>
      <div
        ref={ref}
        className={cn('flex items-end', {
          'justify-end': message.isUserMessage,
        })}>
          {/* icon */}
        <div
          className={cn(
            'relative flex h-6 w-6 aspect-square items-center justify-center',
            {
              'order-2 bg-blue-600 rounded-sm':
                message.isUserMessage,
              'order-1 rounded-sm':
                !message.isUserMessage,
              invisible: isNextMessageSamePerson,
            }
          )}>
          {message.isUserMessage ? (
            <Icons.user className='fill-zinc-200 text-zinc-200 h-3/4 w-3/4' />
          ) : (
            <Icons.bot className='h-3/4 w-3/4' />
          )}
        </div>

        <div
          className={cn(
            'flex flex-col space-y-2 text-base max-w-md mx-2',
            {
              'order-1 items-end': message.isUserMessage,
              'order-2 items-start': !message.isUserMessage,
            }
          )}>
          <div
            className={cn(
              'px-4 py-2 rounded-lg inline-block rounded-2xl',
              {
                'bg-[#e5e7eb]':
                  message.isUserMessage,
                'bg-acquaspring-500 text-gray-900':
                  !message.isUserMessage,
              }
            )}>
            {typeof message.text === 'string' ? (
              <ReactMarkdown
                className={cn('prose', {
                  'text-gray-700': message.isUserMessage,
                })}>
                {message.text}
              </ReactMarkdown>
            ) : (
              message.text
            )}
            {message.id !== 'loading-message' ? (
              <div
                className={cn(
                  'text-xs select-none mt-2 w-full text-right',
                  {
                    'text-zinc-500': !message.isUserMessage,
                    'text-gray-700': message.isUserMessage,
                  }
                )}>
                {format(
                  new Date(message.createdAt),
                  'HH:mm'
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {!message.isUserMessage && showQuestions && <Questions />}
      </div>
    )
  }
)

Message.displayName = 'Message'

export default Message
