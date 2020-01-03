import React, { Component } from "react";
import "./Coaches.css";

const Coaches = () => {
  return (
    <div>
      <div className="banner">
        <div className="d-flex justify-content-center align-items-center blue-overlay">
          <h1 className="section-header">Meet The Coaches</h1>

          <nav aria-label="breadcrumb">
          <ol class="breadcrumb divider-header">
            <li class="breadcrumb-item">
                Your Team
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Your Coaches
            </li>
          </ol>
        </nav>
        </div>
        
      </div>
    </div>
  );
};

export default Coaches;
