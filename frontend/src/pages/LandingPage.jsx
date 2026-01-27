import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="logo">SquareGen</div>
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
            For decades, the financial world has accepted a ceiling. The industry standard for 
            model performance (AUC) hovers at 0.70. This is not a limit of data; it is a limit of architecture.
          </p>

          <p>
            Traditional machine learning treats a human life as a row of numbers—tabular, disconnected, 
            and silent. It relies on correlation without causation. It predicts, but it does not understand. 
            When a model cannot explain why, it is essentially guessing.
          </p>

          <p className="emphasis">
            We reject the black box. We believe that true credit intelligence does not come from crunching 
            more numbers, but from understanding the narrative behind them.
          </p>

          <p>
            SquareGen introduces a fundamental shift in the substrate of risk analysis. 
            We do not just process variables; we read profiles. Our architecture transforms static tabular 
            data into natural language. We translate "Days Past Due: 30" into a semantic context that a 
            Large Language Model can reason through.
          </p>

          <p>
            By encoding tabular data into tokens processed by specialized adapters, we force the model 
            to behave less like a calculator and more like a master analyst. This is Semantic Scoring. 
            It is the difference between seeing a credit score drop and understanding that a client is 
            navigating a temporary liquidity crunch versus a structural solvency crisis.
          </p>

          <p>
            The era of the "Probability of Default" as a blind percentage is over. We build specialized 
            "brains"—Fine-Tuned LLMs equipped with trainable adapters. These agents do not hallucinate; 
            they diagnose. They are optimized by loss functions specifically designed to detect payment 
            patterns in historical data.
          </p>

          <p>
            The result is a system that can explain its decision, offering a rationale for every approval 
            or rejection. We have proven that semantic interpretability leads to mathematical superiority.
          </p>

          <div className="metrics">
            <div className="metric-item">
              <span className="metric-label">The Lift</span>
              <span className="metric-text">We consistently break the 0.80 AUC barrier, outperforming XGBoost and classical rules.</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">The Precision</span>
              <span className="metric-text">In microfinance, we have achieved AUCs of 0.92 against traditional rule-based systems.</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">The Recovery</span>
              <span className="metric-text">Where models stagnate at 0.68, semantic reasoning pushes performance to 0.80.</span>
            </div>
          </div>

          <p>
            The dilemma of the lender has always been the trade-off between the precision of a 
            human underwriter and the speed of an algorithm. We solve this by deploying the Analyst 
            in the Loop at infinite scale.
          </p>

          <p>
            Our models provide the separability of a human expert with the throughput of a machine. 
            We do not just predict if a client will default in the next 12 months; we generate the 
            certainty required to say "Yes" to the 84% of clients others miss.
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
