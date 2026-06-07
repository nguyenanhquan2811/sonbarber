require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const servicesData = [
  {
    group: 'Cắt lẻ',
    items: [
      { name: 'Cắt Tóc Nam', price: 90000 },
      { name: 'Cắt Trẻ Em', price: 60000 },
      { name: 'Cắt Master', price: 120000 },
      { name: 'Boss Cắt', price: 200000 },
    ]
  },
  {
    group: 'Dịch vụ lẻ',
    items: [
      { name: 'Gội Đầu', price: 20000 },
      { name: 'Gội Đầu Nữ', price: 60000 },
      { name: 'Gội Đầu Trẻ Em', price: 10000 },
      { name: 'Gội Tím', price: 50000 },
      { name: 'Gội Massage Vai Gáy', price: 120000 },
      { name: 'Rửa Mặt', price: 10000 },
      { name: 'Rửa Mặt + Tẩy Tế Bào Chết', price: 20000 },
      { name: 'Rửa Mặt + Tẩy Tế Bào Chết + Massage', price: 40000 },
      { name: 'Hút Mụn', price: 20000 },
      { name: 'Hút Mụn + Đắp Mặt Nạ', price: 100000 },
      { name: 'Lột Mụn', price: 50000 },
      { name: 'Đắp Mặt Nạ', price: 20000 },
      { name: 'Lấy Ráy Tai', price: 50000 },
      { name: 'Lấy Ráy Tai VIP', price: 60000 },
      { name: 'Nhổ Tóc Bạc', price: 50000 },
      { name: 'Vuốt Tạo Kiểu', price: 30000 },
      { name: 'Đánh Mí Mắt', price: 30000 },
      { name: 'Cạo Mặt', price: 20000 },
      { name: 'Cạo Mặt Khăn Nóng', price: 50000 },
    ]
  },
  {
    group: 'Hóa chất - Nhuộm',
    items: [
      { name: 'Nhuộm Đen', price: 200000 },
      { name: 'Nhuộm Thời Trang', price: 300000 },
      { name: 'Nhuộm Thời Trang (Boss)', price: 400000 },
      { name: 'Nhuộm Cao Cấp (Boss)', price: 589000 },
      { name: 'Nhuộm Phục Hồi Cao Cấp', price: 489000 },
    ]
  },
  {
    group: 'Hóa chất - Uốn',
    items: [
      { name: 'Uốn Thường', price: 350000 },
      { name: 'Uốn Wavy', price: 450000 },
      { name: 'Uốn Wavy Cao Cấp', price: 619000 },
      { name: 'Uốn Con Sâu', price: 450000 },
      { name: 'Uốn Ruffled', price: 450000 },
      { name: 'Uốn Chữ S', price: 450000 },
      { name: 'Uốn Culys', price: 400000 },
      { name: 'Uốn Culys (Boss)', price: 500000 },
      { name: 'Uốn Phục Hồi Cao Cấp', price: 719000 },
      { name: 'Uốn (Boss)', price: 550000 },
    ]
  },
  {
    group: 'Hóa chất - Duỗi/Ép',
    items: [
      { name: 'Duỗi Thẳng Tóc', price: 250000 },
      { name: 'Ép Side', price: 200000 },
      { name: 'Ép Side (Boss)', price: 300000 },
      { name: 'Ép Side Full Đầu', price: 339000 },
      { name: 'Ép Side Full Đầu (Boss)', price: 389000 },
    ]
  },
  {
    group: 'Hóa chất - Tẩy/Phục hồi',
    items: [
      { name: 'Tẩy Tóc', price: 200000 },
      { name: 'Tẩy Bạch Kim', price: 850000 },
      { name: 'Nâng Tông', price: 250000 },
      { name: 'Ủ Keratin', price: 100000 },
      { name: 'Hấp Phục Hồi', price: 150000 },
    ]
  }
];

