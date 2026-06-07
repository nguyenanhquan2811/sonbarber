-- 1. Create table 'shop'
CREATE TABLE shop (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR NOT NULL,
  fanpage VARCHAR,
  operating_hours VARCHAR NOT NULL,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 2. Create table 'service_group'
CREATE TABLE service_group (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL UNIQUE
);

-- 3. Create table 'products_group'
CREATE TABLE products_group (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL UNIQUE
);

-- 4. Create table 'service'
CREATE TABLE service (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  group_id UUID REFERENCES service_group(id) ON DELETE SET NULL,
  price NUMERIC NOT NULL,
  image TEXT,
  description TEXT,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 5. Create table 'product'
CREATE TABLE product (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  group_id UUID REFERENCES products_group(id) ON DELETE SET NULL,
  price NUMERIC NOT NULL,
  image TEXT,
  description TEXT,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 6. Create table 'course'
CREATE TABLE course (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  price NUMERIC NOT NULL,
  duration VARCHAR NOT NULL,
  description_details TEXT,
  status SMALLINT DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 7. Create table 'registration'
CREATE TABLE registration (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  course_name VARCHAR NOT NULL,
  note TEXT,
  status VARCHAR DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 8. Create table 'blog_post'
CREATE TABLE blog_post (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR NOT NULL UNIQUE,
  content TEXT NOT NULL,
  cover_image TEXT,
  status VARCHAR DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 9. Create table 'review'
CREATE TABLE review (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  avatar TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 10. Create table 'gallery_item'
CREATE TABLE gallery_item (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR,
  category VARCHAR NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 11. Create table 'contact'
CREATE TABLE contact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);
