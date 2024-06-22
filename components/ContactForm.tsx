'use client';

import React, { FormEvent, useState } from 'react';
import { TextField } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from '@mui/material/styles';

const customTheme = (outerTheme: Theme) =>
  createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: 'white',
            },
          },
        },
      },
    },
  });

const ContactForm = () => {
  const outerTheme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:3000/api/mail', {
        // method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (e) {
      console.log('ERR', e);
    }
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <h2 className='text-2xl font-bold mb-8 pb-28 text-white'>Contact Me</h2>
      <div className='mb-6'>
        <TextField
          placeholder='Your name'
          label='Your name'
          className='w-full text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-6'>
        <TextField
          placeholder='Your email'
          label='Your email'
          className='w-full text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-6'>
        <TextField
          placeholder='Message'
          multiline
          rows={10}
          label='Message'
          className='w-full text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </ThemeProvider>
  );
};

export default ContactForm;
