const state = {
  view: "dashboard",
  equipmentSearch: "",
  workOrderSearch: "",
  equipmentStatus: "Todas",
  equipmentStatus: "Todos",
  equipmentCriticality: "Todos",
  workOrderStatus: "Todos",
  workOrderPriority: "Todos",
  qrResult: null,
  qrScanActive: false,
  qrScanError: null,
  audit: [
    "Scan QR registado por Utilizador",
    "OT WO-2026-014 movida para Aguardando aprovação",
    "Equipamento EQ-002 atualizado por Utilizador"
  ],
  equipment: [
    {
      id: "e1", code: "EQ-001", qr_code: "QR-001", name: "Equipamento 1",
      description: "Equipamento genérico de exemplo para gestão de manutenção.", serial_number: "SN-001",
      manufacturer_id: "Fabricante A", model: "Modelo A", equipment_type_id: "Categoria A", location_id: "Área 1",
      criticality: "Alta", acquisition_date: "2024-01-10", warranty_end_date: "2026-01-10",
      status: "Ativo", notes: "Registo inicial do equipamento.", created_at: "2026-05-02 09:12",
      created_by: "Utilizador", updated_at: "2026-05-18 14:20", updated_by: "Utilizador",
      deleted_at: "", deleted_by: "", hasPlan: true, operatingHours: 1840, failures: 5, repairHours: 34
    },
    {
      id: "e2", code: "EQ-002", qr_code: "QR-002", name: "Equipamento 2",
      description: "Equipamento genérico para manutenção preventiva.", serial_number: "SN-002",
      manufacturer_id: "Fabricante B", model: "Modelo B", equipment_type_id: "Categoria B", location_id: "Área 2",
      criticality: "Média", acquisition_date: "2023-05-12", warranty_end_date: "2027-05-12",
      status: "Manutenção", notes: "Em revisão técnica.", created_at: "2026-04-24 11:42",
      created_by: "Utilizador", updated_at: "2026-05-19 10:03", updated_by: "Utilizador",
      deleted_at: "", deleted_by: "", hasPlan: true, operatingHours: 1260, failures: 8, repairHours: 49
    },
    {
      id: "e3", code: "EQ-003", qr_code: "QR-003", name: "Equipamento 3",
      description: "Equipamento genérico para rastreamento de ordens.", serial_number: "SN-003",
      manufacturer_id: "Fabricante C", model: "Modelo C", equipment_type_id: "Categoria C", location_id: "Área 3",
      criticality: "Baixa", acquisition_date: "2022-08-04", warranty_end_date: "2026-08-04",
      status: "Ativo", notes: "Operacional.", created_at: "2026-03-15 08:10",
      created_by: "Utilizador", updated_at: "2026-05-16 12:35", updated_by: "Utilizador",
      deleted_at: "", deleted_by: "", hasPlan: false, operatingHours: 2140, failures: 6, repairHours: 28
    },
    {
      id: "e4", code: "EQ-004", qr_code: "QR-004", name: "Equipamento 4",
      description: "Equipamento genérico usado para teste de fluxo de trabalho.", serial_number: "SN-004",
      manufacturer_id: "Fabricante D", model: "Modelo D", equipment_type_id: "Categoria D", location_id: "Área 4",
      criticality: "Alta", acquisition_date: "2021-11-21", warranty_end_date: "2025-11-21",
      status: "Inativo", notes: "Retirado temporariamente de operação.", created_at: "2026-02-10 15:45",
      created_by: "Utilizador", updated_at: "2026-05-10 16:00", updated_by: "Utilizador",
      deleted_at: "", deleted_by: "", hasPlan: false, operatingHours: 860, failures: 3, repairHours: 17
    }
  ],
  workOrders: [
    {
      id: "w1", work_order_number: "WO-2026-014", equipment_id: "e2", maintenance_type: "Corretiva",
      priority: "Alta", status: "Aguardando aprovação", assigned_user_id: "Tiago Alves", vendor_id: "AeroParts Lda",
      quote_val: "2026-05-31 18:00", planned_start_date: "2026-05-22 09:00", actual_start_date: "",
      actual_end_date: "", estimated_cost: 2450, actual_cost: 0, resolution_notes: "",
      hours: 0, evidence: "Relatório de diagnóstico recebido", created_at: "2026-05-18 09:10",
      created_by: "Ana Costa", updated_at: "2026-05-19 10:18", updated_by: "Tiago Alves", deleted_at: "", deleted_by: ""
    },
    {
      id: "w2", work_order_number: "WO-2026-013", equipment_id: "e1", maintenance_type: "Preventiva",
      priority: "Crítica", status: "Em progresso", assigned_user_id: "João Matos", vendor_id: "",
      quote_val: "", planned_start_date: "2026-05-20 08:00", actual_start_date: "2026-05-20 08:22",
      actual_end_date: "", estimated_cost: 780, actual_cost: 610, resolution_notes: "Substituição de filtros em curso.",
      hours: 3.5, evidence: "Fotos anexadas", created_at: "2026-05-17 13:45",
      created_by: "Miguel Santos", updated_at: "2026-05-20 10:05", updated_by: "João Matos", deleted_at: "", deleted_by: ""
    },
    {
      id: "w3", work_order_number: "WO-2026-012", equipment_id: "e3", maintenance_type: "Preditiva",
      priority: "Média", status: "Concluída", assigned_user_id: "Rita Neves", vendor_id: "",
      quote_val: "", planned_start_date: "2026-05-12 14:00", actual_start_date: "2026-05-12 14:05",
      actual_end_date: "2026-05-12 17:10", estimated_cost: 430, actual_cost: 395, resolution_notes: "Vibração estabilizada e testes concluídos.",
      hours: 3.1, evidence: "Checklist e análise de vibração", created_at: "2026-05-11 09:22",
      created_by: "Ana Costa", updated_at: "2026-05-12 17:10", updated_by: "Rita Neves", deleted_at: "", deleted_by: ""
    },
    {
      id: "w4", work_order_number: "WO-2026-011", equipment_id: "e4", maintenance_type: "Corretiva",
      priority: "Baixa", status: "Encerrada", assigned_user_id: "Tiago Alves", vendor_id: "GroundFix",
      quote_val: "2026-05-15 18:00", planned_start_date: "2026-05-09 09:00", actual_start_date: "2026-05-09 09:30",
      actual_end_date: "2026-05-09 12:40", estimated_cost: 920, actual_cost: 880, resolution_notes: "Correia calibrada e sensor substituído.",
      hours: 3.2, evidence: "Relatório final anexado", created_at: "2026-05-08 10:12",
      created_by: "Rita Neves", updated_at: "2026-05-09 13:20", updated_by: "Miguel Santos", deleted_at: "", deleted_by: ""
    }
  ]
};

