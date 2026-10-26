// Wink Pro Full Unlock
var obj = JSON.parse($response.body);

// Hàm đệ quy để tìm và sửa tất cả các trường VIP ở mọi cấp độ JSON
function unlockVip(data) {
    if (!data || typeof data !== 'object') return;
    
    for (let key in data) {
        // Nếu key liên quan đến VIP
        if (key.toLowerCase().includes('vip') || key.toLowerCase().includes('member') || key.toLowerCase().includes('pro')) {
            if (typeof data[key] === 'boolean') {
                data[key] = true; // Bật tất cả các cờ boolean
            } else if (typeof data[key] === 'number') {
                data[key] = 1; // Đặt trạng thái thành 1
            } else if (typeof data[key] === 'string' && (data[key].includes('false') || data[key] === '0')) {
                data[key] = 'true';
            } else if (key.toLowerCase().includes('expire') || key.toLowerCase().includes('time')) {
                data[key] = 9999999999; // Vô hạn thời gian
            }
        }
        
        // Đệ quy sâu vào bên trong
        if (typeof data[key] === 'object') {
            unlockVip(data[key]);
        }
    }
}

unlockVip(obj);

$done({ body: JSON.stringify(obj) });
