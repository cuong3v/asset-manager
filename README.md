https://jhstrrzxknxuqxmrlqdn.supabase.co
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoc3Rycnp4a254dXF4bXJscWRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUyODkxNCwiZXhwIjoyMDk3MTA0OTE0fQ.VuHxhoewPspFmagkO8dj7JeMtpFLcFXExsgtBvXlCCc

cd asset-manager
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/cuong3v/asset-manager.git
git push -u origin main



git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/cuong3v/asset-manager.git
git push -u origin main


# 💰 Asset Manager — Hướng dẫn Deploy

## Cấu trúc project
```
asset-manager/
├── api/
│   └── data.js          ← Serverless function (đọc/ghi Supabase)
├── public/
│   └── index.html       ← Toàn bộ giao diện app
├── supabase_setup.sql   ← Chạy 1 lần trong Supabase
├── vercel.json          ← Cấu hình Vercel routing
└── package.json
```

---

## Bước 1 — Tạo database trên Supabase (miễn phí)

1. Vào https://supabase.com → **Start your project** → đăng ký bằng GitHub
2. Tạo project mới → đặt tên (ví dụ `asset-manager`) → chọn region **Southeast Asia (Singapore)**
3. Sau khi tạo xong, vào **SQL Editor** → paste nội dung file `supabase_setup.sql` → bấm **Run**
4. Vào **Project Settings → API**, lấy 2 thứ:
   - **Project URL** (dạng `https://xxxx.supabase.co`)
   - **service_role key** (ở mục "Project API keys" → `service_role`, bấm Reveal)
   - ⚠️ **Giữ kín service_role key**, không commit lên GitHub



---

## Bước 2 — Đẩy code lên GitHub

1. Tạo repo mới trên GitHub (đặt tên `asset-manager`, để **Private**)
2. Mở terminal, chạy:
```bash
cd asset-manager
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TÊN_BẠN/asset-manager.git
git push -u origin main
```

---

## Bước 3 — Deploy lên Vercel (miễn phí)

1. Vào https://vercel.com → đăng nhập bằng GitHub
2. Bấm **Add New Project** → chọn repo `asset-manager`
3. Ở mục **Environment Variables**, thêm 3 biến sau:

| Name | Value |
|------|-------|
| `SUPABASE_URL` | URL lấy ở Bước 1 |
| `SUPABASE_SERVICE_KEY` | service_role key ở Bước 1 |
| `APP_PASSWORD` | `Cuong321@` (hoặc đổi tùy ý) |

4. Bấm **Deploy** → đợi ~1 phút
5. Vercel cho bạn 1 link dạng `https://asset-manager-xxx.vercel.app` → **bookmark lại**, dùng trên mọi thiết bị

---

## Cách dùng sau khi deploy

- Truy cập link Vercel từ **bất kỳ trình duyệt, thiết bị nào**
- Nhập password (`Cuong321@`) để đăng nhập
- Mọi thay đổi **tự động lưu lên Cloud** sau 1.5 giây (có thể tắt tick "Tự động đồng bộ")
- Mở trên thiết bị mới → dữ liệu tự load từ Cloud

---

## Cập nhật app sau này

Mỗi khi muốn sửa tính năng, chỉ cần sửa file và:
```bash
git add .
git commit -m "cập nhật tính năng X"
git push
```
Vercel tự động redeploy trong ~30 giây.
