<?php
// קבלת תאריך מהלקוח
$data = json_decode(file_get_contents("php://input"), true);
$date = $data["date"] ?? null;

if (!$date) {
    echo json_encode(["status" => "error", "message" => "תאריך חסר"]);
    exit;
}

$file = "calendar.json";

// טוען את ה־JSON הקיים
$events = json_decode(file_get_contents($file), true);

// בדיקה אם כבר קיים אירוע באותו יום
$exists = false;
foreach ($events as $event) {
    if ($event["start"] === $date) {
        $exists = true;
        break;
    }
}

// אם לא קיים – מוסיפים
if (!$exists) {
    $events[] = [
        "title" => "תפוס",
        "start" => $date,
        "allDay" => true
    ];
}

// שמירה חזרה לקובץ
file_put_contents($file, json_encode($events, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode(["status" => "ok"]);
?>