const viewTitles = {
  dashboard: "Dashboard e KPIs",
  equipment: "Equipamentos",
  workorders: "Ordens de Trabalho",
  closure: "Encerramento de OT",
  qr: "Scan de QR Code"
};

const root = document.getElementById("viewRoot");
const pageTitle = document.getElementById("pageTitle");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalBody = document.getElementById("modalBody");
const toast = document.getElementById("toast");

const slug = value => String(value || "").toLowerCase().replace(/\s+/g, "-");
const money = value => new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" }).format(value || 0);
const equipmentById = id => state.equipment.find(item => item.id === id);
const API_BASE = "http://localhost/ManagerPlus360/api.php";
let qrVideoStream = null;
let qrScanRequestId = null;
const qrScanCanvas = document.createElement('canvas');
const qrScanContext = qrScanCanvas.getContext('2d');

function isCameraSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

async function startQrScanner() {
  if (!isCameraSupported()) {
    state.qrScanError = 'Câmara não suportada neste navegador.';
    state.qrScanActive = false;
    render();
    return;
  }
  stopQrScanner();
  state.qrScanError = null;
  state.qrScanActive = true;
  render();
  const video = document.getElementById('qrVideo');
  if (!video) return;
  try {
    qrVideoStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    video.srcObject = qrVideoStream;
    video.setAttribute('playsinline', '');
    video.play();
    scanVideoFrame();
  } catch (error) {
    state.qrScanError = error.message || 'Não foi possível aceder à câmara.';
    state.qrScanActive = false;
    stopQrScanner();
    render();
  }
}

function stopQrScanner() {
  state.qrScanActive = false;
  if (qrScanRequestId) {
    cancelAnimationFrame(qrScanRequestId);
    qrScanRequestId = null;
  }
  if (qrVideoStream) {
    qrVideoStream.getTracks().forEach(track => track.stop());
    qrVideoStream = null;
  }
}

function scanVideoFrame() {
  const video = document.getElementById('qrVideo');
  if (!video || video.readyState !== video.HAVE_ENOUGH_DATA) {
    qrScanRequestId = requestAnimationFrame(scanVideoFrame);
    return;
  }
  qrScanCanvas.width = video.videoWidth;
  qrScanCanvas.height = video.videoHeight;
  qrScanContext.drawImage(video, 0, 0, qrScanCanvas.width, qrScanCanvas.height);
  const imageData = qrScanContext.getImageData(0, 0, qrScanCanvas.width, qrScanCanvas.height);
  const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'attemptBoth' });
  if (code && code.data) {
    handleQrDetected(code.data);
    return;
  }
  qrScanRequestId = requestAnimationFrame(scanVideoFrame);
}

function handleQrDetected(value) {
  stopQrScanner();
  scanQrValue(value);
}

function scanQrValue(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) {
    state.qrResult = { error: 'Introduza ou faça scan de um código QR antes de procurar.' };
    render();
    return;
  }
  const item = state.equipment.find(eq => eq.qr_code.toLowerCase() === trimmed.toLowerCase() || eq.code.toLowerCase() === trimmed.toLowerCase());
  state.qrResult = item || { error: 'QR inválido. O sistema não encontrou nenhum equipamento.' };
  if (item) state.audit.unshift(`Scan QR ${item.qr_code} registado`);
  render();
}

function scanQrFromFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      qrScanCanvas.width = image.width;
      qrScanCanvas.height = image.height;
      qrScanContext.drawImage(image, 0, 0, image.width, image.height);
      const imageData = qrScanContext.getImageData(0, 0, image.width, image.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'attemptBoth' });
      if (code && code.data) {
        handleQrDetected(code.data);
      } else {
        state.qrResult = { error: 'Imagem sem QR legível. Tente outra foto ou use a câmara.' };
        render();
      }
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function generateQrToken(code) {
  const base = String(code || 'MP360').trim().toUpperCase().replace(/\s+/g, '-').replace(/[^A-Z0-9\-]/g, '');
  return `${base}-${Date.now().toString().slice(-6)}`;
}

function createQrDataUrl(text, size = 192) {
  try {
    const qr = qrcode(0, 'M');
    qr.addData(String(text || 'MP360')); 
    qr.make();
    const moduleCount = qr.getModuleCount();
    const cellSize = Math.floor(size / moduleCount) || 1;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = moduleCount * cellSize;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    for (let row = 0; row < moduleCount; row += 1) {
      for (let col = 0; col < moduleCount; col += 1) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.warn('Falha a gerar QR code:', error);
    return '';
  }
}

function createQrPreviewHtml(value) {
  const dataUrl = createQrDataUrl(value);
  return `<div class="qr-preview"><img src="${dataUrl}" alt="QR ${value}"><span>${value}</span></div>`;
}

async function apiRequest(action, method = 'GET', data = null) {
  const url = `${API_BASE}?action=${encodeURIComponent(action)}`;
  const options = { method, headers: {} };
  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }
  const response = await fetch(url, options);
  const text = await response.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch (e) { throw new Error('Invalid JSON response from API'); }
  if (!response.ok) {
    const msg = json && json.error ? json.error : `API error ${response.status}`;
    throw new Error(msg);
  }
  return json;
}

