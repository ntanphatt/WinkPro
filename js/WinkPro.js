// Wink Pro Crack
var obj = JSON.parse($response.body);

if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_type = 1;
    obj.data.vip_expire_time = 9999999999;
    obj.data.is_lifetime_vip = true;
    
    if (obj.data.vip_group) {
        for (let i = 0; i < obj.data.vip_group.length; i++) {
            obj.data.vip_group[i].is_owned = true;
            obj.data.vip_group[i].expire_time = 9999999999;
        }
    }
}
$done({ body: JSON.stringify(obj) });
