import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="logo">SQUAREGEN</div>
        <div className="header-tagline">LLM-based Credit Decisioning</div>
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

      {/* Main Content */}
      <main className="main-content">
        {/* Thesis Title */}
        <section className="thesis-title">
          <h1>THE SEMANTIC CREDIT THESIS</h1>
        </section>

        {/* Section 01 */}
        <section className="thesis-section">
          <div className="section-number">01.</div>
          <div className="section-content">
            <h2>The Limit of Regression</h2>
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
          </div>
        </section>

        {/* Section 02 */}
        <section className="thesis-section">
          <div className="section-number">02.</div>
          <div className="section-content">
            <h2>From Tabular to Textual</h2>
            <p>
              SquareGen introduces a fundamental shift in the substrate of risk analysis. 
              We do not just process variables; we read profiles.
            </p>
            <p>
              Our architecture transforms static tabular data into natural language. We translate 
              "Days Past Due: 30" into a semantic context that a Large Language Model can reason through. 
              By encoding tabular data into tokens processed by specialized adapters, we force the model 
              to behave less like a calculator and more like a master analyst.
            </p>
            <p className="emphasis">
              This is Semantic Scoring. It is the difference between seeing a credit score drop and 
              understanding that a client is navigating a temporary liquidity crunch versus a structural solvency crisis.
            </p>
          </div>
        </section>

        {/* Section 03 */}
        <section className="thesis-section">
          <div className="section-number">03.</div>
          <div className="section-content">
            <h2>The Reasoning Engine</h2>
            <p>
              The era of the "Probability of Default" as a blind percentage is over. 
              We build specialized "brains"—Fine-Tuned LLMs equipped with trainable adapters.
            </p>
            <p>
              These agents do not hallucinate; they diagnose. They are optimized by loss functions 
              specifically designed to detect payment patterns in historical data. The result is a 
              system that can explain its decision, offering a rationale for every approval or rejection.
            </p>
            <p className="emphasis">
              We have proven that semantic interpretability leads to mathematical superiority.
            </p>
            
            <div className="metrics-grid">
              <div className="metric">
                <div className="metric-label">The Lift</div>
                <div className="metric-value">
                  We consistently break the 0.80 AUC barrier, outperforming XGBoost and classical rules.
                </div>
              </div>
              <div className="metric">
                <div className="metric-label">The Precision</div>
                <div className="metric-value">
                  In microfinance, we have achieved AUCs of 0.92 against traditional rule-based systems.
                </div>
              </div>
              <div className="metric">
                <div className="metric-label">The Recovery</div>
                <div className="metric-value">
                  Where models stagnate at 0.68, semantic reasoning pushes performance to 0.80.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 */}
        <section className="thesis-section">
          <div className="section-number">04.</div>
          <div className="section-content">
            <h2>Intelligence at Scale</h2>
            <p>
              The dilemma of the lender has always been the trade-off between the precision of a 
              human underwriter and the speed of an algorithm.
            </p>
            <p>
              We solve this by deploying the Analyst in the Loop at infinite scale. Our models 
              provide the separability of a human expert with the throughput of a machine. We do 
              not just predict if a client will default in the next 12 months; we generate the 
              certainty required to say "Yes" to the 84% of clients others miss.
            </p>
            <p className="manifesto">
              Code is reasoning. Credit is language. The future is semantic.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="mailto:contact@squaregen.ai">Contact</a>
          <span className="separator">|</span>
          <a href="mailto:hiring@squaregen.ai">Hiring</a>
        </div>
        <div className="copyright">
          SquareGen © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
