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
        id: "ph2",
        title: "🚀 Phase 2: AI Voice AI & Telephony",
        status: "Ongoing",
        progress: 49,
        icon: "fa-microphone-lines",
        details: [
          {
            text: "Deepgram STT Optimization",
            status: "ongoing",
            progress: 60,
            subItems: [
              "Basic real-time transcription (Working)",
              "Endpointing / Silence Detection (Ongoing Optimization)",
              "Filler word removal (Pending)"
            ]
          },
          {
            text: "OpenAI / Groq LLM Orchestration",
            status: "ongoing",
            progress: 50,
            subItems: [
              "Basic prompt handling (Working)",
              "Response Streaming / Chunking (Currently Optimizing)",
              "Context retention logic (Ongoing)"
            ]
          },
          {
            text: "ElevenLabs TTS Refinement",
            status: "ongoing",
            progress: 45,
            subItems: [
              "Flash v2.5 Integration (Working - Testing for Stability)",
              "Socket buffering for smooth audio (Currently Working)",
              "Latency reduction < 300ms (Goal)"
            ]
          },
          {
            text: "Twilio & Barge-in Handling",
            status: "ongoing",
            progress: 30,
            subItems: [
              "Bidirectional WebSocket streams (Working)",
              "Server-side VAD Detection (Currently Working)",
              "Immediate stream cancellation logic (In progress)"
            ]
          }
        ]
      },
      {
        id: "ph3",
        title: "📊 Phase 3: Management & UI",
        status: "Ongoing",
        progress: 60,
        icon: "fa-gauge-high",
        details: [
          { text: "Google OAuth & Email OTP Auth", status: "completed" },
          { text: "Agent Persona Manager", status: "completed" },
          { text: "Campaign Management (Scheduling pending)", status: "ongoing" },
          { text: "Lead Management UI", status: "ongoing" }
        ]
      },
      {
        id: "ph4",
        title: "🔮 Phase 4: Intelligence & Growth",
        status: "Planned",
        progress: 15,
        icon: "fa-brain",
        details: [
          { text: "Sentiment & Call Analysis (Basic summaries done)", status: "ongoing" },
          { text: "WebRTC Browser Calling (Plan: Direct agent-to-customer UI)", status: "planned" },
          { text: "Voice Payments (Plan: PCI-compliant audio masking)", status: "planned" },
          { text: "Human-in-the-loop Escalation", status: "planned" },
          { text: "Multi-channel Sync (WhatsApp/Email)", status: "planned" }
        ]
      }
    ]
  }
];

export default docsData;
