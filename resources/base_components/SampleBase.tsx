import React from 'react'
import Sample from '../components/Sample';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('sample-base');
const root = createRoot(container!);

root.render(
    <Sample />
);