import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, course_name, note } = body;

    if (!name || !phone || !course_name) {
      return NextResponse.json({ message: "Thiếu thông tin bắt buộc" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('registration')
      .insert([
        { name, phone, course_name, note, status: 'pending' }
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ message: "Lỗi hệ thống khi đăng ký. Vui lòng thử lại sau." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Đăng ký thành công!", data }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Lỗi Server." }, { status: 500 });
  }
}
