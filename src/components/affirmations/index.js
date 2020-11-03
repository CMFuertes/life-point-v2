import React from "react";

module.exports = function(sequelize, DataTypes) {
    const Affirmation = sequelize.define("Affirmation", {
      quote: { type: DataTypes.STRING }
    });
  
    return Affirmation;
  };
  