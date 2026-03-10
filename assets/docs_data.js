/**
 * Bundled Documentation & Dashboard Data for AI Voice Call MVP
 */
const docsData = [
  {
    id: "status",
    title: "Project Health Dashboard",
    category: "System",
    type: "dashboard",
    overallProgress: 52,
    phases: [
      {
        id: "ph1",
        title: "✅ Phase 1: Foundation (100% Done)",
        status: "Done",
        progress: 100,
        icon: "fa-cubes",
        details: [
          { text: "Initial FastAPI project structure", status: "completed" },
          { text: "Database Schema design (SQL Server compatible)", status: "completed" },
          { text: "Alembic migration setup", status: "completed" },
          { text: "Environment configuration management", status: "completed" }
        ]
      },
      {
        id: "infra",
        title: "⚠️ Critical Infrastructure & Constraints",
        status: "Action Required",
        progress: 40,
        icon: "fa-server",
        details: [
          {
            text: "ElevenLabs: Tier Upgrade Required",
            status: "ongoing",
            progress: 20,
            subItems: [
              "Free tier currently limited and credits are running out",
              "Hindi language support requires Paid version for high-quality synthesis",
              "Need paid tier for custom voice cloning and higher stability during peak load"
            ]
          },
          {
            text: "LLM: Transitioning Groq -> ChatGPT Paid",
            status: "ongoing",
            progress: 10,
            subItems: [
              "Major Priority: Resolve latency and response delays immediately",
              "Groq AI currently experiencing slow response/latency issues in production",
              "Exchanging for ChatGPT-4o Paid for much faster, reliable responses",
              "Ensuring better conversational understanding and logic consistency"
            ]
          },
          {
            text: "System Security & Redundancy",
            status: "ongoing",
            progress: 15,
            subItems: [
              "API Key Rotation: Need automated vault for rotating third-party secrets",
              "Backup Providers: Implementing failover STT/TTS in case of API outages"
            ]
          }
        ]
      },
      {
        id: "ph2",
        title: "🚀 Phase 2: AI Voice Engine & Telephony",
        status: "Ongoing",
        progress: 49,
        icon: "fa-microphone-lines",
        details: [
          {
            text: "Deepgram & STT Optimization",
            status: "ongoing",
            progress: 65,
            subItems: [
              "Real-time transcription (Working smoothly)",
              "Silence Detection & End-pointing: Refining for faster turn-around",
              "Ambient Noise Filter: Need better isolation for noisy environments"
            ]
          },
          {
            text: "LLM Orchestration & Streaming",
            status: "ongoing",
            progress: 55,
            subItems: [
              "Incremental Response Handling: (Sentence-by-sentence logic working)",
              "Context Retention: Ensuring AI remembers the objective across 15+ turns",
              "Latency Monitoring: Real-time tracking of token-per-second speed"
            ]
          },
          {
            text: "ElevenLabs & Audio Playback",
            status: "ongoing",
            progress: 45,
            subItems: [
              "Flash v2.5 Integration for minimal TTS delay",
              "Audio Buffer Management: Preventing jitter on slow networks",
              "Codec Optimization: Investigating Opus for improved clarity"
            ]
          },
          {
            text: "Twilio & Barge-in Handling",
            status: "ongoing",
            progress: 35,
            subItems: [
              "Immediate stream cancellation 'clear' event (Working)",
              "Barge-in VAD: Tuning sensitivity to prevent accidental self-interruption",
              "Call Record Post-Processing: Auto-sentiment analysis on hang-up"
            ]
          }
        ]
      },
      {
        id: "ph3",
        title: "📊 Phase 3: Management & UI Dashboard",
        status: "Ongoing",
        progress: 60,
        icon: "fa-gauge-high",
        details: [
          {
            text: "Authentication & Workspace",
            status: "completed",
            subItems: [
              "Google OAuth & Email OTP logic verified",
              "Need Role-Based Access Control (RBAC) for team management"
            ]
          },
          {
            text: "Campaign & Lead Management",
            status: "ongoing",
            progress: 40,
            subItems: [
              "Lead CSV Importer: Basic functionality working",
              "Campaign Scheduler: Ability to set 'Call Windows' (Office hours only)",
              "Real-time Call Monitor: Visualizing active calls on the map"
            ]
          },
          {
            text: "Analytics & Reporting",
            status: "ongoing",
            progress: 20,
            subItems: [
              "Automated Summary Generation: Using GPT-4 for call takeaways",
              "Export Engine: Download call transcripts and metadata in CSV/JSON"
            ]
          }
        ]
      },
      {
        id: "ph4",
        title: "🔮 Phase 4: Intelligence & Scaling",
        status: "Planned",
        progress: 15,
        icon: "fa-brain",
        details: [
          {
            text: "Fine-tuning & Advanced LLMs",
            status: "planned",
            subItems: [
              "Vertical Specific Knowledge: Training models for Real Estate/Sales niches",
              "Multimodal: AI ability to interact with web elements during calls"
            ]
          },
          {
            text: "Enterprise Features",
            status: "planned",
            subItems: [
              "Human-in-the-loop Escalation: Intelligent routing to live agents",
              "Voice Biometrics: Identifying returning callers by voice print",
              "PCI Compliant Payments: Secure handling of credit card info via audio"
            ]
          }
        ]
      }
    ]
  }
];

export default docsData;
