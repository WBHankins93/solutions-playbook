## Air-Gapped Transfer Mechanism Decision Matrix

> Full context: [environments/air-gapped.md](../../environments/air-gapped.md)

### USB / Physical Media

**When to Use:**
- Small to medium artifact sizes (< 50GB)
- High security requirements
- No network connectivity available
- One-time or infrequent transfers

**Considerations:**
- Size limitations
- Approval process for physical media
- Encryption requirements
- Transfer time

### Secure File Transfer (SFTP/SCP)

**When to Use:**
- Medium to large artifact sizes
- Scheduled connectivity windows
- Regular update requirements
- Network path available

**Considerations:**
- Connectivity window timing
- Bandwidth limitations
- Transfer verification
- Approval process

### Secure Network Transfer (VPN/Dedicated Link)

**When to Use:**
- Large artifact sizes
- Frequent updates needed
- Real-time troubleshooting support
- Dedicated secure connection

**Considerations:**
- Setup time and approval
- Bandwidth and latency
- Security requirements
- Ongoing maintenance

### Decision Factors

- Artifact size → Larger = Network transfer preferred
- Frequency → More frequent = Network transfer preferred
- Security level → Higher = Physical media preferred
- Timeline → Tighter = Physical media (faster approval)
- Update needs → Frequent updates = Network transfer