const productsData = [
  {
    group: 'Sản phẩm học viên',
    items: [
      { name: 'Túi Đồ Nghề', price: 200000 },
      { name: 'Bộ Kéo Đen', price: 700000 },
      { name: 'Dao Cạo', price: 40000 },
      { name: 'Áo Choàng', price: 85000 },
      { name: 'Kẹp Master', price: 60000 },
      { name: 'Tông Đơ VGR', price: 950000 },
      { name: 'Tông Đơ Kemei', price: 495000 },
      { name: 'Tông Đơ MRD', price: 1600000 },
      { name: 'Tông Đơ Magic Mỹ', price: 2600000 },
      { name: 'Bình Xịt', price: 65000 },
      { name: 'Lược Kê', price: 80000 },
      { name: 'Lược Tóp', price: 70000 },
      { name: 'Lược Tạo Kiểu', price: 70000 },
      { name: 'Chổi Phủi', price: 75000 },
      { name: 'Mút Phủi', price: 70000 },
    ]
  },
  {
    group: 'Sáp / Wax',
    items: [
      { name: 'Sáp HairPlex Clay', price: 250000, description: '80 gr - Việt Nam' },
      { name: 'Colmay Blue (To)', price: 350000, description: '116 gr - Việt Nam' },
      { name: 'Colmay Blue (Nhỏ)', price: 220000, description: '56 gr - Việt Nam' },
      { name: 'Colmav Nâu (To)', price: 350000, description: '116 gr - Việt Nam' },
      { name: 'Colmav Nâu (Nhỏ)', price: 220000, description: '56 gr - Việt Nam' },
      { name: 'Colmav Đỏ (Nhỏ)', price: 200000, description: '56 gr - Việt Nam' },
      { name: 'Reuzel Bạc (Nhỏ)', price: 299000, description: '35 gr - Mỹ' },
      { name: 'Reuzel Bạc (Vừa)', price: 495000, description: '113 gr - Mỹ' },
      { name: 'Reuzel Xanh Dương (Vừa)', price: 470000, description: '113 gr - Mỹ' },
      { name: 'Reuzel Pink (Nhỏ)', price: 299000, description: '35 gr - Mỹ' },
      { name: 'Reuzel Pink (Vừa)', price: 495000, description: '113 gr - Mỹ' },
      { name: 'Reuzel Red (Nhỏ)', price: 285000, description: '35 gr - Mỹ' },
      { name: 'Reuzel Red (Vừa)', price: 470000, description: '113 gr - Mỹ' },
      { name: 'Reuzel Green (Nhỏ)', price: 285000, description: '35 gr - Mỹ' },
      { name: 'Reuzel Green (Vừa)', price: 470000, description: '113 gr - Mỹ' },
      { name: 'Reuzel Trắng (Nhỏ)', price: 285000, description: '35 gr - Mỹ' },
      { name: 'Reuzel Trắng (Vừa)', price: 470000, description: '113 gr - Mỹ' },
      { name: 'Sáp Cin Plus (Nhỏ)', price: 220000, description: '30 gr - Italy' },
      { name: 'Sáp Cin Plus (To)', price: 350000, description: '85 gr - Italy' },
    ]
  },
  {
    group: 'Gôm / Keo xịt',
    items: [
      { name: 'Gôm Reuzel', price: 150000, description: '420 ml' },
      { name: 'Gôm Butterfly', price: 160000, description: '380 ml' },
      { name: 'Gôm Cin Plus', price: 250000, description: '300 ml - Việt Nam' },
      { name: 'Gôm Karseell', price: 180000 },
    ]
  },
  {
    group: 'Xịt / Dưỡng / Tinh dầu',
    items: [
      { name: 'Xịt Dưỡng Saryyam', price: 250000, description: '100 ml - Việt Nam' },
      { name: 'Xịt Mọc Tóc', price: 250000, description: '100 ml - Việt Nam' },
      { name: 'Xịt Tạo Phồng Reuzel', price: 320000, description: '99 ml - Mỹ' },
      { name: 'Dưỡng Reuzel', price: 320000, description: '100 ml - Mỹ' },
      { name: 'Tinh Dầu Dưỡng Tóc', price: 250000, description: '100 ml - Việt Nam' },
      { name: 'Surf Tonic', price: 440000, description: '355 ml - Mỹ' },
      { name: 'Grooming Tonic', price: 489000, description: '355 ml - Mỹ' },
      { name: 'Xịt Phồng Cin Plus', price: 250000, description: '150 ml - Italy' },
    ]
  },
  {
    group: 'Thiết bị / Dụng cụ',
    items: [
      { name: 'Máy Cạo Râu', price: 200000, description: 'Trung' },
      { name: 'Máy Cạo Râu (Cao Cấp)', price: 250000, description: 'Trung' },
      { name: 'Máy Sấy Tóc', price: 380000 },
      { name: 'Lược Tròn', price: 50000, description: 'Việt Nam' },
      { name: 'Bộ Lấy Tai', price: 100000, description: 'Việt Nam' },
    ]
  },
  {
    group: 'Khác',
    items: [
      { name: 'Sữa Rửa Mặt Nam', price: 300000, description: '150 ml' },
      { name: 'Dầu Gội Antisol', price: 283000, description: '240 ml' },
      { name: 'Tẩy Da Chết', price: 145000 },
      { name: 'Nhuộm Đen PB', price: 300000 },
    ]
  }
];

