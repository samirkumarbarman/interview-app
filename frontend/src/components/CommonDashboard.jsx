import React from 'react';

const CommonDashboard = ({ userType }) => {
  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <p>Common dashboard content for both candidates and interviewers.</p>
      {userType === 'interviewer' && (
        <div>
          <h2>Interviewer Specific Content</h2>
          <p>Extra fields and options for interviewers.</p>
        </div>
      )}
    </div>
  );
};

export default CommonDashboard;