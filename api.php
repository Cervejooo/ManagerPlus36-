<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    switch ($action) {
        case 'state':
            $equipment = getEquipment();
            $workOrders = getWorkOrders();
            jsonResponse(['equipment' => $equipment, 'workOrders' => $workOrders]);
            break;
        case 'equipment':
            jsonResponse(getEquipment());
            break;
        case 'workorders':
            jsonResponse(getWorkOrders());
            break;
        default:
            jsonResponse(['error' => 'Ação inválida'], 400);
    }
}

if ($method === 'POST') {
    $payload = json_decode(file_get_contents('php://input'), true);
    if (!is_array($payload)) {
        jsonResponse(['error' => 'JSON inválido'], 400);
    }
    switch ($action) {
        case 'saveEquipment':
            jsonResponse(saveEquipment($payload));
            break;
        case 'saveWorkOrder':
            jsonResponse(saveWorkOrder($payload));
            break;
        default:
            jsonResponse(['error' => 'Ação inválida para POST'], 400);
    }
}

function getEquipment() {
    global $pdo;
    $stmt = $pdo->query('SELECT * FROM equipment ORDER BY created_at DESC');
    return $stmt->fetchAll();
}

function getWorkOrders() {
    global $pdo;
    $stmt = $pdo->query('SELECT * FROM work_orders ORDER BY created_at DESC');
    return $stmt->fetchAll();
}

function saveEquipment($data) {
    global $pdo;
    $data['hasPlan'] = isset($data['hasPlan']) ? (int)(bool)$data['hasPlan'] : 0;
    if (empty($data['id'])) {
        $stmt = $pdo->prepare('INSERT INTO equipment (id, code, qr_code, name, description, serial_number, manufacturer_id, model, equipment_type_id, location_id, criticality, acquisition_date, warranty_end_date, status, notes, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, hasPlan, operatingHours, failures, repairHours) VALUES (:id, :code, :qr_code, :name, :description, :serial_number, :manufacturer_id, :model, :equipment_type_id, :location_id, :criticality, :acquisition_date, :warranty_end_date, :status, :notes, :created_at, :created_by, :updated_at, :updated_by, :deleted_at, :deleted_by, :hasPlan, :operatingHours, :failures, :repairHours)');
    } else {
        $stmt = $pdo->prepare('REPLACE INTO equipment (id, code, qr_code, name, description, serial_number, manufacturer_id, model, equipment_type_id, location_id, criticality, acquisition_date, warranty_end_date, status, notes, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, hasPlan, operatingHours, failures, repairHours) VALUES (:id, :code, :qr_code, :name, :description, :serial_number, :manufacturer_id, :model, :equipment_type_id, :location_id, :criticality, :acquisition_date, :warranty_end_date, :status, :notes, :created_at, :created_by, :updated_at, :updated_by, :deleted_at, :deleted_by, :hasPlan, :operatingHours, :failures, :repairHours)');
    }
    $stmt->execute([
        ':id' => $data['id'] ?? uniqid('e', true),
        ':code' => $data['code'] ?? '',
        ':qr_code' => $data['qr_code'] ?? '',
        ':name' => $data['name'] ?? '',
        ':description' => $data['description'] ?? '',
        ':serial_number' => $data['serial_number'] ?? '',
        ':manufacturer_id' => $data['manufacturer_id'] ?? '',
        ':model' => $data['model'] ?? '',
        ':equipment_type_id' => $data['equipment_type_id'] ?? '',
        ':location_id' => $data['location_id'] ?? '',
        ':criticality' => $data['criticality'] ?? '',
        ':acquisition_date' => $data['acquisition_date'] ?? '',
        ':warranty_end_date' => $data['warranty_end_date'] ?? '',
        ':status' => $data['status'] ?? '',
        ':notes' => $data['notes'] ?? '',
        ':created_at' => $data['created_at'] ?? date('Y-m-d H:i:s'),
        ':created_by' => $data['created_by'] ?? 'Utilizador',
        ':updated_at' => $data['updated_at'] ?? date('Y-m-d H:i:s'),
        ':updated_by' => $data['updated_by'] ?? 'Utilizador',
        ':deleted_at' => $data['deleted_at'] ?? '',
        ':deleted_by' => $data['deleted_by'] ?? '',
        ':hasPlan' => $data['hasPlan'],
        ':operatingHours' => $data['operatingHours'] ?? 0,
        ':failures' => $data['failures'] ?? 0,
        ':repairHours' => $data['repairHours'] ?? 0,
    ]);
    return ['success' => true, 'id' => $data['id'] ?? uniqid('e', true)];
}

function saveWorkOrder($data) {
    global $pdo;
    $stmt = $pdo->prepare('REPLACE INTO work_orders (id, work_order_number, equipment_id, maintenance_type, priority, status, assigned_user_id, vendor_id, quote_val, planned_start_date, actual_start_date, actual_end_date, estimated_cost, actual_cost, resolution_notes, hours, evidence, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) VALUES (:id, :work_order_number, :equipment_id, :maintenance_type, :priority, :status, :assigned_user_id, :vendor_id, :quote_val, :planned_start_date, :actual_start_date, :actual_end_date, :estimated_cost, :actual_cost, :resolution_notes, :hours, :evidence, :created_at, :created_by, :updated_at, :updated_by, :deleted_at, :deleted_by)');
    $stmt->execute([
        ':id' => $data['id'] ?? uniqid('w', true),
        ':work_order_number' => $data['work_order_number'] ?? '',
        ':equipment_id' => $data['equipment_id'] ?? '',
        ':maintenance_type' => $data['maintenance_type'] ?? '',
        ':priority' => $data['priority'] ?? '',
        ':status' => $data['status'] ?? '',
        ':assigned_user_id' => $data['assigned_user_id'] ?? '',
        ':vendor_id' => $data['vendor_id'] ?? '',
        ':quote_val' => $data['quote_val'] ?? '',
        ':planned_start_date' => $data['planned_start_date'] ?? '',
        ':actual_start_date' => $data['actual_start_date'] ?? '',
        ':actual_end_date' => $data['actual_end_date'] ?? '',
        ':estimated_cost' => $data['estimated_cost'] ?? 0,
        ':actual_cost' => $data['actual_cost'] ?? 0,
        ':resolution_notes' => $data['resolution_notes'] ?? '',
        ':hours' => $data['hours'] ?? 0,
        ':evidence' => $data['evidence'] ?? '',
        ':created_at' => $data['created_at'] ?? date('Y-m-d H:i:s'),
        ':created_by' => $data['created_by'] ?? 'Utilizador',
        ':updated_at' => $data['updated_at'] ?? date('Y-m-d H:i:s'),
        ':updated_by' => $data['updated_by'] ?? 'Utilizador',
        ':deleted_at' => $data['deleted_at'] ?? '',
        ':deleted_by' => $data['deleted_by'] ?? '',
    ]);
    return ['success' => true, 'id' => $data['id'] ?? uniqid('w', true)];
}