const coursesData = [
  {
    name: "Khóa Đào Tạo Barber Cơ Bản",
    duration: "3 tháng",
    price: 15000000,
    description_details: JSON.stringify({
      desc: "Khóa học dành cho người mới bắt đầu. Học các kỹ năng từ cách cầm kéo, tông đơ đến các kiểu tóc Fade thịnh hành.",
      features: ["Bao ra nghề", "Tài trợ 100% hóa chất thực hành", "Cấp chứng chỉ tốt nghiệp"]
    })
  },
  {
    name: "Khóa Đào Tạo Barber Nâng Cao",
    duration: "1.5 tháng",
    price: 10000000,
    description_details: JSON.stringify({
      desc: "Dành cho thợ muốn nâng cao tay nghề uốn, nhuộm, tẩy phục hồi và các kiểu tóc xu hướng.",
      features: ["Chuyên sâu Hóa chất", "Kỹ năng tư vấn khách hàng", "Được thực hành trên mẫu thật"]
    })
  },
  {
    name: "Khóa Học Barber Master/Boss",
    duration: "6 tháng",
    price: 0,
    description_details: JSON.stringify({
      desc: "Đào tạo từ A-Z để trở thành Master Barber và cung cấp kiến thức quản lý, vận hành để mở tiệm riêng.",
      features: ["Đào tạo chiến lược MKT", "Hỗ trợ setup mở tiệm", "Trở thành đối tác nhượng quyền"]
    })
  }
];

async function run() {
  console.log('Clearing old data...');
  // Delete all to avoid duplicates
  await supabase.from('service').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('service_group').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('product').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('products_group').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('course').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  console.log('Inserting Services...');
  for (const group of servicesData) {
    const { data: gData, error: gErr } = await supabase.from('service_group').insert({ name: group.group }).select().single();
    if (gErr) { console.error('Error inserting service_group', group.group, gErr); continue; }
    
    for (const item of group.items) {
      await supabase.from('service').insert({
        name: item.name,
        price: item.price,
        group_id: gData.id,
      });
    }
  }

  console.log('Inserting Products...');
  for (const group of productsData) {
    const { data: gData, error: gErr } = await supabase.from('products_group').insert({ name: group.group }).select().single();
    if (gErr) { console.error('Error inserting products_group', group.group, gErr); continue; }
    
    for (const item of group.items) {
      await supabase.from('product').insert({
        name: item.name,
        price: item.price,
        description: item.description || null,
        group_id: gData.id,
      });
    }
  }

  console.log('Inserting Courses...');
  for (const item of coursesData) {
    const { error: cErr } = await supabase.from('course').insert(item);
    if (cErr) console.error('Error inserting course', item.name, cErr);
  }

  console.log('Done!');
}

run();
