import React from 'react';
import './LandingPage.css';
import logoWhite from '../assets/logo-white.svg';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logoWhite} alt="SquareGen" className="logo-image" />
        </div>
        <h1 className="header-tagline">LLM-based<br />Credit Decisioning</h1>
      </header>

      {/* Contact Info Bar */}
      <section className="contact-bar">
        <div className="contact-item">
          <span className="contact-label">Contact</span>
          <a href="mailto:contact@squaregen.ai" className="contact-link">contact@squaregen.ai</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Hiring</span>
          <a href="mailto:hiring@squaregen.ai" className="contact-link">hiring@squaregen.ai</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Location</span>
          <span className="contact-value">Delaware</span>
        </div>
      </section>

      {/* Main Content - Single Manifesto */}
      <main className="main-content">
        {/* Manifesto Title */}
        <section className="manifesto-header">
          <h2>The Semantic Credit Thesis</h2>
        </section>

        {/* Manifesto Content */}
        <article className="manifesto">
          <p>
            For decades, traditional machine learning has served the financial world well. 
            Logistic regression, gradient boosting, and ensemble methods have built the foundation 
            of modern credit scoring. Yet even the best models plateau around 0.70 AUC. This is not 
            a failure of effort—it is simply a limit of architecture.
          </p>

          <p>
            Classical approaches treat each applicant as a row of numbers—tabular, disconnected, 
            and context-free. They excel at finding patterns in structured data, but they cannot 
            read between the lines. They predict, but they do not understand the story.
          </p>

          <p className="emphasis">
            We believe the next leap in credit intelligence comes not from replacing what works, 
            but from adding what's missing: narrative understanding.
          </p>

          <p>
            SquareGen builds on top of proven methodologies by introducing a semantic layer. 
            We transform static tabular data into natural language that Large Language Models 
            can reason through. "Days Past Due: 30" becomes context—a story that can be 
            interpreted, not just computed.
          </p>

          <p>
            By encoding data into tokens processed by specialized adapters, we unlock a new 
            dimension of analysis. This is Semantic Scoring: the ability to distinguish between 
            a temporary liquidity crunch and a structural solvency crisis—nuances that numbers 
            alone cannot capture.
          </p>

          <p>
            Our Fine-Tuned LLMs work alongside traditional models, not against them. They add 
            interpretability without sacrificing rigor. They provide rationales for every decision, 
            turning black-box outputs into transparent insights.
          </p>

          <p>
            The result? We enhance what already works and push performance further.
          </p>

          <div className="metrics">
            <div className="metric-item">
              <span className="metric-label">The Lift</span>
              <span className="metric-text">Breaking the 0.80 AUC barrier where traditional methods plateau.</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">The Precision</span>
              <span className="metric-text">Achieving AUCs of 0.92 in microfinance applications.</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">The Recovery</span>
              <span className="metric-text">Semantic reasoning pushes performance from 0.68 to 0.80.</span>
            </div>
          </div>

          <p>
            The dilemma of the lender has always been the trade-off between the precision of a 
            human underwriter and the speed of an algorithm. We bridge this gap by deploying the 
            Analyst in the Loop at infinite scale.
          </p>

          <p>
            Our models combine the pattern recognition of classical ML with the contextual 
            understanding of language models. We don't just predict if a client will default 
            in the next 12 months—we generate the certainty required to say "Yes" to the 
            84% of clients others miss.
          </p>

          <p className="closing">
            Code is reasoning. Credit is language. The future is semantic.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="mailto:contact@squaregen.ai">Contact</a>
          <span className="separator">|</span>
          <a href="mailto:hiring@squaregen.ai">Hiring</a>
        </div>
        <div className="copyright">
          {new Date().getFullYear()} - SquareGen
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
