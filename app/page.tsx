import React from 'react';
import { topics } from '@/app/data/topics';
import StudyView from '@/components/StudyView';

export default function Home() {
  return <StudyView topics={topics} />;
}
