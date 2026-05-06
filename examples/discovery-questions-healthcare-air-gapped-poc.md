# Example: Discovery Questions for Healthcare Air-Gapped POC

> Based on: [Discovery Questions](../templates/discovery-questions.md)  
> Scenario: Sanitized healthcare provider evaluating an air-gapped POC for clinical operations analytics.

## Environment & Infrastructure

- Which clinical data systems need to be represented in the POC, and will sample data be synthetic, masked, or production-derived?
- What Kubernetes distribution is approved for the isolated lab environment?
- Is the POC environment fully air-gapped, or is there a controlled transfer point for approved artifacts?
- Who owns the offline container registry, and what is the image promotion process from staging to the isolated network?
- Are Helm charts, container images, license files, and SBOMs all required in the security review bundle?
- What CI/CD tooling, if any, is available inside the air-gapped environment?

## Security & Compliance

- Which HIPAA controls are in scope for the POC, and which are deferred until production design?
- Does the security team require vulnerability scan results before artifacts can enter the isolated network?
- Who approves removable media or transfer packages for import into the lab?
- Are there restrictions on telemetry, crash reporting, or support bundles leaving the environment?
- What audit evidence must be captured during deployment and validation?

## Timeline & Stakeholders

- What clinical or operational deadline is driving the evaluation date?
- Who signs off on technical validation: platform engineering, security, clinical informatics, or all three?
- When are the next change windows for importing artifacts into the isolated environment?
- Has the team evaluated other vendors in an air-gapped model, and where did those evaluations stall?

## Success Criteria

- Can the platform deploy from internally hosted artifacts with no external network calls?
- Can designated users run the top three analytics workflows against sanitized test data?
- Can platform engineering patch or roll back the deployment using the same offline package process?
- Can security confirm no unexpected egress attempts during baseline usage?

## Operational Readiness

- Who will own day-two operations if the POC moves to production?
- What monitoring stack is approved inside the isolated network?
- How are offline updates scheduled, tested, and approved today?
- What support path is acceptable when logs or diagnostics cannot leave the environment directly?
