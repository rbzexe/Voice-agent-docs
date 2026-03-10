import docsData from './docs_data.js';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Rendering the dashboard by default in the new single-page layout
    function init() {
        const dashboardDoc = docsData.find(d => d.id === 'status');
        if (dashboardDoc) {
            renderDashboard(dashboardDoc);
        }
    }

    function renderDashboard(data) {
        let html = `
            <div class="dashboard-container">
                <!-- Status Banner moved inside index.html for better layout control, but keeping a smaller version here if needed -->
                <div class="space-y-8 mt-12">
        `;

        data.phases.forEach((phase) => {
            const isPhase2 = phase.id === 'ph2';
            html += `
                <div class="phase-card ${isPhase2 ? 'border-yellow-200 shadow-yellow-50/50' : ''}" id="${phase.id}">
                    <div class="phase-header">
                        <div class="phase-icon ${isPhase2 ? 'bg-yellow-50 text-yellow-500' : ''}">
                            <i class="fa-solid ${phase.icon}"></i>
                        </div>
                        <div class="phase-info">
                            <h3 class="flex items-center gap-3">
                                ${phase.title}
                                <span class="status-pill pill-${phase.status.toLowerCase()} text-[10px] py-1 px-3">${phase.status}</span>
                            </h3>
                            <div class="flex items-center gap-3 mt-2">
                                <div class="w-48 bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div class="bg-primary h-full rounded-full transition-all duration-1000" style="width: ${phase.progress}%"></div>
                                </div>
                                <span class="text-[11px] font-black text-slate-400">${phase.progress}%</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-end gap-1">
                            <i class="fa-solid fa-chevron-down text-slate-300 chevron-icon transition-transform duration-300"></i>
                            ${isPhase2 ? '<span class="text-[9px] font-black text-yellow-600 uppercase tracking-tighter animate-pulse">Action Required</span>' : ''}
                        </div>
                    </div>
                    <div class="phase-content">
                        <div class="inheritance-tree">
                            ${phase.details.map((detail, index) => {
                const isOngoing = detail.status === 'ongoing';
                return `
                                <div class="detail-item ${isOngoing ? 'border-yellow-100 bg-yellow-50/20' : ''}" style="transition-delay: ${index * 150}ms">
                                    <div class="flex justify-between items-start mb-3">
                                        <div>
                                            <span class="font-bold text-slate-700 text-sm">${detail.text}</span>
                                            ${isOngoing ? '<span class="ml-2 text-[9px] font-black text-yellow-600 uppercase border border-yellow-200 px-2 py-0.5 rounded-md">Currently Working</span>' : ''}
                                        </div>
                                        <div class="flex items-center gap-3">
                                            ${detail.progress ? `<span class="perc-badge ${isOngoing ? 'bg-yellow-100 text-yellow-700' : ''}">${detail.progress}%</span>` : ''}
                                            ${detail.status === 'completed' ? '<i class="fa-solid fa-circle-check text-green-500 text-lg"></i>' : ''}
                                            ${isOngoing ? '<i class="fa-solid fa-hourglass-half text-yellow-500 text-sm animate-spin-slow"></i>' : ''}
                                        </div>
                                    </div>
                                    ${detail.subItems ? `
                                        <div class="sub-items-container">
                                            ${detail.subItems.map(si => `
                                                <div class="sub-item">
                                                    <i class="fa-solid fa-arrow-turn-up rotate-90 text-primary opacity-40"></i>
                                                    <span>${si}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : ''}
                                    ${detail.status === 'planned' ? '<p class="text-[10px] text-slate-400 mt-2 font-medium italic">Pending architectural sign-off...</p>' : ''}
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        content.innerHTML = html;

        // Add Click Interactions
        document.querySelectorAll('.phase-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const isExpanded = card.classList.contains('expanded');

                // Collapse others
                document.querySelectorAll('.phase-card').forEach(c => {
                    if (c !== card) c.classList.remove('expanded');
                });

                card.classList.toggle('expanded');
            });
        });

        // Auto-expand Infrastructure or Phase 2 for visibility if it's the current focus
        setTimeout(() => {
            const infra = document.getElementById('infra');
            const ph2 = document.getElementById('ph2');
            if (infra) infra.classList.add('expanded');
            else if (ph2) ph2.classList.add('expanded');
        }, 500);
    }

    init();
});