async function loadStateFromApi() {
  try {
    const stateData = await apiRequest('state');
    if (Array.isArray(stateData.equipment)) state.equipment = stateData.equipment;
    if (Array.isArray(stateData.workOrders)) state.workOrders = stateData.workOrders;
    showToast('Dados carregados da base de dados externa.');
    render();
  } catch (error) {
    console.warn('Falha ao carregar API:', error);
    showToast('Não foi possível usar a base de dados externa. Usando dados locais.');
  }
}

async function saveEquipmentToApi(payload) {
  try {
    await apiRequest('saveEquipment', 'POST', payload);
  } catch (error) {
    console.warn('Falha ao gravar equipamento na API:', error);
    showToast('Erro ao gravar equipamento na base de dados externa: ' + (error.message || error));
  }
}

async function saveWorkOrderToApi(payload) {
  try {
    await apiRequest('saveWorkOrder', 'POST', payload);
  } catch (error) {
    console.warn('Falha ao gravar OT na API:', error);
    showToast('Erro ao gravar OT na base de dados externa: ' + (error.message || error));
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function openModal(title, eyebrow, body) {
  modalTitle.textContent = title;
  modalEyebrow.textContent = eyebrow;
  modalBody.innerHTML = body;
  modalBackdrop.hidden = false;
}

function closeModal() {
  modalBackdrop.hidden = true;
}

function setView(view) {
  if (state.view === 'qr' && view !== 'qr') {
    stopQrScanner();
  }
  state.view = view;
  pageTitle.textContent = viewTitles[view];
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  document.querySelector(".sidebar").classList.remove("open");
  render();
}

function kpiData() {
  const totalOperational = state.equipment.reduce((sum, item) => sum + Number(item.operatingHours || 0), 0);
  const failures = state.equipment.reduce((sum, item) => sum + Number(item.failures || 0), 0);
  const repairHours = state.equipment.reduce((sum, item) => sum + Number(item.repairHours || 0), 0);
  const repairs = state.workOrders.filter(item => ["Concluída", "Encerrada"].includes(item.status)).length || 1;
  const mtbf = failures ? totalOperational / failures : totalOperational;
  const mttr = repairs ? repairHours / repairs : 0;
  const availability = mtbf && mttr ? mtbf / (mtbf + mttr) * 100 : 100;
  const maintenanceCost = state.workOrders.reduce((sum, item) => {
    const actual = Number(item.actual_cost || 0);
    const estimated = Number(item.estimated_cost || 0);
    return sum + (actual > 0 ? actual : estimated);
  }, 0);
  const backlog = state.workOrders.filter(item => !["Encerrada", "Cancelada"].includes(item.status)).length;
  const slaCompliance = state.workOrders.length ? Math.round((state.workOrders.filter(item => item.status !== "Aguardando aprovação").length / state.workOrders.length) * 100) : 100;
  const failureRate = totalOperational ? failures / totalOperational * 1000 : 0;
  return { mtbf, mttr, availability, maintenanceCost, backlog, slaCompliance, failureRate };
}

function metric(label, value, detail, color) {
  return `<article class="panel metric" style="--metric-bg:${color}"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`;
}

function renderDashboard() {
  const k = kpiData();
  const activeWos = state.workOrders.filter(item => !["Encerrada", "Cancelada"].includes(item.status));
  root.innerHTML = `
    <div class="grid kpi-grid">
      ${metric("MTBF", `${k.mtbf.toFixed(1)}h`, "Tempo médio entre falhas", "#e4f5f4")}
      ${metric("MTTR", `${k.mttr.toFixed(1)}h`, "Tempo médio de reparação", "#e8f1fb")}
      ${metric("Disponibilidade", `${k.availability.toFixed(1)}%`, "MTBF / (MTBF + MTTR)", "#e7f4ec")}
      ${metric("Backlog OT", k.backlog, "Ordens ainda pendentes", "#fff0d8")}
    </div>
    <div class="grid two-col" style="margin-top:16px">
      <section class="panel">
        <div class="panel-head"><div><p class="eyebrow">KPIs</p><h2>Performance de manutenção</h2></div></div>
        <div class="panel-body chart">
          ${bar("Custo de manutenção", 82, money(k.maintenanceCost))}
          ${bar("Cumprimento SLA", k.slaCompliance, `${k.slaCompliance}%`)}
          ${bar("Taxa de falhas", Math.min(100, k.failureRate * 22), `${k.failureRate.toFixed(2)}/1000h`)}
          ${bar("Disponibilidade de equipamentos", k.availability, `${k.availability.toFixed(1)}%`)}
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><p class="eyebrow">Alertas</p><h2>Prioridade operacional</h2></div></div>
        <div class="panel-body timeline">
          ${activeWos.map(wo => `
            <div class="timeline-item">
              <span class="timeline-dot"></span>
              <div>
                <strong>${wo.work_order_number} · ${equipmentById(wo.equipment_id).name}</strong>
                <p>${wo.status} · ${wo.assigned_user_id || "Sem técnico"} · ${money(wo.estimated_cost)}</p>
              </div>
            </div>`).join("")}
        </div>
      </section>
    </div>
    <div class="grid two-col" style="margin-top:16px">
      ${renderEquipmentTable(state.equipment.slice().sort((a,b) => b.failures - a.failures).slice(0, 4), "Ranking de equipamentos críticos", false)}
      ${renderWorkOrderTable(activeWos, "Ordens pendentes", false)}
    </div>
  `;
}

function bar(label, percent, value) {
  return `<div class="bar-row"><strong>${label}</strong><div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, Math.min(100, percent))}%"></div></div><span class="muted">${value}</span></div>`;
}

function equipmentFilters(items) {
  return items.filter(item => {
    const q = state.equipmentSearch.toLowerCase();
    const matchesSearch = [item.code, item.qr_code, item.name, item.model, item.location_id].join(" ").toLowerCase().includes(q);
    const matchesStatus = state.equipmentStatus === "Todos" || item.status === state.equipmentStatus;
    const matchesCriticality = state.equipmentCriticality === "Todos" || item.criticality === state.equipmentCriticality;
    return matchesSearch && matchesStatus && matchesCriticality;
  });
}

function renderEquipment() {
  const items = equipmentFilters(state.equipment);
  root.innerHTML = `
    <div class="toolbar">
      <div class="filters">
        <input id="equipmentSearch" placeholder="Pesquisar equipamentos" value="${state.equipmentSearch}">
        <select id="equipmentStatus">${options(["Todos","Ativo","Inativo","Manutenção","Descartado"], state.equipmentStatus)}</select>
        <select id="equipmentCriticality">${options(["Todos","Baixa","Média","Alta","Crítica"], state.equipmentCriticality)}</select>
      </div>
      <button class="primary-action" id="newEquipment">+ Novo Equipamento</button>
    </div>
    ${renderEquipmentTable(items, "Inventário operacional", true)}
  `;
}

function renderEquipmentTable(items, title, actions) {
  return `
    <section class="panel">
      <div class="panel-head"><div><p class="eyebrow">Equipamento</p><h2>${title}</h2></div><span class="chip">${items.length} registos</span></div>
      <div class="panel-body table-wrap">
        ${items.length ? `<table>
          <thead><tr><th>Código</th><th>Equipamento</th><th>Localização</th><th>Criticidade</th><th>Estado</th><th>QR</th>${actions ? "<th></th>" : ""}</tr></thead>
          <tbody>
            ${items.map(item => `<tr>
              <td><strong>${item.code}</strong></td>
              <td>${item.name}<br><span class="muted">${item.model}</span></td>
              <td>${item.location_id}</td>
              <td><span class="badge criticality-${slug(item.criticality)}">${item.criticality}</span></td>
              <td><span class="badge ${slug(item.status)}">${item.status}</span></td>
              <td>${item.qr_code}</td>
              ${actions ? `<td><div class="row-actions"><button class="ghost" data-detail-equipment="${item.id}">Ver</button><button class="secondary-action" data-edit-equipment="${item.id}">Editar</button></div></td>` : ""}
            </tr>`).join("")}
          </tbody>
        </table>` : `<div class="empty-state">Nenhum equipamento encontrado para os filtros atuais.</div>`}
      </div>
    </section>`;
}

function workOrderFilters(items) {
  return items.filter(item => {
    const equipment = equipmentById(item.equipment_id);
    const q = state.workOrderSearch.toLowerCase();
    const matchesSearch = [item.work_order_number, equipment.name, item.status, item.priority, item.assigned_user_id].join(" ").toLowerCase().includes(q);
    const matchesStatus = state.workOrderStatus === "Todos" || item.status === state.workOrderStatus;
    const matchesPriority = state.workOrderPriority === "Todos" || item.priority === state.workOrderPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });
}

function renderWorkOrders() {
  const items = workOrderFilters(state.workOrders);
  root.innerHTML = `
    <div class="toolbar">
      <div class="filters">
        <input id="workOrderSearch" placeholder="Pesquisar OT, equipamento ou técnico" value="${state.workOrderSearch}">
        <select id="workOrderStatus">${options(["Todos","Rascunho","Planejada","Atribuída","Em progresso","Aguardando peças","Aguardando aprovação","Concluída","Encerrada","Cancelada"], state.workOrderStatus)}</select>
        <select id="workOrderPriority">${options(["Todos","Baixa","Média","Alta","Crítica"], state.workOrderPriority)}</select>
      </div>
      <button class="primary-action" id="newWorkOrder">+ Nova OT</button>
    </div>
    ${renderWorkOrderTable(items, "Gestão de ordens de trabalho", true)}
  `;
}

function renderWorkOrderTable(items, title, actions) {
  return `
    <section class="panel">
      <div class="panel-head"><div><p class="eyebrow">Ordem de Trabalho</p><h2>${title}</h2></div><span class="chip">${items.length} registos</span></div>
      <div class="panel-body table-wrap">
        ${items.length ? `<table>
          <thead><tr><th>Número</th><th>Equipamento</th><th>Tipo</th><th>Prioridade</th><th>Estado</th><th>Técnico</th><th>Custo</th>${actions ? "<th></th>" : ""}</tr></thead>
          <tbody>${items.map(item => `<tr>
            <td><strong>${item.work_order_number}</strong></td>
            <td>${equipmentById(item.equipment_id).name}</td>
            <td>${item.maintenance_type}</td>
            <td><span class="badge priority-${slug(item.priority)}">${item.priority}</span></td>
            <td><span class="badge ${slug(item.status)}">${item.status}</span></td>
            <td>${item.assigned_user_id || "Por atribuir"}</td>
            <td>${money(item.actual_cost || item.estimated_cost)}</td>
            ${actions ? `<td><div class="row-actions"><button class="ghost" data-detail-workorder="${item.id}">Ver</button><button class="secondary-action" data-progress-workorder="${item.id}">Avançar</button></div></td>` : ""}
          </tr>`).join("")}</tbody>
        </table>` : `<div class="empty-state">Nenhuma ordem encontrada para os filtros atuais.</div>`}
      </div>
    </section>`;
}

function renderClosure() {
  const candidates = state.workOrders.filter(item => ["Concluída", "Em progresso"].includes(item.status));
  root.innerHTML = `
    <div class="grid two-col">
      <section class="panel">
        <div class="panel-head"><div><p class="eyebrow">Encerramento</p><h2>Conclusão operacional e contabilística</h2></div></div>
        <div class="panel-body timeline">
          ${["Técnico conclui intervenção", "Sistema atualiza KPIs", "Sistema move OT para Encerrada", "Sistema atualiza histórico do equipamento", "Encerramento gera auditoria"].map(step => `
            <div class="timeline-item"><span class="timeline-dot"></span><div><strong>${step}</strong><p>Regra controlada antes do fecho definitivo.</p></div></div>`).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><p class="eyebrow">Pronto para encerrar</p><h2>OTs elegíveis</h2></div></div>
        <div class="panel-body">
          ${candidates.map(wo => closureCard(wo)).join("") || `<div class="empty-state">Não existem OTs prontas para encerramento.</div>`}
        </div>
      </section>
    </div>
  `;
}

function closureCard(wo) {
  const canClose = Boolean(wo.resolution_notes && wo.hours > 0 && (wo.actual_cost || wo.estimated_cost));
  return `<article class="detail-card" style="margin-bottom:12px">
    <strong>${wo.work_order_number} · ${equipmentById(wo.equipment_id).name}</strong>
    <p class="muted">${wo.resolution_notes || "Sem resolução registada"} · ${wo.hours}h · ${money(wo.actual_cost || wo.estimated_cost)}</p>
    ${canClose ? `<button class="primary-action" data-close-workorder="${wo.id}">Encerrar OT</button>` : `<div class="warning-box">Falta resolução, horas ou custos consolidados.</div>`}
  </article>`;
}

function renderQr() {
  const result = state.qrResult;
  root.innerHTML = `
    <div class="scan-stage">
      <section class="scanner">
        <div class="scanner-content">
          <h2>Leitor QR Code</h2>
          <p>Use a câmara ou carregue uma imagem do QR para abrir a ficha do equipamento.</p>
          ${state.qrScanActive ? `<video id="qrVideo" autoplay muted playsinline></video>` : `<div class="scanner-placeholder"><span>Sem leitura</span><p>Abra a câmara ou carregue um ficheiro de QR.</p></div>`}
          ${state.qrScanError ? `<div class="error-box" style="margin-top:16px">${state.qrScanError}</div>` : ''}
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><p class="eyebrow">Leitura</p><h2>Identificar equipamento</h2></div></div>
        <div class="panel-body">
          <div class="form-grid">
            <div class="field full"><label>Código QR ou código do equipamento</label><input id="qrInput" placeholder="Ex.: MP360-QR-APU-001 ou EQ-APU-001"></div>
          </div>
          <div class="form-actions"><button class="secondary-action" id="fillQr">Usar exemplo</button><button class="secondary-action" id="startCamera">${state.qrScanActive ? 'Parar câmara' : 'Abrir câmara'}</button><button class="secondary-action" id="uploadQr">Carregar imagem</button><button class="primary-action" id="scanQr">Procurar código</button></div>
          <input id="qrFileInput" type="file" accept="image/*" hidden>
          <div style="margin-top:18px">${result ? qrResult(result) : `<div class="empty-state">Faça scan, carregue imagem ou introduza um código para consultar ficha técnica, histórico e OTs ativas.</div>`}</div>
        </div>
      </section>
    </div>
  `;
}

function qrResult(item) {
  if (item.error) return `<div class="error-box">${item.error}</div>`;
  const active = state.workOrders.filter(wo => wo.equipment_id === item.id && !["Encerrada", "Cancelada"].includes(wo.status));
  return `
    ${item.status === "Inativo" ? `<div class="warning-box">Equipamento inativo: apresentar alerta antes de abrir nova ocorrência.</div>` : `<div class="success-box">Equipamento identificado e auditoria do scan registada.</div>`}
    <div class="detail-grid">
      <div class="detail-card"><span>Código</span><strong>${item.code}</strong></div>
      <div class="detail-card"><span>Nome</span><strong>${item.name}</strong></div>
      <div class="detail-card"><span>Estado</span><span class="badge ${slug(item.status)}">${item.status}</span></div>
      <div class="detail-card"><span>Localização</span><strong>${item.location_id}</strong></div>
      <div class="detail-card"><span>Criticidade</span><span class="badge criticality-${slug(item.criticality)}">${item.criticality}</span></div>
      <div class="detail-card"><span>OTs ativas</span><strong>${active.length}</strong></div>
    </div>
    <div class="form-actions"><button class="primary-action" data-create-from-equipment="${item.id}">Abrir nova ocorrência</button></div>
  `;
}

function renderDatabase() {
  root.innerHTML = `
    <div class="schema-grid">
      ${schemaTable("manufacturers", [
        ["id", "UUID", "Sim", "Identificador único"],
        ["name", "VARCHAR(255)", "Sim", "Nome do fabricante"],
        ["created_at / updated_at", "DATETIME", "Não", "Auditoria temporal"]
      ], "Lista de fabricantes usados pelos equipamentos.")}
      ${schemaTable("equipment_types", [
        ["id", "UUID", "Sim", "Identificador único"],
        ["name", "VARCHAR(255)", "Sim", "Tipo de equipamento"],
        ["created_at / updated_at", "DATETIME", "Não", "Auditoria temporal"]
      ], "Categorias de equipamento reutilizáveis.")}
      ${schemaTable("locations", [
        ["id", "UUID", "Sim", "Identificador único"],
        ["name", "VARCHAR(255)", "Sim", "Nome da localização"],
        ["created_at / updated_at", "DATETIME", "Não", "Auditoria temporal"]
      ], "Áreas ou setores onde o equipamento está instalado.")}
      ${schemaTable("equipment_statuses", [
        ["id", "UUID", "Sim", "Identificador único"],
        ["name", "VARCHAR(255)", "Sim", "Estado do equipamento"],
        ["created_at / updated_at", "DATETIME", "Não", "Auditoria temporal"]
      ], "Estados permitidos para o equipamento (Ativo, Inativo, Manutenção, Descartado).")}
      ${schemaTable("equipment", [
        ["id", "UUID", "Sim", "Identificador único"],
        ["code", "VARCHAR(50)", "Sim", "Código interno único"],
        ["qr_code", "VARCHAR(255)", "Sim", "Código QR único"],
        ["name", "VARCHAR(255)", "Sim", "Nome do equipamento"],
        ["manufacturer_id", "UUID", "Não", "Fabricante"],
        ["equipment_type_id", "UUID", "Sim", "Tipo de equipamento"],
        ["location_id", "UUID", "Sim", "Localização"],
        ["equipment_status_id", "UUID", "Sim", "Estado do equipamento"],
        ["criticality", "ENUM", "Sim", "Baixa/Média/Alta/Crítica"],
        ["created_at / updated_at", "DATETIME", "Sim", "Auditoria temporal"]
      ], "O equipamento usa tabelas auxiliares para tipo, localização, fabricante e estado.")}
      ${schemaTable("work_orders", [
        ["id", "UUID", "Sim", "Identificador"],
        ["work_order_number", "VARCHAR(50)", "Sim", "Número OT"],
        ["equipment_id", "UUID", "Sim", "Equipamento"],
        ["maintenance_type", "ENUM", "Sim", "Corretiva/Preventiva/Preditiva"],
        ["priority", "ENUM", "Sim", "Baixa/Média/Alta/Crítica"],
        ["status", "ENUM", "Sim", "Rascunho/Planejada/Atribuída/Em progresso/Aguardando peças/Aguardando aprovação/Concluída/Encerrada/Cancelada"],
        ["assigned_user_id", "UUID", "Não", "Técnico interno"],
        ["vendor_id", "UUID", "Não", "Parceiro externo"],
        ["estimated_cost / actual_cost", "DECIMAL(18,2)", "Não", "Custos"],
        ["resolution_notes", "TEXT", "Não", "Resolução"]
      ], "A ordem de trabalho pertence a um equipamento e pode possuir um fornecedor externo.")}
    </div>
  `;
}

function schemaTable(name, rows, relation) {
  return `<section class="panel schema-card">
    <h3>${name}</h3>
    <div class="panel-body table-wrap">
      <table><thead><tr><th>Campo</th><th>Tipo</th><th>Obrigatório</th><th>Descrição</th></tr></thead>
      <tbody>${rows.map(row => `<tr><td><strong>${row[0]}</strong></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("")}</tbody></table>
      <p class="muted">${relation}</p>
    </div>
  </section>`;
}

function options(values, selected) {
  return values.map(value => `<option value="${value}" ${value === selected ? "selected" : ""}>${value}</option>`).join("");
}

function equipmentForm(item = {}) {
  const isEdit = Boolean(item.id);
  openModal(isEdit ? "Editar equipamento" : "Novo equipamento", "Equipamento", `
    <div id="formMessage"></div>
    <form id="equipmentForm" class="form-grid">
      <div class="field"><label>Código</label><input name="code" required value="${item.code || ""}"></div>
      <div class="field"><label>QR Code</label><input name="qr_code" required value="${item.qr_code || generateQrToken(item.code || 'MP360')}"></div>
      <div class="field full" id="qrPreviewWrapper">${createQrPreviewHtml(item.qr_code || generateQrToken(item.code || 'MP360'))}</div>
      <div class="field"><label>Nome</label><input name="name" required value="${item.name || ""}"></div>
      <div class="field"><label>Número de série</label><input name="serial_number" value="${item.serial_number || ""}"></div>
      <div class="field"><label>Fabricante</label><input name="manufacturer_id" value="${item.manufacturer_id || ""}"></div>
      <div class="field"><label>Modelo</label><input name="model" value="${item.model || ""}"></div>
      <div class="field"><label>Tipo / Categoria</label><input name="equipment_type_id" required value="${item.equipment_type_id || ""}"></div>
      <div class="field"><label>Localização</label><input name="location_id" required value="${item.location_id || ""}"></div>
      <div class="field"><label>Criticidade</label><select name="criticality">${options(["Baixa","Média","Alta","Crítica"], item.criticality || "Média")}</select></div>
      <div class="field"><label>Estado</label><select name="status">${options(["Ativo","Inativo","Manutenção","Descartado"], item.status || "Ativo")}</select></div>
      <div class="field"><label>Tem plano?</label><select name="hasPlan">${options(["Sim","Não"], item.hasPlan ? "Sim" : "Não")}</select></div>
      <div class="field full"><label>Descrição</label><textarea name="description">${item.description || ""}</textarea></div>
      <div class="field full"><label>Notas</label><textarea name="notes">${item.notes || ""}</textarea></div>
      <div class="field full"><label>Anexo opcional</label><input name="upload" type="file" accept=".pdf,.png,.jpg,.jpeg"></div>
      <div class="form-actions field full"><button type="button" class="ghost" id="cancelModal">Cancelar</button><button class="primary-action">${isEdit ? "Guardar alterações" : "Criar equipamento"}</button></div>
    </form>
  `);
  document.getElementById("equipmentForm").addEventListener("submit", event => saveEquipment(event, item.id));

  const qrInput = document.querySelector('#modalBody input[name="qr_code"]');
  const codeInput = document.querySelector('#modalBody input[name="code"]');
  const previewWrapper = document.getElementById('qrPreviewWrapper');
  const updateQrPreview = () => {
    const qrValue = qrInput.value.trim() || generateQrToken(codeInput.value.trim() || 'MP360');
    previewWrapper.innerHTML = createQrPreviewHtml(qrValue);
  };
  if (qrInput) qrInput.addEventListener('input', updateQrPreview);
  if (codeInput) codeInput.addEventListener('input', () => {
    if (!qrInput.value.trim()) updateQrPreview();
  });
  updateQrPreview();
}

function saveEquipment(event, id) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  data.qr_code = String(data.qr_code || generateQrToken(data.code)).trim();
  const message = document.getElementById("formMessage");
  const duplicateCode = state.equipment.some(item => item.code === data.code && item.id !== id);
  const duplicateQr = state.equipment.some(item => item.qr_code === data.qr_code && item.id !== id);
  const invalidUpload = event.target.upload.files[0] && !/\.(pdf|png|jpe?g)$/i.test(event.target.upload.files[0].name);
  if (duplicateCode || duplicateQr || invalidUpload || (data.criticality === "Crítica" && data.hasPlan === "Não")) {
    message.innerHTML = `<div class="error-box">${duplicateCode ? "Código duplicado. " : ""}${duplicateQr ? "QR Code duplicado. " : ""}${invalidUpload ? "Upload inválido. " : ""}${data.criticality === "Crítica" && data.hasPlan === "Não" ? "Equipamento crítico exige plano de manutenção associado." : ""}</div>`;
    return;
  }
  const payload = {
    ...data,
    id: id || `e${Date.now()}`,
    hasPlan: data.hasPlan === "Sim",
    acquisition_date: "2026-05-20",
    warranty_end_date: "2028-05-20",
    created_at: id ? (equipmentById(id).created_at) : "2026-05-20 10:30",
    created_by: id ? (equipmentById(id).created_by) : "Utilizador",
    updated_at: "2026-05-20 10:30",
    updated_by: "Utilizador",
    deleted_at: "",
    deleted_by: "",
    operatingHours: id ? equipmentById(id).operatingHours : 0,
    failures: id ? equipmentById(id).failures : 0,
    repairHours: id ? equipmentById(id).repairHours : 0
  };
  if (id) state.equipment = state.equipment.map(item => item.id === id ? payload : item);
  else state.equipment.unshift(payload);
  state.audit.unshift(`Equipamento ${payload.code} gravado e histórico inicial gerado`);
  saveEquipmentToApi(payload);
  closeModal();
  render();
  showToast("Equipamento gravado com sucesso.");
}

function workOrderForm(equipmentId = "") {
  openModal("Nova ordem de trabalho", "Ordem de Trabalho", `
    <div id="formMessage"></div>
    <form id="workOrderForm" class="form-grid">
      <div class="field"><label>Número OT</label><input name="work_order_number" required value="WO-2026-${String(state.workOrders.length + 15).padStart(3, "0")}"></div>
      <div class="field"><label>Equipamento</label><select name="equipment_id">${state.equipment.map(item => `<option value="${item.id}" ${item.id === equipmentId ? "selected" : ""}>${item.code} · ${item.name}</option>`).join("")}</select></div>
      <div class="field"><label>Tipo</label><select name="maintenance_type">${options(["Corretiva","Preventiva","Preditiva"], "Corretiva")}</select></div>
      <div class="field"><label>Prioridade</label><select name="priority">${options(["Baixa","Média","Alta","Crítica"], "Alta")}</select></div>
      <div class="field"><label>Técnico interno</label><input name="assigned_user_id" value="João Matos"></div>
      <div class="field"><label>Parceiro externo</label><input name="vendor_id" placeholder="Opcional"></div>
      <div class="field"><label>Custo estimado</label><input name="estimated_cost" type="number" value="650"></div>
      <div class="field"><label>Data prevista</label><input name="planned_start_date" type="datetime-local"></div>
      <div class="field full"><label>Diagnóstico inicial</label><textarea name="resolution_notes" placeholder="Descrição da avaria ou ocorrência"></textarea></div>
      <div class="form-actions field full"><button type="button" class="ghost" id="cancelModal">Cancelar</button><button class="primary-action">Criar OT</button></div>
    </form>
  `);
  document.getElementById("workOrderForm").addEventListener("submit", saveWorkOrder);
}

function saveWorkOrder(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  if (state.workOrders.some(item => item.work_order_number === data.work_order_number)) {
    document.getElementById("formMessage").innerHTML = `<div class="error-box">Número da OT duplicado.</div>`;
    return;
  }
  const payload = {
    ...data, id: `w${Date.now()}`, status: "Atribuída", quote_val: "", actual_start_date: "", actual_end_date: "",
    actual_cost: 0, hours: 0, evidence: "", estimated_cost: Number(data.estimated_cost || 0),
    created_at: "2026-05-20 10:30", created_by: "Utilizador", updated_at: "2026-05-20 10:30", updated_by: "Utilizador",
    deleted_at: "", deleted_by: ""
  };
  state.workOrders.unshift(payload);
  state.audit.unshift(`OT ${payload.work_order_number} criada e atribuída`);
  saveWorkOrderToApi(payload);
  closeModal();
  setView("workorders");
  showToast("Ordem de trabalho criada com sucesso.");
}

function showEquipmentDetail(id) {
  const item = equipmentById(id);
  const orders = state.workOrders.filter(wo => wo.equipment_id === id);
  openModal(item.name, "Ficha técnica do equipamento", `
    <div class="grid two-col">
      <div class="detail-grid">
        ${detail("Código", item.code)}${detail("QR Code", item.qr_code)}${detail("Estado", `<span class="badge ${slug(item.status)}">${item.status}</span>`)}
        ${detail("Tipo", item.equipment_type_id)}${detail("Localização", item.location_id)}${detail("Criticidade", `<span class="badge criticality-${slug(item.criticality)}">${item.criticality}</span>`)}
        ${detail("Fabricante", item.manufacturer_id)}${detail("Modelo", item.model)}${detail("Série", item.serial_number)}
      </div>
      <div><div class="qr-box"><img class="qr-image" src="${createQrDataUrl(item.qr_code)}" alt="QR ${item.qr_code}"></div><p class="muted">${item.description}</p></div>
    </div>
    <h3 style="margin-top:20px">Ordens associadas</h3>
    <div class="table-wrap" style="margin-top:10px">${renderMiniOrders(orders)}</div>
  `);
}

function showWorkOrderDetail(id) {
  const wo = state.workOrders.find(item => item.id === id);
  const eq = equipmentById(wo.equipment_id);
  openModal(wo.work_order_number, "Detalhe da ordem de trabalho", `
    <div class="detail-grid">
      ${detail("Equipamento", eq.name)}${detail("Tipo", wo.maintenance_type)}${detail("Prioridade", `<span class="badge priority-${slug(wo.priority)}">${wo.priority}</span>`)}
      ${detail("Estado", `<span class="badge ${slug(wo.status)}">${wo.status}</span>`)}${detail("Técnico", wo.assigned_user_id || "Por atribuir")}${detail("Parceiro", wo.vendor_id || "Interna")}
      ${detail("Custo estimado", money(wo.estimated_cost))}${detail("Custo real", money(wo.actual_cost))}${detail("Horas", `${wo.hours}h`)}
      ${detail("Resolução", wo.resolution_notes || "Ainda sem resolução")}${detail("Evidências", wo.evidence || "Sem anexos")}${detail("Validade orçamento", wo.quote_val || "N/D")}
    </div>
    ${wo.status === "Encerrada" ? `<div class="warning-box" style="margin-top:16px">OT encerrada: registo apenas de leitura.</div>` : `<div class="form-actions"><button class="secondary-action" data-progress-workorder="${wo.id}">Avançar estado</button></div>`}
  `);
}

function detail(label, value) {
  return `<div class="detail-card"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderMiniOrders(orders) {
  if (!orders.length) return `<div class="empty-state">Sem ordens associadas.</div>`;
  return `<table><thead><tr><th>Número</th><th>Estado</th><th>Prioridade</th><th>Custo</th></tr></thead><tbody>${orders.map(wo => `<tr><td>${wo.work_order_number}</td><td><span class="badge ${slug(wo.status)}">${wo.status}</span></td><td><span class="badge priority-${slug(wo.priority)}">${wo.priority}</span></td><td>${money(wo.actual_cost || wo.estimated_cost)}</td></tr>`).join("")}</tbody></table>`;
}

function progressWorkOrder(id) {
  const sequence = ["Rascunho", "Atribuída", "Em progresso", "Concluída", "Encerrada"];
  const wo = state.workOrders.find(item => item.id === id);
  if (wo.status === "Encerrada") return showToast("OT encerrada está em modo somente leitura.");
  if (wo.vendor_id && wo.status !== "Aguardando aprovação" && !wo.quote_val) {
    wo.status = "Aguardando aprovação";
    wo.quote_val = "2026-06-05 18:00";
    state.audit.unshift(`${wo.work_order_number} colocada em Aguardando aprovação para aprovação de orçamento`);
  } else {
    const current = sequence.indexOf(wo.status);
    wo.status = sequence[Math.min(sequence.length - 1, Math.max(0, current) + 1)] || "Atribuída";
    if (wo.status === "Em progresso") wo.actual_start_date = "2026-05-20 10:45";
    if (wo.status === "Concluída") {
      wo.resolution_notes = wo.resolution_notes || "Diagnóstico registado, intervenção concluída e evidências anexadas.";
      wo.hours = wo.hours || 2.5;
      wo.evidence = wo.evidence || "Evidências anexadas";
      wo.actual_cost = wo.actual_cost || wo.estimated_cost;
    }
  }
  wo.updated_at = "2026-05-20 10:45";
  wo.updated_by = "Utilizador";
  closeModal();
  render();
  showToast(`OT atualizada para ${wo.status}.`);
}

function closeWorkOrder(id) {
  const wo = state.workOrders.find(item => item.id === id);
  if (!wo.resolution_notes || !wo.hours || !(wo.actual_cost || wo.estimated_cost)) {
    showToast("Não é possível fechar: faltam resolução, horas ou custos.");
    return;
  }
  wo.status = "Encerrada";
  wo.actual_end_date = "2026-05-20 11:00";
  wo.actual_cost = wo.actual_cost || wo.estimated_cost;
  state.audit.unshift(`${wo.work_order_number} encerrada; KPIs e histórico do equipamento atualizados`);
  render();
  showToast("OT encerrada e auditoria registada.");
}

function scanQr() {
  const value = document.getElementById("qrInput").value.trim();
  scanQrValue(value);
}

function render() {
  if (state.view === "dashboard") renderDashboard();
  if (state.view === "equipment") renderEquipment();
  if (state.view === "workorders") renderWorkOrders();
  if (state.view === "closure") renderClosure();
  if (state.view === "qr") renderQr();
  if (state.view === "database") renderDatabase();
}

document.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.view) setView(target.dataset.view);
  if (target.id === "mobileMenu") document.querySelector(".sidebar").classList.toggle("open");
  if (target.id === "closeModal" || target.id === "cancelModal") closeModal();
  if (target.id === "quickWorkOrder" || target.id === "newWorkOrder") workOrderForm();
  if (target.id === "newEquipment") equipmentForm();
  if (target.dataset.detailEquipment) showEquipmentDetail(target.dataset.detailEquipment);
  if (target.dataset.editEquipment) equipmentForm(equipmentById(target.dataset.editEquipment));
  if (target.dataset.detailWorkorder) showWorkOrderDetail(target.dataset.detailWorkorder);
  if (target.dataset.progressWorkorder) progressWorkOrder(target.dataset.progressWorkorder);
  if (target.dataset.closeWorkorder) closeWorkOrder(target.dataset.closeWorkorder);
  if (target.id === "fillQr") document.getElementById("qrInput").value = "MP360-QR-APU-001";
  if (target.id === "scanQr") scanQr();
  if (target.id === "startCamera") {
    if (state.qrScanActive) stopQrScanner(); else startQrScanner();
  }
  if (target.id === "uploadQr") document.getElementById('qrFileInput').click();
  if (target.dataset.createFromEquipment) workOrderForm(target.dataset.createFromEquipment);
});

document.addEventListener("input", event => {
  if (event.target.id === "equipmentSearch") { state.equipmentSearch = event.target.value; renderEquipment(); }
  if (event.target.id === "workOrderSearch") { state.workOrderSearch = event.target.value; renderWorkOrders(); }
  if (event.target.id === "globalSearch") {
    const q = event.target.value.toLowerCase();
    state.equipmentSearch = q;
    state.workOrderSearch = q;
  }
});

document.addEventListener("change", event => {
  if (event.target.id === "equipmentStatus") { state.equipmentStatus = event.target.value; renderEquipment(); }
  if (event.target.id === "equipmentCriticality") { state.equipmentCriticality = event.target.value; renderEquipment(); }
  if (event.target.id === "workOrderStatus") { state.workOrderStatus = event.target.value; renderWorkOrders(); }
  if (event.target.id === "workOrderPriority") { state.workOrderPriority = event.target.value; renderWorkOrders(); }
  if (event.target.id === "qrFileInput") scanQrFromFile(event.target.files[0]);
});

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

loadStateFromApi();
