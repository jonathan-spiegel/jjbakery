import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-header">About Us</h1>
        <p className="about-para">
          {`My name is Jacqueline Spiegel, formerly, Luxenberg. Since I was a young girl, I always enjoyed the art of baking.
          I always looked forward to Purim time in my home.  Before Purim, my Mom would call my sister and I to the kitchen to make hamantaschen.
          She would prop me on a kitchen chair because I was too short for the countertop and she’d place a tiny ball of dough in front of me,
          which at the time seemed so large. We always made the biggest mess, an essential outcome when I got involved. She’d only let me
          make a few chocolate chip hamantaschen, because my father only liked the apricot and prune ones...ew.`}
          <br/>
          <br/>
          {`Fast forwarding a couple of years, I became quite the home baker. Every opportunity my family had guests, I baked.
          I tried a wide array of different desserts. I scrolled through Pinterest all day and night for all kinds of cool
          recipes, ultimately trying dozens of ways to alter an original idea.`}
          <br/>
          <br/>
          {`As I moved my way into college, my passion for baking only grew.
          I transferred out of New York University to pursue a hands on Food Studies major in The New School for Public Engagement.
          The New School allowed me to spend my last semester studying Professional Pastry Arts at The International Culinary Center
          (formerly the French Culinary Institute). There, I graduated with a degree in Professional Pastry Arts and only wish to share
          the love and passion baking gives me with all of you!`}
        </p>
      </div>
    );
  }
}
