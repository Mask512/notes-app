import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/NotesApp.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(<NotesApp />);