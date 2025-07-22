import React from 'react';
import Navigation from '../components/Navigation';
import Awards from '../components/Awards';

const AwardsPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <Navigation />
    <Awards />
  </div>
);

export default AwardsPage; 